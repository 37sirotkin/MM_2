import gsap from 'gsap/all';
import { fieldItems, PLATFORMS } from '../const';
import { Sprite } from '../core/Sprite';
import { getRandomValue, hitRectangle } from '../core/utils';
import { app, crystalsBar } from '../index';
import { Howl } from 'howler';

export class ItemField extends Sprite {
    constructor(config) {
        super(config);
        this.texture = app.getTexture(config.name);
        this.type = config.type;
        this.select = app.getSprite('select');
        this.parentType = config.parentType;
        this.anchor.set(0.5);
        this.draggable = false;
        this.onBoard = config.onBoard;
        this.interactive = true;
        fieldItems.push(this);

        this.on('pointerdown', this.dragStart)
            .on('pointerup', this.dragEnd)
            .on('pointerupoutside', this.dragEnd)
            .on('pointermove', this.dragMove);
    }

    dragStart(event) {
        console.log('dragStart');
        app.sounds.click.play();
        this.draggable = true;
        this.dragStartX = this.x;
        this.dragStartY = this.y;
        this.data = event.data;
        this.parent.addChild(this.select);
        this.select.x = this.x;
        this.select.y = this.y;
    }

    dragMove() {
        console.log('dragMove');
        if (this.draggable) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    dragEnd() {
        console.log('dragEnd');
        if (this.draggable) {
            this.checkMerge();
            this.x = this.dragStartX;
            this.y = this.dragStartY;
            this.draggable = false;
        }
    }

    checkMerge() {
        fieldItems.forEach((item) => {
            if (
                hitRectangle(this, item, 0) &&
                this.draggable &&
                item != this &&
                item.type === this.type
            ) {
                console.log('MERGE!');
                this.parent.removeChild(this.select);
                this.createParentItem(this, item);
            } else {
                console.log('no merge');
            }
        });
    }

    createParentItem(dragObject, item) {
        app.sounds.merge.play()
        this.parent.countMerge++;
        console.log(this.parent.countMerge);
        if (this.parent.countMerge > 0 && this.parent.countMerge < 2) {
            const hand = app.getSprite('hand');
            hand.removeTutorial();
        }
        if (this.parent.countMerge > 10) {
            app.toPackshot();
        }
        dragObject.parent.removeChild(dragObject);
        dragObject.interactive = false;
        const parentItem = fieldItems.find(
            (parent) => parent.type === item.parentType
        );
        item.texture = parentItem.texture;
        item.type = parentItem.type;
        item.parentType = parentItem.parentType;

        item.megreAnimation();
        crystalsBar.addCrystalsAnimation();
        item.mergeEffect();
        item.noParentAnimtion();

    }

    megreAnimation() {
        const mergeTm = gsap.timeline();
        mergeTm
            .to(this.scale, { x: 1.3, y: 1.3, duration: 0.3 })
            .to(this.scale, { x: 1, y: 1, duration: 0.2 });
    }

    mergeEffect() {
        const effect = new Sprite({
            name: 'merge_effect',
            anchor: { x: 0.5, y: 0.5 },
            texture: app.getTexture('merge_effect'),
            alpha: 0,
            scale: { x: 0, y: 0 },
        });
        this.addChild(effect);
        const effectTm = gsap.timeline();
        effectTm
            .to(effect.scale, { x: 1.5, y: 1.5, duration: 0.5 })
            .to(effect, { alpha: 0.7, angle: 20, duration: 0.5 }, '<')
            .to(effect.scale, { x: 0, y: 0, duration: 0.5 })
            .to(
                effect,
                {
                    alpha: 0,
                    duration: 0.2,
                    onComplete: () => {
                        this.removeChild(effect);
                    },
                },
                '<'
            );
    }

    noParentAnimtion() {
        const crystals = [];
        for (let i = 0; i < 8; i++) {
            const c = new Sprite({
                name: 'crystal_boost',
                texture: app.getTexture('crystal_boost'),
                alpha: 1,
                scale: { x: 0.3, y: 0.3 },
                x: getRandomValue(-70, 70),
                y: getRandomValue(-35, -60),
            });
            gsap.from(c, { x: 0, y: 0, alpha: 0, duration: 0.3 });
            crystals.push(c);
            this.addChild(c);
            gsap.delayedCall(1, () => {
                gsap.to([...crystals], {
                    x: this.toLocal(crystalsBar.position, crystalsBar.parent).x - 60,
                    y: this.toLocal(crystalsBar.position, crystalsBar.parent).y,
                    duration: 0.5,
                    onComplete: () => {
                        crystals.forEach(c => this.removeChild(c))
                    }
                });
            });
        }
    }
}
