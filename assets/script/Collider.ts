import { _decorator, Component, Collider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, Label, director, BoxCollider2D } from 'cc';
import { Enemy } from './Enemy';
import { Enemy1 } from './Enemy1';
import { EnemyBullet } from './EnemyBullet';
import { EnemyBullet1 } from './EnemyBullet1';
import { GameManger } from './GameManger';
import { Missile } from './Missile';
import { PlayerBullet } from './PlayerBullet';
const { ccclass } = _decorator;

@ccclass('Collider')
export class Collider extends Component {

    dieNumber: number = 1;
    count: number = 0;

    start() {
        PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    update(deltaTime: number) {

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 0:玩家,1:玩家子弹,2:敌人,3:敌人子弹,4:导弹,5:护盾,6:敌人1,7:敌人子弹1
        //子弹
        if ((selfCollider.tag == 1 && otherCollider.tag == 2) || (selfCollider.tag == 2 && otherCollider.tag == 1)) {
            if (selfCollider.tag == 1) {
                selfCollider.getComponent(PlayerBullet).die();
                otherCollider.getComponent(Enemy).die();
            }
            if (selfCollider.tag == 2) {
                selfCollider.getComponent(Enemy).die();
                otherCollider.getComponent(PlayerBullet).die();
            }
            this.setScore();
        }
        if ((selfCollider.tag == 1 && otherCollider.tag == 6) || (selfCollider.tag == 6 && otherCollider.tag == 1)) {
            if (selfCollider.tag == 1) {
                selfCollider.getComponent(PlayerBullet).die();
                this.count++;
            }
            if (selfCollider.tag == 6) {
                this.count++;
                otherCollider.getComponent(PlayerBullet).die();
            }
            if (this.count == 3) {
                this.node.parent.getChildByName("enemy1").getComponent(Enemy1).die();
                this.node.getComponent(GameManger).randoms();
                this.count = 1;
            }
            this.setScore();
        }
        //导弹
        if ((selfCollider.tag == 2 && otherCollider.tag == 4) || (selfCollider.tag == 4 && otherCollider.tag == 2)) {
            if (selfCollider.tag == 4) {
                selfCollider.getComponent(Missile).die();
                otherCollider.getComponent(Enemy).die();
            }
            if (selfCollider.tag == 2) {
                selfCollider.getComponent(Enemy).die();
                otherCollider.getComponent(Missile).die();
            }
            this.setScore();
        }
        if ((selfCollider.tag == 4 && otherCollider.tag == 6) || (selfCollider.tag == 6 && otherCollider.tag == 4)) {
            if (selfCollider.tag == 4) {
                selfCollider.getComponent(Missile).die();
                otherCollider.getComponent(Enemy1).die();

            }
            if (selfCollider.tag == 6) {
                selfCollider.getComponent(Enemy1).die();
                otherCollider.getComponent(Missile).die();
            }
            this.setScore();
            this.node.getComponent(GameManger).randoms();
        }
        //敌机与敌机子弹
        if ((selfCollider.tag == 2 && otherCollider.tag == 3) || (selfCollider.tag == 3 && otherCollider.tag == 2)) {
            if (otherCollider.tag == 3) {
                otherCollider.getComponent(EnemyBullet).die();
            }
            if (selfCollider.tag == 3) {
                selfCollider.getComponent(EnemyBullet).die();
            }
        }
        //护盾
        if ((selfCollider.tag == 3 && otherCollider.tag == 5) || (selfCollider.tag == 5 && otherCollider.tag == 3)) {
            if (selfCollider.tag == 3) {
                selfCollider.getComponent(EnemyBullet).die();
            }
            if (otherCollider.tag == 3) {
                otherCollider.getComponent(EnemyBullet).die();
            }
        }
        if ((selfCollider.tag == 5 && otherCollider.tag == 7) || (selfCollider.tag == 7 && otherCollider.tag == 5)) {
            if (selfCollider.tag == 7) {
                selfCollider.getComponent(EnemyBullet1).die();
            }
            if (otherCollider.tag == 7) {
                otherCollider.getComponent(EnemyBullet1).die();
            }
        }
        //死亡
        if ((selfCollider.tag == 0 && otherCollider.tag == 2) || (selfCollider.tag == 2 && otherCollider.tag == 0) ||
            (selfCollider.tag == 0 && otherCollider.tag == 3) || (selfCollider.tag == 3 && otherCollider.tag == 0) ||
            (selfCollider.tag == 0 && otherCollider.tag == 7) || (selfCollider.tag == 7 && otherCollider.tag == 0)) {
            alert("你以死亡，分数：" + this.dieNumber);
            director.purgeDirector();
            director.loadScene("Begin");
        }
    }
    //分数
    setScore() {
        this.node.children[0].getComponent(Label).string = "score:" + this.dieNumber++;
    }
    //护盾
    change() {
        this.node.parent.getChildByName("hero").getComponent(BoxCollider2D).tag = 1234;
        this.schedule(() => {
            this.node.parent.getChildByName("hero").getComponent(BoxCollider2D).tag = 0;
        }, 5, 1)
    }
}

