///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="ColorSlot.ts"/>
module Castlevania {

    export class InputSlot extends ColorSlot {

        constructor(level: Level, machine: Machine, color:Color) {
            super(level, machine, color);
        }

        public inputSlotted(critters: Phaser.Group): boolean {
            for (var i: number = 0; i < critters.length; i++) {
                var critter: Critter = critters.getAt(i);
                if (this.overlap(critter)) {
                    if (this.getColor() == critter.getColor()) {
                        return true;
                    }
                }
            }
            return false;
        }

    }

}