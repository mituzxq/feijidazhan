System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, Begin;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82795FE1DROQqcWa16YFwGB", "Begin", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Begin", Begin = (_dec = ccclass('Begin'), _dec(_class = class Begin extends Component {
        start() {
          this.node.on("click", this.game, this);
        }

        update(deltaTime) {}

        game() {
          this.schedule(() => {
            director.loadScene("Main");
          }, 0.5);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9bdaf58f247473bf1f2521ec1319bbd3fd8491b.js.map