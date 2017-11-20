//listen for device ready
document.addEventListener("deviceready", onDeviceReady, false);


//when device is ready
function onDeviceReady() {

    //set up click event handling for button
  	$('#submitButton').on("click", getAnswer);
    
}


//get a random answers
function getAnswer() {
    
            var rndm = ['True','False'][Math.round(Math.random())]
    $("#responseText").text(rndm);
navigator.notification.beep(1);
    }