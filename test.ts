JKmaqueenPlusV2.I2CInit()
JKmaqueenPlusV2.setBrightness(100)
basic.forever(function () {
    serial.writeLine("Turn on the left light, motor forward, RGB light red")
    JKmaqueenPlusV2.setIndexColor(DigitalPin.P15,JKmaqueenPlusV2.ledRange(1, 4), JKmaqueenPlusV2.NeoPixelColors.Red)
    JKmaqueenPlusV2.controlMotor(JKmaqueenPlusV2.MyEnumMotor.AllMotor, JKmaqueenPlusV2.MyEnumDir.Forward, 100)
    JKmaqueenPlusV2.controlLED(JKmaqueenPlusV2.MyEnumLed.LeftLed, JKmaqueenPlusV2.MyEnumSwitch.Open)
    basic.pause(2000)
    serial.writeLine("Turn on the right side light, motor back, RGB light yellow")
    JKmaqueenPlusV2.setIndexColor(DigitalPin.P15,JKmaqueenPlusV2.ledRange(1, 4), JKmaqueenPlusV2.NeoPixelColors.Yellow)
    JKmaqueenPlusV2.controlMotor(JKmaqueenPlusV2.MyEnumMotor.AllMotor, JKmaqueenPlusV2.MyEnumDir.Backward, 100)
    JKmaqueenPlusV2.controlLED(JKmaqueenPlusV2.MyEnumLed.LeftLed, JKmaqueenPlusV2.MyEnumSwitch.Close)
    JKmaqueenPlusV2.controlLED(JKmaqueenPlusV2.MyEnumLed.RightLed, JKmaqueenPlusV2.MyEnumSwitch.Open)
    basic.pause(2000)
    serial.writeLine("Turn on the side lights, motor forward, RGB light green")
    JKmaqueenPlusV2.controlMotor(JKmaqueenPlusV2.MyEnumMotor.AllMotor, JKmaqueenPlusV2.MyEnumDir.Forward, 100)
    JKmaqueenPlusV2.controlLED(JKmaqueenPlusV2.MyEnumLed.AllLed, JKmaqueenPlusV2.MyEnumSwitch.Open)
    JKmaqueenPlusV2.setIndexColor(DigitalPin.P15,JKmaqueenPlusV2.ledRange(1, 4), JKmaqueenPlusV2.NeoPixelColors.Green)
    basic.pause(2000)
    serial.writeLine("Printing sensor data")
    serial.writeLine("SensorL1 status:" + JKmaqueenPlusV2.readLineSensorState(JKmaqueenPlusV2.MyEnumLineSensor.SensorL1))
    serial.writeLine("SensorL1 ADC:" + JKmaqueenPlusV2.readLineSensorData(JKmaqueenPlusV2.MyEnumLineSensor.SensorL1))
    serial.writeLine("ultrasonic sensor:" + JKmaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14))
})
