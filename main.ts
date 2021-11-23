basic.pause(200)
dht11_dht22.queryData(
DHTtype.DHT22,
DigitalPin.P2,
true,
false,
true
)
OLED.init(128, 64)
let index = 0
let celsius = "" + String.fromCharCode(247) + "C   "
OLED.clear()
OLED.writeStringNewLine("  CONTROLE AMBIENTAL")
OLED.newLine()
OLED.newLine()
let tempNow = Math.round(dht11_dht22.readData(dataType.temperature))
let humiNow = Math.round(dht11_dht22.readData(dataType.humidity))
let min = tempNow
let max = tempNow
OLED.writeString(" AGORA: ")
OLED.writeNum(tempNow)
OLED.writeStringNewLine(celsius)
OLED.newLine()
OLED.writeString(" MIN/MAX: ")
OLED.writeNum(min)
OLED.writeString("/")
OLED.writeNum(max)
OLED.writeStringNewLine(" ")
OLED.newLine()
OLED.writeString(" UMIDADE: ")
OLED.writeNum(humiNow)
OLED.writeStringNewLine("% ")
basic.pause(1000)
basic.forever(function () {
    basic.pause(200)
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P2,
    true,
    false,
    true
    )
    tempNow = Math.round(dht11_dht22.readData(dataType.temperature))
    humiNow = Math.round(dht11_dht22.readData(dataType.humidity))
    if (tempNow > max) {
        max = tempNow
    } else if (tempNow < min) {
        min = tempNow
    }
    index += 1
    if (index == 100) {
        index = 0
        OLED.clear()
        OLED.writeStringNewLine("   SENSOR   DHT22 ")
        OLED.newLine()
        OLED.newLine()
        OLED.writeString(" AGORA: ")
        OLED.writeNum(tempNow)
        OLED.writeStringNewLine(celsius)
        OLED.newLine()
        OLED.writeString(" MIN/MAX: ")
        OLED.writeNum(min)
        OLED.writeString("/")
        OLED.writeNum(max)
        OLED.writeStringNewLine(" ")
        OLED.newLine()
        OLED.writeString(" UMIDADE: ")
        OLED.writeNum(humiNow)
        OLED.writeStringNewLine("% ")
        basic.pause(1000)
    }
})
