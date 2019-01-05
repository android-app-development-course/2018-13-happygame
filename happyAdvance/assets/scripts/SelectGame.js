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
        menu_music: {
            type: cc.AudioClip,
            default: null
        }

    },

    onLoad: function () {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(this.menu_music, true, 30);
        
        var scaleTo = cc.scaleTo(.8, .9);
        var reverse = cc.scaleTo(.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
        this.node.runAction(repeat);
    },

    toFirstScene: function(){
        cc.director.loadScene("Game")
    },

    toMenuGame: function(){
        cc.director.loadScene("menuGame")
    },

});

