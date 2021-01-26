radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Rover.MotorRunDual(100, 0)
        Rover.setALLRGB(Rover.colors(RoverColors.Indigo))
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        Rover.MotorRunDual(0, 100)
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        Rover.MotorRunDual(200, 200)
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 4) {
        Rover.MotorRunDual(0, 0)
        Rover.setALLRGB(Rover.colors(RoverColors.Yellow))
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    if (receivedNumber == 5) {
        Rover.setALLRGB(Rover.colors(RoverColors.Orange))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
        music.playMelody("F A C5 B A G D F ", 120)
    }
    if (receivedNumber == 6) {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
        music.playMelody("A G F A E A F C ", 120)
    }
    if (receivedNumber == 7) {
        basic.showString("Show")
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Orange))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Yellow))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Indigo))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Violet))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Purple))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.White))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.Black))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Rover.setALLRGB(Rover.colors(RoverColors.White))
    }
    if (receivedNumber == 8) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # . . . #
            # # # # .
            . . . . .
            `)
        radio.sendString("" + (Rover.BatteryLevel()))
        basic.showString("" + (Rover.BatteryLevel()))
        basic.showLeds(`
            . . . . .
            # # # # .
            # . . . #
            # # # # .
            . . . . .
            `)
    }
})
basic.showString("Hello!")
basic.showString("" + (Rover.BatteryLevel()))
Rover.setALLRGB(Rover.colors(RoverColors.White))
radio.setGroup(123)
Rover.setALLRGB(Rover.colors(RoverColors.Violet))
Rover.setALLRGB(Rover.colors(RoverColors.Black))
basic.showArrow(ArrowNames.North)
basic.showIcon(IconNames.Happy)
Rover.setALLRGB(Rover.colors(RoverColors.Purple))
basic.forever(function () {
    Rover.setBrightness(0)
    basic.pause(100)
    Rover.setBrightness(99)
    basic.pause(100)
    Rover.setBrightness(150)
    basic.pause(100)
    Rover.setBrightness(204)
    basic.pause(100)
    Rover.setBrightness(255)
})
