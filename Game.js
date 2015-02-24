var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="build/typescript/phaser.d.ts"/>
var Castlevania;
(function (Castlevania) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            }
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    Castlevania.Boot = Boot;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
var Castlevania;
(function (Castlevania) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            //  Set-up our preloader sprite
            //this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            //this.load.setPreloadSprite(this.preloadBar);
            //  Load our actual games assets
            this.load.image('orange', 'assets/critters/orange.png');
            this.load.image('pink', 'assets/critters/pink.png');
            this.load.image('gray', 'assets/critters/gray.png');
            this.load.image('blue', 'assets/critters/blue.png');
            this.load.image('green', 'assets/critters/green.png');
            this.load.image('gold', 'assets/critters/gold.png');
            this.load.image('orange_slot', 'assets/colorSlots/orange.png');
            this.load.image('pink_slot', 'assets/colorSlots/pink.png');
            this.load.image('gray_slot', 'assets/colorSlots/gray.png');
            this.load.image('blue_slot', 'assets/colorSlots/blue.png');
            this.load.image('green_slot', 'assets/colorSlots/green.png');
            this.load.image('gold_slot', 'assets/colorSlots/gold.png');
            this.load.image('star', 'assets/star.png');
            this.load.image('level1', 'assets/level1.png');
            this.load.image('machine', 'assets/machine.png');
            this.load.image('machine_winning', 'assets/winningMachine.png');
        };
        Preloader.prototype.create = function () {
            this.game.state.start('Level', true, false);
            //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startMainMenu, this);
        };
        return Preloader;
    })(Phaser.State);
    Castlevania.Preloader = Preloader;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
