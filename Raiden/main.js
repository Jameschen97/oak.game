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
        sky: 'img/sky.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'img/fire.png',
        // animation
        // r0: 'img/ninja/Run__000.png',
        // r1: 'img/ninja/Run__001.png',
        // r2: 'img/ninja/Run__002.png',
        // r3: 'img/ninja/Run__003.png',
        // r4: 'img/ninja/Run__004.png',
        // r5: 'img/ninja/Run__005.png',
        // r6: 'img/ninja/Run__006.png',
        // r7: 'img/ninja/Run__007.png',
        // r8: 'img/ninja/Run__008.png',
        // r9: 'img/ninja/Run__009.png',
        // 多场景动画
        // 闲置
        idle0: 'img/ninja/Idle__000.png',
        idle1: 'img/ninja/Idle__001.png',
        idle2: 'img/ninja/Idle__002.png',
        idle3: 'img/ninja/Idle__003.png',
        idle4: 'img/ninja/Idle__004.png',
        idle5: 'img/ninja/Idle__005.png',
        idle6: 'img/ninja/Idle__006.png',
        idle7: 'img/ninja/Idle__007.png',
        idle8: 'img/ninja/Idle__008.png',
        idle9: 'img/ninja/Idle__009.png',
        // 跑
        run0: 'img/ninja/Run__000.png',
        run1: 'img/ninja/Run__001.png',
        run2: 'img/ninja/Run__002.png',
        run3: 'img/ninja/Run__003.png',
        run4: 'img/ninja/Run__004.png',
        run5: 'img/ninja/Run__005.png',
        run6: 'img/ninja/Run__006.png',
        run7: 'img/ninja/Run__007.png',
        run8: 'img/ninja/Run__008.png',
        run9: 'img/ninja/Run__009.png',
    }
    var game = GuaGame.instance(fps, images, function(g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        return s
    })

    enableDebugMode(game, true)
}

__main()
