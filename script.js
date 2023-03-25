var paths = document.getElementsByTagName("path");
var totalLength = 0;
let prevElemLength = 0;

for (var j = 0; j < paths.length; j++) {
	totalLength += paths[j].getTotalLength();
}


for (var i = 0; i < paths.length; i++) {
	let elementLength = paths[i].getTotalLength();
	let writingTime = (elementLength/totalLength) ;
	let animDelay = 0.5;
	switch (i) {
		case 0: //Barre du B
			paths[i].style.animation = "draw "+ (writingTime * 6) + "s linear forwards " + (animDelay + 0) + "s";
			break;
		case 1: // Boucle du B
			paths[i].style.animation = "draw " + (writingTime * 2) + "s linear forwards " + (animDelay + 0.2) + "s";
			break;
		case 2: //en
			paths[i].style.animation = "draw " + (writingTime * 4) + "s linear forwards " + (animDelay + 0.7) + "s";
			break;
		case 3: //j
			paths[i].style.animation = "draw " + (writingTime * 1) + "s linear forwards " + (animDelay + 1.1) + "s";
			break;
		case 4: //am
			paths[i].style.animation = "draw " + (writingTime * 10) + "s linear forwards " + (animDelay + 1.4) + "s";
			break;
		case 5: // i
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.1) + "s";
			break;
		case 6: //n
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.3) + "s";
			break;
		case 7: // point du i
			paths[i].style.animation = "draw " + (writingTime * 10) + "s linear forwards " + (animDelay + 2.7) + "s";
			break;
		case 8: //G
			paths[i].style.animation = "draw " + (writingTime * 2) + "s linear forwards " + (animDelay + 3) + "s";
			break;
		case 9: //ae
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 3.5) + "s";
			break;
		case 10: //r
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 4.2) + "s";
			break;
		case 11: // pied du t
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 4.5) + "s";
			break;
		case 12: //ne
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 4.8) + "s";
			break;
		case 13: //r
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 5.2) + "s";
			break;
		case 14: //barre du t
			paths[i].style.animation = "draw " + (writingTime * 3) + "s linear forwards " + (animDelay + 5.5) + "s";
			break;

	}
	paths[i].style.strokeDasharray = elementLength;
	paths[i].style.strokeDashoffset = elementLength;
}