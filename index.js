var paths = document.getElementsByTagName("path");
var totalLength = 0;
let prevElemLength = 0;

for (var j = 0; j < paths.length; j++) {
	totalLength += paths[j].getTotalLength();
}


for (var i = 0; i < paths.length; i++) {
	let elementLength = paths[i].getTotalLength();
	switch (i) {
		case 0: //Barre du B
			paths[i].style.animation = "draw "+ (elementLength*6)/totalLength + "s linear forwards 0.8s";
			break;
		case 1: // Boucle du B
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*2)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 2: //en
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*4)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 3: //j
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1.2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 4: //am
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*10)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+0.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 5: // i
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*8)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1.2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 6: //n
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*8)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 7: // point du i
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*10)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+1.6) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 8: //G
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*2)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 9: //ae
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*6)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 10: //r
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*6)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2.2) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 11: // pied du t
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*6)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2.4) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 12: //ne
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*6)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2.6) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 13: //r
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*6)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+2.8) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;
		case 14: //barre du t
			prevElemLength += paths[i - 1].getTotalLength();
			paths[i].style.animation = "draw " + (elementLength*4)/totalLength + "s linear forwards " + ((prevElemLength*4)/totalLength+3) + "s";
			console.log(`Précédent path[${i - 1}]; length: ${prevElemLength}`)
			break;

	}
	paths[i].style.strokeDasharray = elementLength;
	paths[i].style.strokeDashoffset = elementLength;
	console.log(`path[${i}]; length: ${elementLength}`)
}