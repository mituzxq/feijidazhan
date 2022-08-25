System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, input, Input, _dec, _class, _crd, ccclass, Player;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb1aacJE6xLCKuCsdgAVj/k", "Player", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = class Player extends Component {
        start() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        update(deltaTime) {}

        onTouchMove(event) {
          var t = event.getUILocation();
          this.node.setPosition(t.x - 59 * 3, t.y - 83 * 4.5, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f9b18fdb362050f874316d610580ea4b263b226.js.map