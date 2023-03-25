var paths = document.getElementsByTagName("path");
var totalLength = 0;
let prevElemLength = 0;

for (var j = 0; j < paths.length; j++) {
	totalLength += paths[j].getTotalLength();
}


for (var i = 0; i < paths.length; i++) {
	let elementLength = paths[i].getTotalLength();
	let writingTime = (elementLength/totalLength) + 0;
	let animDelay = 0.5;
	switch (i) {
		case 0: //Barre du B
			paths[i].style.animation = "draw "+ (writingTime * 6) + "s linear forwards " + (animDelay + 0) + "s";
			break;
		default:
			prevElemLength += paths[i - 1].getTotalLength();
			animDelay = ((prevElemLength*4)/totalLength);
			console.info('jepasse');
		case 1: // Boucle du B
			paths[i].style.animation = "draw " + (writingTime * 2) + "s linear forwards " + (animDelay + 0.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 2: //en
			paths[i].style.animation = "draw " + (writingTime * 4) + "s linear forwards " + (animDelay + 1) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 3: //j
			paths[i].style.animation = "draw " + (writingTime * 1) + "s linear forwards " + (animDelay + 1.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 4: //am
			paths[i].style.animation = "draw " + (writingTime * 10) + "s linear forwards " + (animDelay + 1.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 5: // i
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.6) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 6: //n
			paths[i].style.animation = "draw " + (writingTime * 8) + "s linear forwards " + (animDelay + 2.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 7: // point du i
			paths[i].style.animation = "draw " + (writingTime * 10) + "s linear forwards " + (animDelay + 2.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 8: //G
			paths[i].style.animation = "draw " + (writingTime * 2) + "s linear forwards " + (animDelay + 2.6) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 9: //ae
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 2.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 10: //r
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 3) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 11: // pied du t
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 3.2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 12: //ne
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 3.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 13: //r
			paths[i].style.animation = "draw " + (writingTime * 6) + "s linear forwards " + (animDelay + 3.6) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 14: //barre du t
			paths[i].style.animation = "draw " + (writingTime * 4) + "s linear forwards " + (animDelay + 3.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;

	}
	paths[i].style.strokeDasharray = elementLength;
	paths[i].style.strokeDashoffset = elementLength;
	console.log(`path[${i}]; length: ${elementLength}`)
}