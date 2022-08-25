import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy1')
export class Enemy1 extends Component {
    @property({ type: Prefab })
    enemybullerPre1: Prefab | null = null;

    @property
    speed: number = 150;

    start() {
        this.enemybullet();
    }

    update(deltaTime: number) {
        let bulletY = this.node.position.y;
        bulletY -= this.speed * deltaTime;
        this.node.setPosition(this.node.position.x, bulletY, 0);
        if (bulletY < -300) {
            this.die();
        }
    }

    //给敌机生成子弹
    enemybullet() {
        this.schedule(() => {
            let buller = instantiate(this.enemybullerPre1);
            buller.setParent(this.node.parent);
            let position = this.node.position;
            buller.setPosition(position.x, position.y - 30, 0);
        }, 0.75)
    }

    die() {
        this.node.destroy();
    }
}

