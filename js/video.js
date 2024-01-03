var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function tooglePlayPause(){
  if(video.paused){
    btn.className = "pause";
    video.play();
  }else{
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function(){
  tooglePlayPause();
}