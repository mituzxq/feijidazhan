System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Prefab, assert, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      assert = _cc.assert;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65ec9kSeTtHxL7cinn5PnTf", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_class3 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemybullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemydiePre", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new audioManager();
          return this._instance;
        }
        /**管理器初始化*/


        init(audioSource) {
          audioManager._audioSource = audioSource;
        }
        /**
        * 播放音乐
        * @param {Boolean} loop 是否循环播放
        */


        playMusic(loop) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }
        /**
        * 播放音效
        * @param {String} name 音效名称
        * @param {Number} volumeScale 播放音量倍数
        */


        playSound(name, volumeScale = 1) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); // 注意：第二个参数 “volumeScale” 是指播放音量的倍数，最终播放的音量为 “audioSource.volume * volumeScale”

          audioSource.playOneShot(audioClip, volumeScale);
        } // 设置音乐音量


        setMusicVolume(flag) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        }

        start() {
          this.enemybullet();
        }

        update(deltaTime) {
          let bulletY = this.node.position.y;
          bulletY -= this.speed * deltaTime;
          this.node.setPosition(this.node.position.x, bulletY, 0);

          if (bulletY < -300) {
            this.die();
          }
        } //给敌机生成子弹


        enemybullet() {
          this.schedule(() => {
            let buller = instantiate(this.enemybullerPre);
            buller.setParent(this.node.parent);
            let position = this.node.position;
            buller.setPosition(position.x, position.y - 30, 0);
          }, 0.5);
        }

        die() {
          // resources.load("img/enemydie.png", SpriteFrame, (err, res) => {
          //     if (err) {
          //         console.log(err);
          //     }
          //     this.node.getComponent(Sprite).spriteFrame = res;
          // })
          let die = instantiate(this.enemydiePre);
          die.setParent(this.node.parent);
          die.setPosition(this.node.position);
          this.node.destroy();
        }

      }, _class3._instance = void 0, _class3._audioSource = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemybullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemydiePre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9bdc44c762a33c6f396731959487499921de4dd.js.map