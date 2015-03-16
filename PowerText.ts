///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Castlevania {

    export class PowerText extends Phaser.Text {

        constructor (level:Level) {
            super(level.game, 0, 0, "texty text", { font: "65px Arial", fill: "#ffffff", align: "center" });
        }
    }

}