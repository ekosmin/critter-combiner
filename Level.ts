///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Critter.ts"/>
///<reference path="Machine.ts"/>
///<reference path="ColorSlot.ts"/>
module Castlevania {

    export class Level extends Phaser.State {

        background: Phaser.Sprite;
        critters: Phaser.Group;
        machines: Phaser.Group;

        create() {
            var levelGroup = this.game.add.group();
            this.critters = this.game.add.group();
            this.machines = this.game.add.group();

            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            this.critters.add(new Critter(this.game, 130, 285, Color.ORANGE));
            this.critters.add(new Critter(this.game, 130, 500, Color.PINK));

            this.machines.add(new Machine(this, 500, 0, [Color.ORANGE], [Color.GREEN]));
            this.machines.add(new Machine(this, 500, 285, [Color.GREEN, Color.BLUE], [Color.GOLD]));
            this.machines.add(new Machine(this, 0, 0, [Color.PINK], [Color.BLUE]));

            levelGroup.add(this.background);
            levelGroup.add(this.machines);
            levelGroup.add(this.critters);

        }

    }

}