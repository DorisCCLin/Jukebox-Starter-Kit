var playPause = document.getElementById("playPause");
var stop = document.getElementById("stop");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var volumeUp = document.getElementById('volumeUp');
var volumeDown = document.getElementById('volumeDown'); 
var shuffle = document.getElementById('shuffle');
var myAudio = document.getElementById('myAudio'); 
var msg = document.getElementById('name'); 


class Song{
	constructor(fileName){ 
	this.fileName = fileName;}
}; 

function Songlist(){
	this.songs = []
	this.addSong = function(song){
		this.songs.push(song)
		console.log('You just added a song')
	}
	this.listSong = function(){
		for(var i = 0;i<this.songs.length;i++){
	    	console.log(this.songs[i])
	    }
	}
}

//create/add music list//
var song1 = new Song('songs/Seasonal.mp3');
var song2 = new Song('songs/Minstrel.mp3');
var song3 = new Song('songs/Landras_Dream.mp3');
var song4 = new Song('songs/Raw_Deal.mp3');
var song5 = new Song('songs/La_La_La.mp3');
var song6 = new Song('songs/Travel_Light.mp3');       
var allMusic = new Songlist(); 
allMusic.addSong(song1)
allMusic.addSong(song2)
allMusic.addSong(song3)
allMusic.addSong(song4)
allMusic.addSong(song5)
allMusic.addSong(song6)


var empty = []
for(let i = 0;i< allMusic.songs.length;i++){
empty.push(allMusic.songs[i].fileName)}

var array = empty;
var currentSong = 1;
myAudio.volume = 0.5;

class Jukebox{
	playPause(){
		if (myAudio.paused) {
			myAudio.play();
			playPause.innerHTML = "pause";
			msg.innerHTML = array[currentSong];
		} else {
			myAudio.pause();
			playPause.innerHTML = "play";
			msg.innerHTML = array[currentSong];
		}
	}	
	// playAud(){
	//     myAudio.play();
	// }
	// pauseAud(){	   
	//     myAudio.pause();
	// }	
	stopAud(){	       
	    myAudio.setAttribute("src", array[0])
	    myAudio.pause();
	    playPause.innerHTML = "play";
	    console.log('stop')
	}
	forward(){
	if(currentSong === array.length-1){	
		currentSong = 0;
		myAudio.setAttribute("src", array[currentSong]);
		console.log("reload");
		msg.innerHTML = array[currentSong];
	} else{
		console.log("In else statement");
		currentSong++;
		myAudio.setAttribute("src", array[currentSong]);
		msg.innerHTML = array[currentSong];
	}
	 myAudio.play()
	}
    backward(){
	if(currentSong === 0){	
		currentSong = 0;
		myAudio.setAttribute("src", array[currentSong]);
		console.log("first");
		msg.innerHTML = array[currentSong];

	} else{
		console.log("In else statement");
		currentSong--;
		myAudio.setAttribute("src", array[currentSong]);
		msg.innerHTML = array[currentSong];

	}
	myAudio.play()
	}
	volumeUp(){
		console.log('Up')
		if (myAudio.volume === 1){
			myAudio.volume === 1;
		} else {
		myAudio.volume += 0.1;
	}
	}
	volumeDown(){
		console.log('Down')
		if (myAudio.volume === 1){
			myAudio.volume = 1;
		} else {
		myAudio.volume -= 0.1;
	}
	}
	shuffle(){
        var r = Math.floor((Math.random()*array.length));
        currentSong = r;
        myAudio.setAttribute("src", array[currentSong]);
        msg.innerHTML = array[currentSong];
	}

};

var juke = new Jukebox()

playPause.addEventListener("click", juke.playPause);
stop.addEventListener("click", juke.stopAud);
forward.addEventListener("click", juke.forward);
backward.addEventListener("click", juke.backward);
volumeUp.addEventListener("click", juke.volumeUp);
volumeDown.addEventListener("click", juke.volumeDown);
shuffle.addEventListener("click", juke.shuffle);
myAudio.addEventListener("ended", juke.forward);












