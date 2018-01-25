//connect html to js//

var play = document.getElementById("play");
var pause = document.getElementById("pause");
// var myAudio = document.getElementById("myAudio");
var array = ['songs/Minstrel.mp3']
var myAudio = new Audio();
myAudio.src = array[0];
// addEventListener('ended',

class Jukebox(){

	playAud(){
	    myAudio.play();}
	 pauseAud(){	   
	    myAudio.pause();}
};

var juke = new Jukebox()

play.addEventListener("click", juke.playAud);
pause.addEventListener("click", juke.pauseAud);

//play and pause button//
// function playVid(){
// 	if (aud.paused){
//         aud.play();
//         playPause.innerHTML="pause";

//     } else {
//         aud.pause();
//         playPause.innerHTML="play";
//         }
// }

// function playVid(){
// 	myAudio.src = array[0];
// 	myAudio.play()
// }

//playlist templates//
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
var allMusic = new Songlist(); 
allMusic.addSong(song1)
allMusic.addSong(song2)

// aud.src = url allMusic.songs[0].fileName;










