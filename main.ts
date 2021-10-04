let tempNow = 0
OLED12864_I2C.init(60)
let index = 0
OLED12864_I2C.showString(
0,
0,
"Temp",
1
)
let min = input.temperature()
let max = input.temperature()
basic.forever(function () {
    tempNow = input.temperature()
    if (tempNow > max) {
        max = tempNow
    } else if (tempNow < min) {
        min = tempNow
    }
    OLED12864_I2C.showNumber(
    5,
    0,
    tempNow,
    1
    )
    OLED12864_I2C.pixel(index, 32 - Math.map(tempNow, 15, 35, 0, 20), 1)
    OLED12864_I2C.draw()
    index += 1
    if (index == 64) {
        index = 0
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        0,
        0,
        "Temp",
        1
        )
    }
    if (input.buttonIsPressed(Button.A)) {
        OLED12864_I2C.showString(
        0,
        3,
        "Min",
        1
        )
        OLED12864_I2C.showNumber(
        5,
        3,
        min,
        1
        )
    }
    if (input.buttonIsPressed(Button.B)) {
        OLED12864_I2C.showString(
        0,
        3,
        "Max",
        1
        )
        OLED12864_I2C.showNumber(
        5,
        3,
        max,
        1
        )
    }
})
