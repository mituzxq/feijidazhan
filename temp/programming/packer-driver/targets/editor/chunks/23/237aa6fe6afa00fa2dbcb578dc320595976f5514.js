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
          let t = this.node.rotation;
          console.log(t);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=237aa6fe6afa00fa2dbcb578dc320595976f5514.js.map