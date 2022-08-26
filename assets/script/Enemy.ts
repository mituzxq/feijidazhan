import { _decorator, Component, instantiate, Prefab } from 'cc';
import { Enemydie } from './Enemydie';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
    @property({ type: Prefab })
    enemybullerPre: Prefab | null = null;

    @property({ type: Prefab })
    enemydiePre: Prefab | null = null;

    @property
    speed: number = 100;

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
            let buller = instantiate(this.enemybullerPre);
            buller.setParent(this.node.parent);
            let position = this.node.position;
            buller.setPosition(position.x, position.y - 30, 0);
        }, 0.5)
    }

    diemusic() {
        // resources.load("img/enemydie.png", SpriteFrame, (err, res) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     this.node.getComponent(Sprite).spriteFrame = res;
        // })
        // this.isplay = true;
        let die = instantiate(this.enemydiePre);
        die.setParent(this.node.parent);
        die.getComponent(Enemydie).play();
        die.setPosition(this.node.position);
        this.die();
    }

    die() {
        this.node.destroy();
    }

}