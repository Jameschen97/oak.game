var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    // 初始化
    s.upadte = function() {

    }
    s.draw = function() {
        // draw labels
        game.context.fillText('游戏结束', 170, 150)

    }

    return s
}
