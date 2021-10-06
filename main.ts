OLED.init(128, 64)
let index = 0
OLED.writeStringNewLine("      TEMPERATURA  ")
OLED.newLine()
let tempNow = input.temperature()
let min = tempNow
let max = tempNow
OLED.writeString(" LAST: ")
OLED.writeNum(tempNow)
OLED.writeStringNewLine("'C")
OLED.newLine()
OLED.writeString(" MIN:  ")
OLED.writeNum(min)
OLED.writeStringNewLine("'C")
OLED.newLine()
OLED.writeString(" MAX:  ")
OLED.writeNum(max)
OLED.writeStringNewLine("'C")
basic.forever(function () {
    tempNow = input.temperature()
    if (tempNow > max) {
        max = tempNow
    } else if (tempNow < min) {
        min = tempNow
    }
    index += 1
    if (index == 100) {
        index = 0
        OLED.clear()
        OLED.writeStringNewLine("      TEMPERATURA  ")
        OLED.newLine()
        OLED.writeString(" LAST: ")
        OLED.writeNum(tempNow)
        OLED.writeStringNewLine("'C")
        OLED.newLine()
        OLED.writeString(" MIN:  ")
        OLED.writeNum(min)
        OLED.writeStringNewLine("'C")
        OLED.newLine()
        OLED.writeString(" MAX:  ")
        OLED.writeNum(max)
        OLED.writeStringNewLine("'C")
    }
})
