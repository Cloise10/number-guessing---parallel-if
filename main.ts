// increase the random number by 1
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
    numero += 1
})
// shows the final number
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    basic.clearScreen()
    if (numero >= 0 && numero <= 20) {
        basic.showNumber(numero)
        basic.pause(500)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
// decreases random number by 1
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
    numero += -1
})
// shows random number
input.onGesture(Gesture.Shake, function () {
    numero = randint(0, 20)
    basic.showNumber(numero)
    basic.pause(200)
    basic.clearScreen()
})
// sets program back to zero
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # . . .
        . # # # #
        . # . # .
        # # # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        # # # # .
        . # . # .
        . # # # #
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        . # # # #
        . # . # .
        # # # # .
        . . . # .
        `)
    basic.pause(200)
    basic.clearScreen()
    numero = 0
})
// sets program to zero
let numero = 0
basic.showLeds(`
    . # . . .
    . # # # #
    . # . # .
    # # # # .
    . . . # .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # . # .
    . # # # .
    # . . . #
    `)
basic.showLeds(`
    . . . # .
    # # # # .
    . # . # .
    . # # # #
    . # . . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . # . . .
    . # # # #
    . # . # .
    # # # # .
    . . . # .
    `)
basic.pause(200)
basic.clearScreen()
numero = 0
