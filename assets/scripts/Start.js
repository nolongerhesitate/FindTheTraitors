// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var GLOBAL = require('Global');

cc.Class({
    extends: cc.Component,

    properties: {
        //菜單背景音樂
        menuAudio: {
            default: null,
            url: cc.AudioClip,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        GLOBAL.stage = 1;
        GLOBAL.score = 0;
        cc.audioEngine.play(this.menuAudio, false, 1);
    },

    start() {
        this.play();
    },

    update(dt) {
    },

    play: function () {
        // this.menuAudio.play();
    },
    onStartGame: function () {
        cc.director.loadScene("game");
    },
    pause: function () {
        // this.menuAudio.pause();
    }
});
