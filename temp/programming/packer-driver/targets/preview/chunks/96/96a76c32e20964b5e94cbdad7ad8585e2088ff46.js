System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _crd, ccclass, property, Bgcontrol;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1997czRyz5Okb0J8SsMtAPY", "Bgcontrol", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bgcontrol", Bgcontrol = (_dec = ccclass('Bgcontrol'), _dec(_class = class Bgcontrol extends Component {
        start() {}

        update(deltaTime) {
          for (var bgNode of this.node.children) {
            var yy = bgNode.position.y;
            bgNode.setPosition(v3(0, yy -= 50 * deltaTime, 0));

            if (yy < -550) {
              yy += 550 * 2;
              bgNode.setPosition(v3(0, yy, 0));
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96a76c32e20964b5e94cbdad7ad8585e2088ff46.js.map