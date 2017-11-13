document.addEventListener("deviceready", function(){
   navigator.notification.beep(1);   
}, false);

    function submitBtn() {
    var rndm = ['True','False'][Math.round(Math.random())]
    $("#myText").text(rndm);
   navigator.notification.beep(1);

};