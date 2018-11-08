var cl = console.log;

var plateau = new Array();
var initGame = function initGame(){
	
	for (var i = 0; i < 20; i++) {
		
		var lignehtml = document.createElement("div");
		lignehtml.setAttribute("class", "ligne");
		var ligne = [];
		
		for (var j = 0; j < 30; j++) {
			var cellhtml = document.createElement("div");
			cellhtml.setAttribute('class', 'cellule');
			var cell = {
				element:cellhtml
			};
			ligne.push(cell);
			lignehtml.appendChild(cellhtml);
		}
		document.getElementById('plateau').appendChild(lignehtml);
		plateau.push(ligne);
	}
	cl(plateau)
}


window.onload = initGame;


$( document ).ready(function() {



});/////////////////////////////////////////////////////
