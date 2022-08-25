import { _decorator, Component, v3 } from 'cc';
const { ccclass } = _decorator;

@ccclass('Missile')
export class Missile extends Component {
    start() {

    }
    update(deltaTime: number) {
        let missile = this.node.position;
        let enemy = this.node.parent.getChildByName("enemy").position || this.node.parent.getChildByName("enemy1").position;
        let theangle = Math.atan2(missile.y - enemy.y, missile.x - enemy.x);
        let theta = theangle * 180 / Math.PI;
        this.node.eulerAngles = v3(0, 0, theta);
        let mY: number, mX: number;
        if (missile.y < enemy.y) {
            mY = missile.y + 1;
        } else if (missile.y > enemy.y) {
            mY = missile.y - 1;
        } else {
            mY = missile.y;
        }
        if (missile.x < enemy.x) {
            mX = missile.x + 1;
        } else if (missile.x > enemy.x) {
            mX = missile.x - 1;
        } else {
            mX = missile.x;
        }
        this.node.setPosition(mX, mY, 0);
    }

    die() {
        this.node.destroy();
    }
}
