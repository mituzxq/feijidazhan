import { _decorator, Component, v3 } from 'cc';
const { ccclass } = _decorator;

@ccclass('Bgcontrol')
export class Bgcontrol extends Component {
    start() {
    }

    update(deltaTime: number) {
        for (let bgNode of this.node.children) {
            let yy = bgNode.position.y;
            bgNode.setPosition(v3(0, yy -= 75 * deltaTime, 0));
            if (yy < -550) {
                yy += 550 * 2;
                bgNode.setPosition(v3(0, yy, 0));
            }
        }
    }
}

