System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, EnemyAll;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbb95UeB99BfI9jgNvEZisO", "EnemyAll", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyAll", EnemyAll = (_dec = ccclass('EnemyAll'), _dec(_class = class EnemyAll extends Component {
        start() {
          for (let bgNode of this.node.children) {
            console.log(bgNode.name);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=14c4e6cf35ce66add22e3c0c93ec20bb268c4494.js.map