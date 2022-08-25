import { _decorator, Component, instantiate, Prefab } from 'cc';
import { Collider } from './Collider';
const { ccclass, property } = _decorator;
@ccclass('GameManger')
export class GameManger extends Component {
    @property({ type: Prefab })
    playerbullerPre: Prefab | null = null;

    @property({ type: Prefab })
    enemyPre: Prefab | null = null;

    @property({ type: Prefab })
    enemyPre1: Prefab | null = null;

    @property({ type: Prefab })
    missilePre: Prefab | null = null;

    @property({ type: Prefab })
    shieldPre: Prefab | null = null;

    istrue: boolean = false;

    isnext: number = 1;

    start() {
        this.playerbullet1();
        this.ememy();
    }

    update(deltaTime: number) {
    }

    ememy() {
        this.schedule(() => {
            let ememyX = Math.floor(Math.random() * 320) - 165;
            let enemy: any;
            if (this.isnext % 10 == 0) {
                enemy = instantiate(this.enemyPre1);
                this.isnext = 1;
            } else {
                enemy = instantiate(this.enemyPre);
            }
            enemy.setParent(this.node.parent);
            enemy.setPosition(ememyX, 350, 0);
            this.isnext++;
        }, 1)
    }

    randoms() {
        let t = Math.floor(Math.random() * 3);
        this.istrue = true;
        this.bulleris(t);
    }

    bulleris(t: number) {
        switch (t) {
            case 0: this.playerbullet2(); break;
            case 1: this.playerbullet3(); break;
            case 2: this.playerbullet4(); break;
        }
    }

    //单颗子弹
    playerbullet1() {
        this.schedule(() => {
            if (!this.istrue) {
                let buller = instantiate(this.playerbullerPre);
                buller.setParent(this.node.parent);
                let player = this.node.parent.getChildByName("hero").position;
                buller.setPosition(player.x, player.y + 50, 0);
            }
        }, 0.5)

    }
    //三列子弹
    playerbullet2() {
        this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            let buller2 = instantiate(this.playerbullerPre);
            let buller3 = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            buller2.setParent(this.node.parent);
            buller3.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
            buller2.setPosition(player.x - 20, player.y + 50, 0);
            buller3.setPosition(player.x + 20, player.y + 50, 0);
        }, 0.7, 5);
        this.schedule(() => {
            this.istrue = false;
        }, 5, 1);
    }
    //导弹
    playerbullet3() {
        this.schedule(() => {
            let buller = instantiate(this.missilePre);
            buller.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 70, 0);
        }, 1, 3);
        this.schedule(() => {
            this.istrue = false;
        }, 5, 1);
    }
    //无敌
    playerbullet4() {
        let shield = instantiate(this.shieldPre);
        shield.setParent(this.node.parent);
        let player = this.node.parent.getChildByName("hero").position;
        shield.setPosition(player.x, player.y, 0);
        this.node.getComponent(Collider).change();
        this.schedule(() => {
            shield.destroy();
        }, 5, 1)

        this.istrue = false;
    }
}