System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, input, Input, _dec, _class, _crd, ccclass, property, Player;

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
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = class Player extends Component {
        start() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        update(deltaTime) {}

        onTouchMove(event) {
          var t = event.getUILocation();
          this.node.setPosition(t.x, t.y, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3537a6a5d205387849c37da2e1911912ba6c47a3.js.map