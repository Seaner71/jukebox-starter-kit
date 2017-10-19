var audio = document.querySelector('audio')
var play = document.querySelector('.play')
var pause = document.querySelector('.pause')
var stop = document.querySelector('.stop')
var ff = document.querySelector('.ff')
var nextSong = document.querySelector('.next-song')
var fileName = audio.src.split('/').pop().split('.').shift()
var songList = ["audio/franklin's-tower.m4a", 'audio/good-lovin.m4a']
var currentSong = (songList.indexOf('audio/'+fileName+'.m4a'));
var nowPlay = document.querySelector('marquee');


/* this is terribly repetitive clean up  */
function songTime(){
  var dur = Math.floor(audio.duration);
  var time = Math.floor(audio.currentTime);
  var mins = Math.floor(time/60);
  var secs = (time - mins * 60); secs < 10? secs ='0'+ secs: secs = time - mins * 60;
  var durMins = Math.floor(dur/60);
  var durSecs = dur - durMins * 60; ; durSecs < 10? durSecs ='0'+ durSecs: durSecs = dur - durMins * 60;
  var playTime = `${mins}:${secs}`
  var durTime = `${durMins}:${durSecs}`
  document.querySelector('.duration').innerHTML = playTime + '/' + durTime;
}

play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
stop.addEventListener('click', stopAudio);
ff.addEventListener('click', ffAudio);
nextSong.addEventListener('click', changeSong)

function playAudio() {
  audio.play();
  nowPlaying();
  }

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}
function ffAudio() {
  audio.currentTime += 10;
}

function nowPlaying (){
    var fileName = audio.src.split('/').pop().split('.').shift()
    nowPlay.innerHTML = `Now playing: ${fileName}`;
}

/* not working properly - need to lok at it in a different light*/
function changeSong() {
  console.log(currentSong);
  if (currentSong === 0) {
    audio.src = songList[1];
    console.log(currentSong);
    console.log(audio.src);
    console.log('audio/'+fileName+'.m4a');
  }
  else {
    audio.src = songlist[0];
  }

  playAudio();
  nowPlaying();

}


window.onLoad = playAudio();
setInterval(songTime, 1000);


/* Unused - CODE I HAVE DITCHED*/
/*
function SetVolume()
{
    var  player = document.getElementById('volume');
    player.volume = val / 100;

}
*/

/* create Buttons class and instances - do I want this??*/
/*
const createButton = class createButton {
  constructor(options = {}) {
    this.el = document.createElement('button');
    this.el.innerHTML = options.name;

  }
  render() {
    document.getElementById('commands').appendChild(this.el)
  }
};

var play = new createButton({
  name: 'Play'
});
play.render();
var pause = new createButton({
  name: 'Pause'
})
pause.render();
var stop = new createButton({
  name: 'Stop'
});
stop.render();
var ff = new createButton({name: "FF"});
ff.render();

var nextSong = new createButton({name: 'Next Song'});
nextSong.render();

var songList = ['audio/franklins-tower.mp4', 'audio/good-lovin.mp3']
var tracks = new createButton ({name: songList[0]});
console.log(tracks)
tracks.render(0)
*/
