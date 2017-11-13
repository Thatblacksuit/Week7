

function submitBtn() {
    var rndm = ['True','False'][Math.round(Math.random())]
    $("#myText").text(rndm);
    
    if (rndm = "True"){
    navigator.notification.beep(1);};
};