import { _decorator, Component, Node, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemydie')
export class Enemydie extends Component {
    start() {

    }

    update(deltaTime: number) {
        this.scheduleOnce(function () {
            this.node.destroy();
        }, 50 * deltaTime);
    }

    play() {
        let play = this.node.getComponent(AudioSource);
        play.play()
    }

}

