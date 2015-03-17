///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="ColorSlot.ts"/>
module Castlevania {

    export class OutputSlot extends ColorSlot {

        constructor(level: Level, machine: Machine, color:Color) {
            super(level, machine, color);
            this.events.onInputDown.add(this.clickListener, this);
        }

        private clickListener(): void {
            if (this.machine.inputsSlotted()) {
                this.produceCritter();
            }
        }

        private produceCritter(): void {
            if (!this.critterExists(this.getColor())) {
                if (this.level.powerText.power > 0) {
                    this.level.powerText.decrementPower();
                    this.level.critters.add(new Critter(this.level.game, this.x, this.y, this.getColor()));
                    if (this.getColor() == Color.GOLD) {
                        var emitter:Phaser.Particles.Arcade.Emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, 200);
                        emitter.makeParticles('star');
                        emitter.setScale(.5, .51, .5, .51, 1000);
                        emitter.setAlpha(1, .5, 5000);
                        emitter.start(false, 5000, 20);
                    }
                }
            }
        }

        private critterExists(color: Color): boolean {
            for (var i: number = 0; i < this.level.critters.length; i++) {
                if (this.level.critters.getAt(i).getColor() == color) {
                    return true;
                }
            }
            return false;
        }

    }

}