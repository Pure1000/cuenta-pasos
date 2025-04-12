input.onGesture(Gesture.Shake, function () {
    Count += 1
})
let Count = 0
basic.forever(function () {
    basic.showNumber(Count)
})