var Castlevania;
(function (Castlevania) {
    var Critter = (function (_super) {
        __extends(Critter, _super);
        function Critter(game, x, y, color) {
            _super.call(this, game, x, y, Critter.pickSprite(color), 0);
            this.anchor.setTo(0, 0);
            this.scale = new Phaser.Point(0.5, 0.5);
            this.color = color;
            this.inputEnabled = true;
            this.input.enableDrag();
        }
        Critter.prototype.getColor = function () {
            return this.color;
        };
        Critter.pickSprite = function (color) {
            switch (color) {
                case 1 /* ORANGE */:
                    return 'orange';
                case 0 /* PINK */:
                    return 'pink';
                case 2 /* BLUE */:
                    return 'blue';
                case 4 /* GRAY */:
                    return 'gray';
                case 3 /* GREEN */:
                    return 'green';
                case 5 /* GOLD */:
                    return 'gold';
                default:
                    throw new TypeError("Unexpected enum value for color: " + color);
            }
        };
        return Critter;
    })(Phaser.Sprite);
    Castlevania.Critter = Critter;
    (function (Color) {
        Color[Color["PINK"] = 0] = "PINK";
        Color[Color["ORANGE"] = 1] = "ORANGE";
        Color[Color["BLUE"] = 2] = "BLUE";
        Color[Color["GREEN"] = 3] = "GREEN";
        Color[Color["GRAY"] = 4] = "GRAY";
        Color[Color["GOLD"] = 5] = "GOLD";
    })(Castlevania.Color || (Castlevania.Color = {}));
    var Color = Castlevania.Color;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Critter.ts"/>
///<reference path="Level.ts"/>
var Castlevania;
(function (Castlevania) {
    var ColorSlot = (function (_super) {
        __extends(ColorSlot, _super);
        function ColorSlot(level, machine, color) {
            _super.call(this, level.game, machine.x, machine.y, ColorSlot.pickSprite(color));
            this.level = level;
            this.machine = machine;
            this.color = color;
            this.inputEnabled = true;
            this.input.enableDrag();
            level.machines.add(this);
        }
        ColorSlot.prototype.getColor = function () {
            return this.color;
        };
        ColorSlot.pickSprite = function (color) {
            switch (color) {
                case 1 /* ORANGE */:
                    return 'orange_slot';
                case 0 /* PINK */:
                    return 'pink_slot';
                case 2 /* BLUE */:
                    return 'blue_slot';
                case 4 /* GRAY */:
                    return 'gray_slot';
                case 3 /* GREEN */:
                    return 'green_slot';
                case 5 /* GOLD */:
                    return 'gold_slot';
                default:
                    throw new TypeError("Unexpected enum value for color: " + color);
            }
        };
        return ColorSlot;
    })(Phaser.Sprite);
    Castlevania.ColorSlot = ColorSlot;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="ColorSlot.ts"/>
var Castlevania;
(function (Castlevania) {
    var InputSlot = (function (_super) {
        __extends(InputSlot, _super);
        function InputSlot(level, machine, color) {
            _super.call(this, level, machine, color);
        }
        InputSlot.prototype.inputSlotted = function (critters) {
            for (var i = 0; i < critters.length; i++) {
                var critter = critters.getAt(i);
                if (this.overlap(critter)) {
                    if (this.getColor() == critter.getColor()) {
                        return true;
                    }
                }
            }
            return false;
        };
        return InputSlot;
    })(Castlevania.ColorSlot);
    Castlevania.InputSlot = InputSlot;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="ColorSlot.ts"/>
var Castlevania;
(function (Castlevania) {
    var OutputSlot = (function (_super) {
        __extends(OutputSlot, _super);
        function OutputSlot(level, machine, color) {
            _super.call(this, level, machine, color);
            this.events.onInputDown.add(this.clickListener, this);
        }
        OutputSlot.prototype.clickListener = function () {
            if (this.machine.inputsSlotted()) {
                this.produceCritter();
            }
        };
        OutputSlot.prototype.produceCritter = function () {
            if (!this.critterExists(this.getColor())) {
                this.level.critters.add(new Castlevania.Critter(this.level.game, this.x, this.y, this.getColor()));
                if (this.getColor() == 5 /* GOLD */) {
                    var emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, 200);
                    emitter.makeParticles('star');
                    emitter.setScale(.5, .51, .5, .51, 1000);
                    emitter.setAlpha(1, .5, 5000);
                    emitter.start(false, 5000, 20);
                }
            }
        };
        OutputSlot.prototype.critterExists = function (color) {
            for (var i = 0; i < this.level.critters.length; i++) {
                if (this.level.critters.getAt(i).getColor() == color) {
                    return true;
                }
            }
            return false;
        };
        return OutputSlot;
    })(Castlevania.ColorSlot);
    Castlevania.OutputSlot = OutputSlot;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="InputSlot.ts"/>
///<reference path="OutputSlot.ts"/>
var Castlevania;
(function (Castlevania) {
    var Machine = (function (_super) {
        __extends(Machine, _super);
        function Machine(level, x, y, inputs, outputs) {
            _super.call(this, level.game, x, y, 'machine');
            this.inputs = [];
            this.outputs = [];
            this.critters = level.critters;
            this.level = level;
            level.machines.add(this);
            this.createColorSlots(inputs, outputs);
            this.scale = new Phaser.Point(0.25, 0.25);
            this.anchor.setTo(0, 0);
            this.inputEnabled = true;
            this.input.enableDrag();
        }
        Machine.prototype.update = function () {
            var offset = 0;
            for (var i = 0; i < this.inputs.length; i++) {
                this.inputs[i].x = this.x;
                this.inputs[i].y = this.y + offset;
                offset += this.height / 3;
            }
            offset = 0;
            for (var i = 0; i < this.outputs.length; i++) {
                this.outputs[i].x = this.x + this.width - this.outputs[i].width;
                this.outputs[i].y = this.y + offset;
                offset += this.height / 3;
            }
        };
        Machine.prototype.inputsSlotted = function () {
            for (var i = 0; i < this.inputs.length; i++) {
                if (!this.inputs[i].inputSlotted(this.critters)) {
                    return false;
                }
            }
            return true;
        };
        Machine.prototype.createColorSlots = function (inputs, outputs) {
            for (var i = 0; i < inputs.length; i++) {
                this.inputs.push(new Castlevania.InputSlot(this.level, this, inputs[i]));
            }
            for (var i = 0; i < outputs.length; i++) {
                this.outputs.push(new Castlevania.OutputSlot(this.level, this, outputs[i]));
            }
        };
        return Machine;
    })(Phaser.Sprite);
    Castlevania.Machine = Machine;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Critter.ts"/>
///<reference path="Machine.ts"/>
///<reference path="ColorSlot.ts"/>
var Castlevania;
(function (Castlevania) {
    var Level = (function (_super) {
        __extends(Level, _super);
        function Level() {
            _super.apply(this, arguments);
        }
        Level.prototype.create = function () {
            var levelGroup = this.game.add.group();
            this.critters = this.game.add.group();
            this.machines = this.game.add.group();
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;
            this.critters.add(new Castlevania.Critter(this.game, 130, 285, 1 /* ORANGE */));
            this.critters.add(new Castlevania.Critter(this.game, 130, 500, 0 /* PINK */));
            this.machines.add(new Castlevania.Machine(this, 500, 0, [1 /* ORANGE */], [3 /* GREEN */]));
            this.machines.add(new Castlevania.Machine(this, 500, 285, [3 /* GREEN */, 2 /* BLUE */], [5 /* GOLD */]));
            this.machines.add(new Castlevania.Machine(this, 0, 0, [0 /* PINK */], [2 /* BLUE */]));
            levelGroup.add(this.background);
            levelGroup.add(this.machines);
            levelGroup.add(this.critters);
        };
        return Level;
    })(Phaser.State);
    Castlevania.Level = Level;
})(Castlevania || (Castlevania = {}));
///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Boot.ts"/>
///<reference path="Preloader.ts"/>
///<reference path="Level.ts"/>
var Castlevania;
(function (Castlevania) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 805, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Castlevania.Boot, false);
            this.state.add('Preloader', Castlevania.Preloader, false);
            this.state.add('Level', Castlevania.Level, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    Castlevania.Game = Game;
    window.onload = function () {
        var game = new Game();
    };
})(Castlevania || (Castlevania = {}));
//# sourceMappingURL=game.js.map