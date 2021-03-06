var loadLevel = function(game, n) {
    n -= 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block.new(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // 关卡选择功能
            // window.blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        window.fps = Number(input.value) || 1
    })
}

var __main = function() {
    var fps = 20
    var images = {
        // flappy bird images
        bg: 'img/bird/bg.png',
        pipe: 'img/bird/pipe_up.png',
        ground: 'img/bird/ground.png',
        b1: 'img/bird/b1.png',
        b2: 'img/bird/b2.png',
        b3: 'img/bird/b3.png',
}
    var game = GuaGame.instance(fps, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        return s
    })

    enableDebugMode(game, true)
}

__main()
