

function submitBtn() {
    var rndm = ['True','False'][Math.round(Math.random())]
    $("#myText").text(rndm);
    navigator.notification.beep(2);

};