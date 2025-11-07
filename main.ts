let moisture = 0
serial.redirectToUSB()
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P0)
    
    serial.writeValue("Moisture Level:", moisture)
   
    if (moisture > 600) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . # . .
            `)
    } else if (moisture > 300) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            `)
    }
    basic.pause(2000)
})
