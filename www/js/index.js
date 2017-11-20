document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady(){
    $('#submitButton').on("click", getAnswer);
    navigator.notification.beep(1);

}
    
            function getAnswer() {
        var rndm = ['True','False'][Math.round(Math.random())]
    $("#myText").text(rndm);
   navigator.notification.beep(1);
            }
