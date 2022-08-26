import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyBullet')
export class EnemyBullet extends Component {
    @property
    speed: number = 150;

    start() {

    }

    update(deltaTime: number) {
        let bulletY = this.node.position.y;
        bulletY -= this.speed * deltaTime;
        this.node.setPosition(this.node.position.x, bulletY, 0);
        if (bulletY < -320) {
            this.die();
        }
    }

    die() {
        this.node.destroy();
    }

}

