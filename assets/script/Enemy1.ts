import { _decorator, Component, Node, instantiate, Prefab, UITransform } from 'cc';
import { Enemydie } from './Enemydie';
const { ccclass, property } = _decorator;

@ccclass('Enemy1')
export class Enemy1 extends Component {
    @property({ type: Prefab })
    enemybullerPre1: Prefab | null = null;

    @property({ type: Prefab })
    enemydiePre: Prefab | null = null;

    @property
    speed: number = 150;

    start() {
        this.enemybullet();
    }

    update(deltaTime: number) {
        let bulletY = this.node.position.y;
        bulletY -= this.speed * deltaTime;
        this.node.setPosition(this.node.position.x, bulletY, 0);
        if (bulletY < -320) {
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
        }, 1.5, 5, 0.1)
    }

    diemusic() {
        let die = instantiate(this.enemydiePre);
        die.setParent(this.node.parent);
        die.getComponent(UITransform).setContentSize(51, 38);
        die.getComponent(Enemydie).play();
        die.setPosition(this.node.position);
        this.die();
    }

    die() {
        this.node.destroy();
    }
}

