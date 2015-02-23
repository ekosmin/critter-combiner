///<reference path="build/typescript/phaser.d.ts"/>
module Castlevania {

    export class Critter extends Phaser.Sprite {

        color: Color;

        constructor(game: Phaser.Game, x: number, y: number, color:Color) {

            super(game, x, y, Critter.pickSprite(color), 0);

            this.anchor.setTo(0, 0);
            this.scale = new Phaser.Point(0.5, 0.5);
            this.color = color;

            this.inputEnabled = true;
            this.input.enableDrag();
        }

        public getColor(): Color {
            return this.color;
        }

        private static pickSprite(color: Color): String {
            switch (color) {
                case Color.ORANGE:
                    return 'orange';
                case Color.PINK:
                    return 'pink';
                case Color.BLUE:
                    return 'blue';
                case Color.GRAY:
                    return 'gray';
                case Color.GREEN:
                    return 'green';
                case Color.GOLD:
                    return 'gold';
                default:
                    throw new TypeError("Unexpected enum value for color: " + color);
            }
        }

    }

    export enum Color {
        PINK,
        ORANGE,
        BLUE,
        GREEN,
        GRAY,
        GOLD,
    }

}