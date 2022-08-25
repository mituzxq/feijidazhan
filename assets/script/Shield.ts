import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('Shield')
export class Shield extends Component {
    start() {

    }

    update(deltaTime: number) {
        let pos = this.node.parent.getChildByName("hero").position;
        this.node.setPosition(pos.x, pos.y, 0);
    }
}

