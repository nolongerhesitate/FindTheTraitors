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
        friendPrefab: {
            default: null,
            type: cc.Prefab,
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
        //计时器
        scheduleLab: {
            default: null,
            type: cc.Label,
        },
        //关卡数
        stageLab: {
            default: null,
            type: cc.Label,
        },
        //得分数
        scoreLab: {
            default: null,
            type: cc.Label,
        },
        // 叛徒世界坐标
        traitorsLocX: 0,
        traitorsLocY: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 计时器时间间隔 
        this.interval = 1;
        // 重复次数
        this.repeat = 10;
        //计时器开始延时
        this.delay = 0;
        //关卡时间
        this.timer = this.repeat;
        //当前点击次数
        this.clickNum = 0;

        this.stageLab.string = "关卡:" + GLOBAL.stage.toString();
        this.scoreLab.string = "得分:" + GLOBAL.score.toString();

        // 初始化倒计时
        this.setSchedule();
        // 演员就位
        this.initActors();
        //初始化输入监听
        this.setInputControl();
    },

    start() {
    },

    update(dt) {
    },

    initActors: function () {
        // 叛徒生成位置
        var traitorsPos = Math.round(cc.random0To1() * 63)

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
            // actor.anchorX = 0;
            // actor.anchorY = 0;
            this.playArea.addChild(actor);
            var actorPos = cc.p(100 * (i % 7) + 50, 100 * parseInt(i / 7) + 50);
            actor.setPosition(actorPos);
            if (i == traitorsPos) {
                this.traitorsLocX = actorPos.x + 30;
                this.traitorsLocY = actorPos.y + 50;
            }
        }
    },

    setInputControl: function () {
        var self = this
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                var touchLoc = touch.getLocation();

                return true; //????????????????????????? why return true???
            },

            onTouchEnded: function (touch, event) {
                var touchLoc = touch.getLocation();
                self.clickNum++;
                if (Math.abs(touchLoc.x - self.traitorsLocX) < 50 && Math.abs(touchLoc.y - self.traitorsLocY) < 50) {
                    //找到叛徒进入下一关卡
                    self.nextStage();
                }
            }
        }, self.node);
    },

    setSchedule: function () {
        this.schedule(function () {
            if (this.timer <= 0) {
                this.gameOver();
            }
            this.scheduleLab.string = this.timer;
            this.timer--;
        }, this.interval, this.repeat, this.delay);
    },

    gainStage: function () {
        GLOBAL.stage += 1;
        this.stageLab.string = "关卡:" + GLOBAL.stage.toString();
    },

    gainScore: function () {
        GLOBAL.score += GLOBAL.stage * 100 + this.timer - (this.clickNum * 10);
        this.scoreLab.string = "得分:" + GLOBAL.score.toString();
    },

    nextStage: function () {
        this.gainScore();
        this.gainStage();
        cc.director.loadScene('game');
    },

    gameOver: function () {
        cc.director.loadScene('start');
    },

});
