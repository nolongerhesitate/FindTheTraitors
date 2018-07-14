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
            type: cc.AudioSource,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        GLOBAL.stage = 1;
        GLOBAL.score = 0;
    },

    start() {
        this.play();
    },

    update(dt) {
    },

    play: function () {
        this.menuAudio.play();
    },
    onStartGame: function () {
        cc.director.loadScene("game");
    },
    pause: function () {
        this.menuAudio.pause();
    }
});
