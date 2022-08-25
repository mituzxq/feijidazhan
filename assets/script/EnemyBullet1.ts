import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyBullet1')
export class EnemyBullet1 extends Component {
    @property
    speed: number = 175;

    start() {

    }

    update(deltaTime: number) {
        let bulletY = this.node.position.y;
        bulletY -= this.speed * deltaTime;
        this.node.setPosition(this.node.position.x, bulletY, 0);
        if (bulletY < -300) {
            this.die();
        }
    }

    die() {
        this.node.destroy();
    }

}

