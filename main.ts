music.playMelody("C5 C B D A E G E ", 120)
music.playMelody("C5 C C5 F C A D G ", 120)
music.playMelody("C5 F G - A B C5 C ", 120)
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Hello! welkom")
basic.forever(function () {
    music.setVolume(0)
})
