System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioSource, _dec, _class, _crd, ccclass, property, BulletAudio;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec5dfLmJblHBIquN+8XCFpa", "BulletAudio", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletAudio", BulletAudio = (_dec = ccclass('BulletAudio'), _dec(_class = class BulletAudio extends Component {
        start() {
          let player = this.getComponent(AudioSource);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a85823a6c4b4dae180443c264317a5b7256dbe59.js.map