System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, is1;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3265QQsYJH7aXA4s1nFbfH", "is1", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("is1", is1 = (_dec = ccclass('is1'), _dec(_class = class is1 extends Component {
        start() {
          console.log(this.node.rotation);
          let node = this.node.position;
          this.node.setPosition(node.x, node.y, 90);
          let z = this.node.rotation.z;
          this.node.getRotation;
          this.node.setRotationFromEuler = 90;
          this.node.getWorldRotation;
          this.node.rotate(90);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c562ea2bffc3079532c09674558e6e57970ffd7a.js.map