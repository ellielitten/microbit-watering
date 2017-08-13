let waterlevel = 0
input.onButtonPressed(Button.A, () => {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    waterlevel = pins.analogReadPin(AnalogPin.P1)
    if (waterlevel < 400) {
        basic.showString("pumpin")
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("pumpin complete")
    }
})
