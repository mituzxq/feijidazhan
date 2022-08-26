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
        constructor(...args) {
          super(...args);
          this.isplay = false;
        }

        start() {}

        update(deltaTime) {
          this.scheduleOnce(function () {
            this.isplay = true;
            this.node.destroy();
          }, 20 * deltaTime);

          if (this.isplay == true) {
            this.play();
          }
        }

        play() {
          let play = this.node.getComponent(AudioSource);
          play.play();
          this.isplay = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbd540c8ac7ef00f4f7ce172952bca44ef47d4bb.js.map