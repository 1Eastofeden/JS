function convertSeconds() {
	var seconds = parseInt(document.getElementById("secondsInput").value);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);
	document.getElementById("result").innerHTML = "Dakika: " + minutes + "<br>" +
		"Saat: " + hours + "<br>" +
		"Gün: " + days + "<br>" +
		"Ay: " + months + "<br>" +
		"Yıl: " + years;
}
