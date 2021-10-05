OLED.init(128, 64)
let index = 0
OLED.writeStringNewLine("  TEMPERATURA  ")
OLED.newLine()
let tempNow = input.temperature()
let min = tempNow
let max = tempNow
OLED.writeString(" TEMP: ")
OLED.writeNum(tempNow)
OLED.writeStringNewLine("°C")
OLED.newLine()
OLED.drawLoading(index)
basic.forever(function () {
    tempNow = input.temperature()
    if (tempNow > max) {
        max = tempNow
    } else if (tempNow < min) {
        min = tempNow
    }
    index += 10
    if (index == 100) {
        index = 0
        OLED.clear()
        OLED.writeStringNewLine("  TEMPERATURA  ")
        OLED.newLine()
        OLED.writeString(" TEMP: ")
        OLED.writeNum(tempNow)
        OLED.writeStringNewLine("°C")
        OLED.newLine()
        OLED.drawLoading(index)
    } else {
        OLED.drawLoading(index)
    }
    if (input.buttonIsPressed(Button.A)) {
        OLED12864_I2C.showString(
        2,
        3,
        "MIN",
        1
        )
        OLED12864_I2C.showNumber(
        7,
        3,
        min,
        1
        )
    }
    if (input.buttonIsPressed(Button.B)) {
        OLED12864_I2C.showString(
        2,
        3,
        "MAX",
        1
        )
        OLED12864_I2C.showNumber(
        7,
        3,
        max,
        1
        )
    }
})
