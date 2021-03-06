class Pipses {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpaceY = 150
        this.pipeSpaceX = 200
        this.columsOfPipe = 3
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, "pipe")
            p1.flipY =true
            p1.x = 500 + i * 200
            var p2 = GuaImage.new(game, "pipe")
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpaceY
    }
    debug() {
        this.pipeSpaceX = config.pipe_space_x.value
        this.pipeSpaceY = config.pipe_space_y.value
    }
    update() {
        for (var i = 0; i < this.pipes.length; i += 2) {
            var p1 = this.pipes[i]
            var p2 = this.pipes[i+1]
            p1.x -= 5
            p2.x -= 5
            if (p1.x < -100) {
                p1.x += this.pipeSpaceX * this.columsOfPipe
            }
            if (p2.x < -100) {
                p2.x += this.pipeSpaceX * this.columsOfPipe
                this.resetPipesPosition(p1, p2)
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)

            context.restore()
        }
    }
}
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        // label
        // var label = GuaLabel.new(game, 'hello from gua')
        // this.addElement(label)

        // background
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)
        // 加入水管
        var pipes = Pipses.new(game)
        this.addElement(pipes)
        // 循环移动地面
        this.grounds = []
        for (var i = 0; i < 15; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 30
            g.y = 440
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        // bird
        this.birdSpeed = 5
        var b = GuaAnimation.new(game)
        b.x = 120
        b.y = 200
        this.bird = b
        this.addElement(b)
    }
    debug() {
        this.birdSpeed = config.bird_speed.value
    }
    update() {
        super.update()
        // 地面移动
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (var i = 0; i < this.grounds.length; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
    setupInputs() {
        var game = this.game
        var self = this
        var b = this.bird
        // game.registerAction('k', function() {
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })
        game.registerAction('a', function(keyStatus) {
            b.move(-self.birdSpeed, keyStatus)
        })
        game.registerAction('d', function(keyStatus) {
            b.move(self.birdSpeed, keyStatus)
        })
        game.registerAction('j', function(keyStatus) {
            b.jump()
        })
    }
}
