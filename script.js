var paths = document.querySelectorAll('#signature path');
var totalLength = 0;
var prevElemLength = 0;
var mediaTablet = window.matchMedia("(min-width: 768px)");
var mediaPC = window.matchMedia("(min-width: 1200px)");

for (let i = 0; i < paths.length; i++) {
	totalLength += paths[i].getTotalLength();
}
console.log(`\x1b[35m script.js:7	totalLength: ${totalLength}`)

for (let i = 0; i < paths.length; i++) {
	let elementLength = paths[i].getTotalLength();
	let writingTime = (elementLength/totalLength) ;
	let animDelay = 0.6;
	switch (i) {
		case 0: //Barre du B
			paths[i].style.animation = "draw "+ (writingTime * 3) + "s linear forwards " + (animDelay + 0) + "s";
			break;
		case 1: // Boucle du B
			paths[i].style.animation = "draw " + (writingTime * 1.5) + "s linear forwards " + (animDelay + 0.4) + "s";
			break;
		case 2: //en
			paths[i].style.animation = "draw " + (writingTime * 4) + "s linear forwards " + (animDelay + 0.9) + "s";
			break;
		case 3: //j
			paths[i].style.animation = "draw " + (writingTime * 1) + "s linear forwards " + (animDelay + 1.4) + "s";
			break;
		case 4: //am
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 1.8) + "s";
			break;
		case 5: //i
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.5) + "s";
			break;
		case 6: //n
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.8) + "s";
			break;
		case 7: // point du i
			paths[i].style.animation = "draw " + (writingTime * 10) + "s linear forwards " + (animDelay + 3.2) + "s";
			break;
		case 8: //G
			paths[i].style.animation = "draw " + (writingTime * 2) + "s linear forwards " + (animDelay + 3.7) + "s";
			break;
		case 9: //.
			paths[i].style.animation = "draw " + (writingTime * 1) + "s linear forwards " + (animDelay + 4.5) + "s";
			setTimeout(function() {
				let signature = document.querySelector("#signature");

				if (mediaPC.matches) {
					for (let j = 0; j < paths.length; j++) {
						paths[j].style.strokeWidth = "8";
						paths[j].style.transition = "all 2s ease-in-out"
					}
					signature.style.width = "18vw";
					signature.style.top = "80px";
					signature.style.left = "250px";
					signature.style.transition = "all 2s ease-in-out";
				}
				else if (mediaTablet.matches) {
					for (let j = 0; j < paths.length; j++) {
						paths[j].style.strokeWidth = "8";
						paths[j].style.transition = "all 2s ease-in-out"
					}
					signature.style.width = "45vw";
					signature.style.top = "90px";
					signature.style.transition = "all 2s ease-in-out";
				}
				else { // Smartphone screens
					signature.style.width = "50vw";
					signature.style.top = "50px";
					signature.style.transition = "all 2s ease-in-out";
				}
			  }, (animDelay + 5)*1000);
			break;

	}
	paths[i].style.strokeDasharray = elementLength;
	paths[i].style.strokeDashoffset = elementLength;
}