var salary = 10

var draftClass = [];
var firstNames = [
	"Bob",
	"Bill",
	"Jeremy",
	"Kyle",
	"Andrew",
	"Jack"
];

var lastNames = [
	"Lynch",
	"Smith",
	"Anderson",
	"Jackson",
	"Kirkland",
	"Johnson",
	"Robertson"
];

var positions = {
	QB: { 
		name: "Quarterback", 
		abbr: "QB",
		minWeight: 124,
		maxWeight: 215,
		minHeight: 50,
		maxHeight: 80
	},
	RB: { name: "Running Back", abbr: "RB" },
	WR: { name: "Wide Receiver", abbr: "WR" },
	TE: { name: "Tight End", abbr: "TE" },
	FB: { name: "Fullback", abbr: "FB" },
};

window.onLoad = gameInit();

function draftCreate() {
	
	var posArray = Object.keys(positions);
	
	for (var i = 0; i < 100; i++) {
		
		var fname = firstNames[Math.floor(Math.random() * firstNames.length)];
		var lname = lastNames[Math.floor(Math.random() * lastNames.length)];	
		
		var pos = posArray[randomRange(0,posArray.length-1)];
		
		var player = { 
			firstName: fname, 
			lastName: lname, 
			age: randomRange(20,25),
			position: pos,
		};
		
		draftClass.push(player);
		
	}
	
	
	var draftListElement = document.getElementById("draft-list");

	
	draftClass.forEach(function (player) {
		var row = document.createElement("tr");
		row.innerHTML = "<td>" + player.lastName + "</td><td>" + player.firstName + "</td><td>" + player.age + "</td><td>" + positions[player.position].abbr + '</td><input type="button" value="Draft">';
		draftListElement.appendChild(row);
	});
}

function gameInit() {
	draftCreate();
}

// ========== HELPER FUNCTIONS ========== //

function inchesToString(inches) {
	
}


// Returns a whole number between min and max (inclusive)
function randomRange(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}