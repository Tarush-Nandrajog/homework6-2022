var video = document.querySelector("#player1");

window.addEventListener("load", function() { 
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("the current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	var speed = video.playbackRate
	video.playbackRate = speed * 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	var speed = video.playbackRate;
	video.playbackRate = speed * 1.05
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original time " + video.currentTime)
	var goTo = video.currentTime + 15;
	
	if (goTo > video.duration) {
		goTo= 0;
	}

	video.currentTime = goTo
	console.log("New time " + goTo)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is" + video.muted);
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});


document.querySelector("#slider").addEventListener("click", function() {
    console.log("The current volume is" + this.value)
    video.volume = this.value / 100
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	console.log("The new volume is" + this.value)
});


document.querySelector("#vintage").addEventListener("click", function() {
    console.log("In old school view")
    video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("In original view")
    video.classList.remove("oldSchool")
});
