import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyBullet1')
export class EnemyBullet1 extends Component {
    @property
    speed: number = 185;

    start() {
        this.theta();
    }

    update(deltaTime: number) {
        let bulletY = this.node.position.y;
        bulletY -= this.speed * deltaTime;
        this.node.setPosition(this.node.position.x, bulletY, 0);
        if (bulletY < -320) {
            this.die();
        }
    }

    theta() {
        this.schedule(() => {
            let bullet = this.node.position;
            let hero = this.node.parent.getChildByName("hero").position;
            let theangle = Math.atan2(bullet.y - hero.y, bullet.x - hero.x);
            let theta = theangle * 180 / Math.PI;
            console.log(theta)
            this.node.eulerAngles = v3(0, 0, theta);
            let bX: number, bY: number;
            if (bullet.y < hero.y) {
                bY = bullet.y + 1;
            } else if (bullet.y > hero.y) {
                bY = bullet.y - 1;
            } else {
                bY = bullet.y;
            }
            if (bullet.x < hero.x) {
                bX = bullet.x + 1;
            } else if (bullet.x > hero.x) {
                bX = bullet.x - 1;
            } else {
                bX = bullet.x;
            }
            this.node.setPosition(bX, bY, 0);
        }, 0.05)
    }

    die() {
        this.node.destroy();
    }

}

