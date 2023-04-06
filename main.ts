input.onButtonPressed(Button.A, function () {
    шар.move(-1)
    if (касаетсяСтены(шар)) {
        шар.move(1)
    }
})
function касаетсяСтены (ball: game.LedSprite) {
    if (ball.isTouching(s1)) {
        return 1
    }
    if (ball.isTouching(s2)) {
        return 1
    }
    if (ball.isTouching(s3)) {
        return 1
    }
    if (ball.isTouching(s4)) {
        return 1
    }
    if (ball.isTouching(s5)) {
        return 1
    }
    if (ball.isTouching(s6)) {
        return 1
    }
    if (ball.isTouching(s7)) {
        return 1
    }
    if (ball.isTouching(s8)) {
        return 1
    }
    if (ball.isTouching(s9)) {
        return 1
    }
    if (ball.isTouching(s10)) {
        return 1
    }
    if (ball.isTouching(s11)) {
        return 1
    }
    if (ball.isTouching(s12)) {
        return 1
    }
    if (ball.isTouching(s13)) {
        return 1
    }
    if (ball.isTouching(s14)) {
        return 1
    }
    if (ball.isTouching(s15)) {
        return 1
    }
    if (ball.isTouching(s16)) {
        return 1
    }
    return 0
}
input.onButtonPressed(Button.AB, function () {
    шар.turn(Direction.Left, 90)
    шар.move(1)
    шар.turn(Direction.Right, 90)
    if (касаетсяСтены(шар)) {
        шар.turn(Direction.Left, 90)
        шар.move(-1)
        шар.turn(Direction.Right, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    шар.move(1)
    if (касаетсяСтены(шар)) {
        шар.move(-1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    шар.turn(Direction.Left, 90)
    шар.move(-1)
    шар.turn(Direction.Right, 90)
    if (касаетсяСтены(шар)) {
        шар.turn(Direction.Left, 90)
        шар.move(1)
        шар.turn(Direction.Right, 90)
    }
})
let s16: game.LedSprite = null
let s15: game.LedSprite = null
let s14: game.LedSprite = null
let s13: game.LedSprite = null
let s12: game.LedSprite = null
let s11: game.LedSprite = null
let s10: game.LedSprite = null
let s9: game.LedSprite = null
let s8: game.LedSprite = null
let s7: game.LedSprite = null
let s6: game.LedSprite = null
let s5: game.LedSprite = null
let s4: game.LedSprite = null
let s3: game.LedSprite = null
let s2: game.LedSprite = null
let s1: game.LedSprite = null
let шар: game.LedSprite = null
шар = game.createSprite(1, 3)
let манетка = game.createSprite(2, 1)
s1 = game.createSprite(0, 4)
s2 = game.createSprite(1, 4)
s3 = game.createSprite(2, 4)
s4 = game.createSprite(3, 4)
s5 = game.createSprite(4, 4)
s6 = game.createSprite(2, 2)
s7 = game.createSprite(0, 0)
s8 = game.createSprite(1, 0)
s9 = game.createSprite(2, 0)
s10 = game.createSprite(3, 0)
s11 = game.createSprite(4, 0)
s12 = game.createSprite(2, 3)
s13 = game.createSprite(0, 1)
s14 = game.createSprite(0, 2)
s15 = game.createSprite(4, 1)
s16 = game.createSprite(4, 2)
basic.forever(function () {
    if (шар.isTouching(манетка)) {
        game.addScore(5)
        манетка.delete()
    }
    if (шар.isTouchingEdge()) {
        basic.pause(500)
        game.gameOver()
    }
})
