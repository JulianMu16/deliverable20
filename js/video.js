var video = document.querySelector(".video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load()
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	if(video.paused) {
		video.play()
	}
	var vol = document.getElementById("volume")
	var slider = document.getElementById("slider")
	var value = slider.value
	vol.textContent = value + "%"
});	

document.querySelector("#pause").addEventListener("click", function() {
	if(!video.paused) {
		video.pause()
	}
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10	
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false
		this.innerHTML = "Mute"
	}
	else {
		video.muted = true
		this.innerHTML = "Muted"
	}
});

document.getElementById("slider").addEventListener("input", function() {
	var vol = document.getElementById("volume")
	video.volume = slider.value / 100
	vol.textContent = slider.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
