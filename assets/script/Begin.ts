import { _decorator, Component, director, AudioSource } from 'cc';
const { ccclass } = _decorator;

@ccclass('Begin')
export class Begin extends Component {
    start() {
        this.node.on("click", this.game, this);
    }

    update(deltaTime: number) {

    }
    game() {
        this.node.getComponent(AudioSource).play();
        this.schedule(() => {
            director.loadScene("Main");
        }, 0.5)
    }
}

