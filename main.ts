basic.showIcon(IconNames.Heart)
for (let index = 0; index < 4; index++) {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 53)
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
    basic.pause(200)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 45)
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
}
Kitronik_Move_Motor.stop()
