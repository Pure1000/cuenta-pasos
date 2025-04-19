datalogger.onLogFull(function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    Count += 1
    datalogger.log(datalogger.createCV("Pasos", Count))
})
let Count = 0
Count = 0
basic.forever(function () {
    basic.showNumber(Count)
})
