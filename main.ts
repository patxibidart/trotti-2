radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
