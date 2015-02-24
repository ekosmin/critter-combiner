///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="InputSlot.ts"/>
///<reference path="OutputSlot.ts"/>
module Castlevania {

    export class Machine extends Phaser.Sprite {

        level: Level;

        critters: Phaser.Group;
        inputs: InputSlot[] = [];
        outputs: OutputSlot[] = [];

        constructor(level: Level, x: number, y: number, inputs: Color[],
                    outputs: Color[]) {

            super(level.game, x, y, 'machine');
            this.critters = level.critters;
            this.level = level;

            level.machines.add(this);
            this.createColorSlots(inputs, outputs);

            this.scale = new Phaser.Point(0.25, 0.25);
            this.anchor.setTo(0, 0);

            this.inputEnabled = true;
            this.input.enableDrag();
        }

        public update(): void {
            var offset: number = 0;
            for (var i: number = 0; i < this.inputs.length; i++) {
                this.inputs[i].x = this.x;
                this.inputs[i].y = this.y + offset;
                offset += this.height/3;
            }

            offset = 0;
            for (var i: number = 0; i < this.outputs.length; i++) {
                this.outputs[i].x = this.x + this.width - this.outputs[i].width;
                this.outputs[i].y = this.y + offset;
                offset += this.height/3;
            }
        }

        public inputsSlotted(): boolean {
            for (var i: number = 0; i < this.inputs.length; i++) {
                if (!this.inputs[i].inputSlotted(this.critters)) {
                    return false;
                }
            }
            return true;
        }

        private createColorSlots(inputs: Color[], outputs: Color[]): void {
            for (var i: number = 0; i < inputs.length; i++) {
                this.inputs.push(new InputSlot(this.level, this, inputs[i]));
            }

            for (var i: number = 0; i < outputs.length; i++) {
                this.outputs.push(new OutputSlot(this.level, this, outputs[i]));
            }
        }

    }

}