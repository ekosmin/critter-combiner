///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Critter.ts"/>
///<reference path="Level.ts"/>
module Castlevania {

    export class ColorSlot extends Phaser.Sprite {

        level: Level;
        machine: Machine;

        private color: Color;

        constructor(level: Level, machine: Machine, color:Color) {

            super(level.game, machine.x, machine.y, ColorSlot.pickSprite(color));
            this.level = level;
            this.machine = machine;
            this.color = color;

            this.inputEnabled = true;
            this.input.enableDrag();

            level.machines.add(this);
        }

        public getColor(): Color {
            return this.color;
        }

        private static pickSprite(color: Color): String {
            switch (color) {
                case Color.ORANGE:
                    return 'orange_slot';
                case Color.PINK:
                    return 'pink_slot';
                case Color.BLUE:
                    return 'blue_slot';
                case Color.GRAY:
                    return 'gray_slot';
                case Color.GREEN:
                    return 'green_slot';
                case Color.GOLD:
                    return 'gold_slot';
                default:
                    throw new TypeError("Unexpected enum value for color: " + color);
            }
        }

    }

}