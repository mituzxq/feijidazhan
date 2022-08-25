System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, _dec, _class, _crd, ccclass, property, Begin;

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
        ccclass,
        property
      } = _decorator);

      _export("Begin", Begin = (_dec = ccclass('Begin'), _dec(_class = class Begin extends Component {
        start() {
          this.node.on("click", this.game, this);
        }

        update(deltaTime) {}

        game() {
          director.loadScene("Main");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33fc07f9b8c4b3f9ffb8026ce868f15a465c45de.js.map