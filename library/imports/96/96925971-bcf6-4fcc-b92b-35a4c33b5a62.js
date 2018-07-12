"use strict";
cc._RF.push(module, '96925lxvPZPzLkrNaTDO1pi', 'Start');
// scripts/Start.js

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
        //菜單背景音樂
        menuAudio: {
            type: cc.AudioSource,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {
        this.play();
    },
    update: function update(dt) {},


    play: function play() {
        this.menuAudio.play();
    },
    onStartGame: function onStartGame() {
        cc.director.loadScene("game");
    },
    pause: function pause() {
        this.menuAudio.pause();
    }
});

cc._RF.pop();