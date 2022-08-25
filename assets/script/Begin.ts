import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('Begin')
export class Begin extends Component {
    start() {
        this.node.on("click", this.game, this);
    }

    update(deltaTime: number) {

    }
    game() {
        this.schedule(() => {
            director.loadScene("Main");
        }, 0.5)
    }
}

