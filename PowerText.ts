///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Castlevania {

    export class PowerText extends Phaser.Text {

        power: number;

        constructor (level: Level, startingPower: number) {
            super(level.game, 0, 0, "", { font: "65px Arial", fill: "#000000", align: "center" });
            this.power = startingPower;
            this.refreshText();
        }

        public decrementPower(): void {
            this.power -= 1;
            this.refreshText();
        }

        private refreshText(): void {
            this.text = "Power: " + this.power;
        }
    }

}