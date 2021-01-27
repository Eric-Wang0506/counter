input.onButtonPressed(Button.A, function () {
    i += -1
})
input.onButtonPressed(Button.AB, function () {
    i = 0
})
input.onButtonPressed(Button.B, function () {
    i += 1
})
let i = 0
i = 0
basic.forever(function () {
    basic.showNumber(i)
})
