input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Double))
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . . .
        # # . . .
        . # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # # . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # . . .
        # # . . .
        . # # # .
        . # . # .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . . .
        # # . . .
        . # # # .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # . . .
        # # . . .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # . . .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # . . .
        # # . . #
        . # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
