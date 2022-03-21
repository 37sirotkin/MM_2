import gsap from 'gsap/all';
import { Sprite } from '../core/Sprite';

export class CrystalsBar extends Sprite {
    constructor(config) {
        super(config);
        this.value = 0;
        this.addText();
    }

    addText() {
        const text = new PIXI.Text(this.value, {
            fontFamily: 'Loyola',
            fontSize: 50,
            fill: '#663300',
            stroke: "white",
            strokeThickness: 2
        });
        text.x = 37;
        text.y = 5;
        text.text = this.value;
        text.anchor.set(0.5);
        this.addChild(text);
        this.textItem = text;
    }

    addCrystalsAnimation() {
        this.value += 10;
        this.textItem.text = this.value;
        const animation = gsap.timeline();
        animation
            .to(this.textItem.scale, { x: 2, y: 2, duration: 0.3 })
            .to(this.textItem.scale, { x: 1, y: 1, duration: 0.5 });
    }
}
