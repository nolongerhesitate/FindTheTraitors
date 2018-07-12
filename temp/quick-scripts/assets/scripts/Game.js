(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a384dWXuMVPuYQ0eq7Mu0Am', 'Game', __filename);
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        friendPrefab: {
            default: null,
            type: cc.Prefab
        },
        traitorsPrefab: {
            default: null,
            type: cc.Prefab
        },
        //游戏区域
        playArea: {
            default: null,
            type: cc.Node
        },
        // 叛徒世界坐标
        traitorsLocX: 0,
        traitorsLocY: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // 演员就位
        this.initActors();
        //初始化输入监听
        this.setInputControl();
    },
    start: function start() {},
    update: function update(dt) {},


    initActors: function initActors() {
        // 叛徒生成位置
        var traitorsPos = Math.round(cc.random0To1() * 63);

        // 生成色塊
        for (var i = 0; i < 63; i++) {
            var actor = null;
            if (i == traitorsPos) {
                //生成叛徒
                actor = cc.instantiate(this.traitorsPrefab);
            } else {
                //生成朋友
                actor = cc.instantiate(this.friendPrefab);
            }
            actor.anchorX = 0;
            actor.anchorY = 0;
            this.playArea.addChild(actor);
            var actorPos = cc.p(100 * (i % 7), 100 * parseInt(i / 7));
            actor.setPosition(actorPos);
            if (i == traitorsPos) {
                this.traitorsLocX = actorPos.x;
                this.traitorsLocY = actorPos.y;
            }
        }
    },

    setInputControl: function setInputControl() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();

                return true; //????????????????????????? why return true???
            },

            onTouchEnded: function onTouchEnded(touch, event) {
                var touchLoc = touch.getLocation();
                console.log("叛徒坐标：" + self.traitorsLocX + "--" + self.traitorsLocY + "; 点击坐标" + touchLoc.x + "--" + touchLoc.y);
                if (touchLoc.x - self.traitorsLocX < 100 && touchLoc.y - self.traitorsLocY < 100) {
                    console.log("找到叛徒!!!");
                }
            }
        }, self.node);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game.js.map
        