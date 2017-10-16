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

window.onLoad = gameInit();

function draftCreate() {
	var fname = "";
	var lname = "";
	
	for (var i = 0; i < 100; i++) {
		
		fname = firstNames[Math.floor(Math.random() * firstNames.length)];
		lname = lastNames[Math.floor(Math.random() * lastNames.length)];	
		
		var player = { 
			firstName: fname, 
			lastName: lname, 
			age: randomRange(20,25),
		};
		
		draftClass.push(player);
		
	}
	
	
	var draftListElement = document.getElementById("draft-list");

	
	draftClass.forEach(function (player) {
		var row = document.createElement("tr");
		row.className = "roster-row";
		row.innerHTML = "<td>" + player.lastName + "</td><td>" + player.firstName + "</td><td>" + player.age + "</td>";
		draftListElement.appendChild(row);
	});
}

function gameInit() {
	draftCreate();
}

// Returns a whole number between min and max (inclusive)
function randomRange(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}