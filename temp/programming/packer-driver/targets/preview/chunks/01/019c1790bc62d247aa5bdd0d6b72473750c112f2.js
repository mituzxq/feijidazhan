System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioSource, _dec, _class, _crd, ccclass, property, Enemydie;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35efbuk86VBAIkXzp4ni3cW", "Enemydie", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemydie", Enemydie = (_dec = ccclass('Enemydie'), _dec(_class = class Enemydie extends Component {
        constructor() {
          super(...arguments);
          this.isplay = false;
          this.deltaTime = null;
        }

        start() {}

        update(deltaTime) {
          this.deltaTime = deltaTime; // this.scheduleOnce(function () {
          //     this.play();
          //     this.node.destroy();
          // }, 50 * deltaTime);

          this.die();
        }

        play() {
          var play = this.node.getComponent(AudioSource);
          play.play();
          this.isplay = false;
        }

        die() {
          this.play();
          this.scheduleOnce(function () {
            this.node.destroy();
          }, 50 * this.deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=019c1790bc62d247aa5bdd0d6b72473750c112f2.js.map