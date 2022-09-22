input.onButtonPressed(Button.A, function () {
    cometa()
})
function cometa () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(2, 4)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(2, 3)
    led.plot(2, 3)
}
input.onButtonPressed(Button.B, function () {
	
})
music.playMelody("C5 B A G F E D C ", 120)
basic.pause(100)
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.clearScreen()
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
