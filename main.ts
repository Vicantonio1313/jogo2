let Num = 0
let valor = 0
input.onButtonPressed(Button.A, function () {
    if (Num == 0) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (Num == 1) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
input.onGesture(Gesture.Shake, function () {
    valor = randint(0, 10)
    basic.showNumber(valor)
    Num = valor % 2
})
input.onButtonPressed(Button.B, function () {
    if (Num == 1) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (Num == 0) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
