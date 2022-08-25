import { _decorator, Component, EventTouch, input, Input } from 'cc';
const { ccclass } = _decorator;

@ccclass('Player')
export class Player extends Component {
    start() {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    update(deltaTime: number) {

    }

    onTouchMove(event: EventTouch) {
        let t = event.getUILocation();
        this.node.setPosition(t.x - 59 * 3, t.y - 83 * 3.5, 0);
    }
}