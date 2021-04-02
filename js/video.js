var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 1.05
	console.log("New video speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05
	console.log("New video speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	if (video.currentTime >= video.duration - 15){
		video.currentTime = 0
	}
	else{
		video.currentTime = video.currentTime + 15
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmuting")
		document.getElementById('mute').innerHTML = "Mute"
		video.muted = false
	}
	else{
		console.log("Muting")
		document.getElementById("mute").innerHTML = "Unmute"
		video.muted = true
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100
	console.log("New volume is " + this.value + "%");
	volume.innerHTML = this.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

