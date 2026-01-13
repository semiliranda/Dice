input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
