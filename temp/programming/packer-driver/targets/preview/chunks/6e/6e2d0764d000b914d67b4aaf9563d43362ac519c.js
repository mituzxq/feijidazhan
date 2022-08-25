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
          for (var bgNode of this.node.children) {
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
//# sourceMappingURL=6e2d0764d000b914d67b4aaf9563d43362ac519c.js.map