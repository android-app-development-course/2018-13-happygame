cc.Class({
    extends: cc.Component,

    properties: {
        underGroundAudio: {
            type: cc.AudioClip,
            default: null
        },
    },

    onLoad: function (){
        cc.audioEngine.stopAll();
        cc.audioEngine.play(this.underGroundAudio, true, 30);
        
        var scaleTo = cc.scaleTo(.8, .9);
        var reverse = cc.scaleTo(.8, 1);
        var seq = cc.sequence(scaleTo, reverse);
        var repeat = cc.repeatForever(seq);
        this.node.runAction(repeat);
    },

    toFirstScene: function(){
        cc.director.loadScene("Game")
    },

    toLoadScene: function(){
        cc.director.loadScene("loadGame")
    },

    endGame(){
        cc.game.end();
    },
    
});
