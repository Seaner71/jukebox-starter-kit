const Jukebox = class Jukebox {
  constructor(args={}){
    this.songs = [args.song] || [];
    this.audio = document.querySelector('audio');
    this.play = document.querySelector('.play');
    this.pause = document.querySelector('pause');
    this.stop = document.querySelector('stop');
    this.ff = document.querySelector('ff');
    this.nextSong = document.querySelector('next-song');
    this.nowPlay = document.querySelector('marquee')
  }
    playAudio() {
      this.audio.play();
      var fileName = this.audio.src.split('/').pop().split('.').shift()
      this.nowPlay.innerHTML = `Now playing: ${fileName}`;
    }

    pauseAudio() {
      this.audio.pause();
  }
    stopAudio() {
      this.audio.pause();
      this.audio.currentTime = 0;
  }
   ffAudio() {
    this.audio.currentTime += 10;
}

}


const Song = class Song extends Jukebox {

  constructor(args= {}) {
    super(args)
    this.name = args.name;
  }
}


var juke = new Jukebox({song: "frank"});
 var song1 = new Song({name: "frank"});
console.log(juke);
console.log(song1);



window.onLoad = juke.playAudio();
