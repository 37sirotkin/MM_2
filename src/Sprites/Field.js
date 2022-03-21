import gsap from 'gsap/all';
import { fieldCells, fieldItems } from '../const';
import { Sprite } from '../core/Sprite';
import { app } from '../index';

export class Field extends Sprite {
    constructor(config) {
        super(config);
        this.cellSize = 102;
        this.indexes = [];
        this.countMerge = 0;
        this.itemsOnBoard = [];
    }

    createGrid() {
        const gridSize = 5;
        const startX = -this.cellSize * 2 + 3;
        const startY = -this.cellSize * 2 + 1;
        for (let row = 0; row < gridSize; row++) {
            for (let column = 0; column < gridSize; column++) {
                const position = {
                    x: startX + this.cellSize * row,
                    y: startY + this.cellSize * column,
                };
                this.addCell(position.x, position.y);
            }
        }

        for (let i = 0; i < fieldCells.length; i++) {
            if (i !== 12) {
                this.indexes.push(i);
            }
        }
    }

    addCell(x, y) {
        const cell = new Sprite({
            texture: app.getTexture('devCell'),
            x: x,
            y: y,
            scale: { x: 0.5, y: 0.5 },
            alpha: 0,
            anchor: { x: 0.5, y: 0.5 },
        });
        fieldCells.push(cell);
        this.addChild(cell);
    }

    setRandomCells() {
        fieldItems.forEach((item) => {
            if (item.onBoard) {
                const randomIndex = Math.floor(
                    Math.random() * this.indexes.length
                );
                const index = this.indexes[randomIndex];
                let cell = fieldCells[index];
                item.position.set(cell.x, cell.y);
                this.addChild(item);
                this.indexes.splice(randomIndex, 1);
                this.itemsOnBoard.push(item);
            }
        });
    }

    tutorial() {
        const hand = app.getSprite('hand');
        const index = Math.floor(Math.random() * this.itemsOnBoard.length);
        const item_1 = this.itemsOnBoard[index];
        const item_2 = this.itemsOnBoard.find((i) => {
            if (i !== item_1 && i.type === item_1.type) {
                return i;
            }
        });
        item_1.parent.addChild(hand);
        hand.position.set(item_1.x + 30, item_1.y + 30);
        hand.angle = 0;
        hand.alpha = 1;
        const handTm = gsap.timeline({ repeat: -1 });
        hand.removeTutorial = () => {
            handTm.kill();
            hand.parent.removeChild(hand);
        }
        handTm
            .to(hand.scale, {
                x: 1,
                y: 1,
                duration: 0,
            })
            .to(hand.scale, {
                x: 0.8,
                y: 0.8,
                duration: 0.5,
                ease: 'power1.inOut',
            })
            .to(hand, {
                x: item_2.x + 30,
                y: item_2.y + 30,
                duration: 1,
            })
            .to(hand.scale, {
                x: 0.8,
                y: 0.8,
                duration: 0.5,
            })
            .to(hand.scale, {
                x: 1,
                y: 1,
                duration: 0.5,
            })
            .to(hand, {
                x: item_1.x + 30,
                y: item_1.y + 30,
                duration: 1,
            });
    }
}
