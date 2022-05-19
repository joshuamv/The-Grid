var videoDuration;
var videoCurrent;

$(document).ready(function(){
  //turn subtitles white on hover
  $('#startButton').mouseover(function(){
    $('#subtitle').addClass("whiteSubtitle");
    $('#storyNumber').addClass("whiteSubtitle");    
    $('#subtitle').removeClass("redSubtitle");
    $('#storyNumber').removeClass("redSubtitle");
  });

  //turn subtitles red on mouse leave
  $('#startButton').mouseleave(function(){
    $('#subtitle').addClass("redSubtitle");
    $('#storyNumber').addClass("redSubtitle");    
    $('#subtitle').removeClass("whiteSubtitle");
    $('#storyNumber').removeClass("whiteSubtitle");
  });

  //when start is clicked play video
  $('#startButton').click(function(){
    startScreen.setAttribute("style", "opacity: 0;");
    //play video
    $('#videoGrid').get(0).play();
    setInterval(function () {
      videoCurrent = $('#videoGrid').prop('currentTime')*1000;
    }, 200);
    videoDuration = ($('#videoGrid').get(0).duration)*1000;
    setTimeout(function () {
      startScreen.setAttribute("style", "display: none;");
    }, 600);

    //check if video ended

    setInterval(function () {
      if (videoCurrent == videoDuration) {        
        //pause video
        $('#videoGrid').get(0).pause();
        //get video back to second 1
        console.log(videoCurrent);
        console.log(videoDuration);
        //show homescreen
        startScreen.setAttribute("style", "display: flex;");
        setTimeout(function () {
          startScreen.setAttribute("style", "opacity: 1;");
        }, 600);
      }
    }, 200);

  });

});