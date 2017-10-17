var salary = 10

var lastTime = (new Date()).getTime();
var currentTime = 0;
var deltaTime = 0;

var playerIndex = 0;

var draftClass = [];
var firstNames = [
	"Bob", "Bill", "Jeremy", "Kyle", "Andrew", "Jack", "Russell", "J.J.",
    "T.J.", "Philip", "Phil", "Aaron", "Andy", "Carson", "Cam", "Cameron",
    "Drew", "Alex", "Colin", "Jared", "Jeff", "Paul", "Brock", "Marcus",
    "Trevor", "Payton", "DeShaun", "Tom", "Matt", "Matthew", "Eli", "Ben", 
];

var lastNames = [
	"Lynch", "Smith", "Anderson", "Jackson", "Kirkland", "Johnson", "Robertson", "Lane", 
    "Roberts", "Hanson", "Wilson", "Watt", "Miller", "Schneider", "Prater", "Watson", 
    "Brady", "Bradford", "Graham", "Hyde", "Dawson", "Philips", "Rawls", "Collins", 
    "Carson", "Mercilus", "Berry", "Sherman", "Chancellor", "Lockett", "Baldwin",
];

var suffixes = [
    "Jr.", "Sr.", "II", "III", "IV", "V",
];

var colleges = [
    "Washington", "Washington State", "Rice", "Oregon", "Oregon State", "UCLA", "Standford",
    "Nebraska", "Ohio State", "Miami", "Clemson", "Alabama", "LSU", 
];

var positions = {
	QB: { 
		name: "Quarterback", 
		abbr: "QB",
		minWeight: 200,
		maxWeight: 250,
		minHeight: 71,
		maxHeight: 80
	},
	RB: { 
        name: "Running Back", 
        abbr: "RB",
		minWeight: 170,
		maxWeight: 255,
		minHeight: 66,
		maxHeight: 76 
    },
	WR: { 
        name: "Wide Receiver", 
        abbr: "WR",
		minWeight: 164,
		maxWeight: 240,
		minHeight: 67,
		maxHeight: 78 
    },
	TE: { 
        name: "Tight End", 
        abbr: "TE",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80 
    },
	FB: { 
        name: "Fullback", 
        abbr: "FB",
		minWeight: 233,
		maxWeight: 266,
		minHeight: 69,
		maxHeight: 76 
    },
    K: { 
        name: "Kicker", 
        abbr: "K",
		minWeight: 1,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	P: { 
        name: "Punter", 
        abbr: "P",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	CB: { 
        name: "Corner Back", 
        abbr: "CB",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	FS: { 
        name: "Free Safety", 
        abbr: "FS",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
    DE: { 
        name: "Defensive End", 
        abbr: "DE",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	DT: { 
        name: "Defensive Tackle", 
        abbr: "DT",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	MLB: { 
        name: "Middle Linebacker", 
        abbr: "MLB",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
	OLB: { 
        name: "Outside Linebacker", 
        abbr: "OLB",
		minWeight: 220,
		maxWeight: 281,
		minHeight: 72,
		maxHeight: 80  
    },
};

	
	
var gameData = {
	minutesRemaining: 15,
	secondsRemaining: 15,
	quarter: 1,
	homeScore: 0,
	awayScore: 0,
	homeQ1: 0,
	homeQ2: 0,
	homeQ3: 0,
	homeQ4: 0,
	homeOT: 0,
	awayQ1: 0,
	awayQ2: 0,
	awayQ3: 0,
	awayQ4: 0,
	awayOT: 0,
	homeBall: true,
	gameActive: true,
}

function draftCreate() {
	
	var posArray = Object.keys(positions);
	
	for (var i = 0; i < 100; i++) {
		
		var fname = firstNames[Math.floor(Math.random() * firstNames.length)];
		var lname = lastNames[Math.floor(Math.random() * lastNames.length)];	
		
		var pos = posArray[randomRange(0,posArray.length-1)];
        
        var college = colleges[randomRange(0,colleges.length-1)];
        
        var suffix = "";
        
        if (Math.random() > 0.95) {
            suffix = suffixes[randomRange(0,suffixes.length-1)];
        }
		
		var player = { 
            index: playerIndex,
			firstName: fname, 
			lastName: lname, 
            suffix: suffix,
			age: randomRange(20,25),
			position: pos,
			height: randomRange(positions[pos].minHeight,positions[pos].maxHeight),
			weight: randomRange(positions[pos].minWeight,positions[pos].maxWeight),
            college: college,            
            
            combine: {
                forty: randomRangeRaw(4.2,5.7),
                bench: randomRange(10,35),
            }
		};
		
		draftClass.push(player);
        playerIndex++;
		
	}
	
	
	var draftListElement = $("#draft-list");

	
	draftClass.forEach(function (player) {
		var row = $('<tr onclick="playerTooltip(this)" data-index='+player.index+'></tr>');
		
		row.html("<td>" + positions[player.position].abbr + 
		'</td><td style="font-weight: bold">' + player.firstName + " " + player.lastName + " " + player.suffix + '<br><span class="college">' + player.college +
		"</span></td><td>" + player.age + 
		'</td><td>' + inchesToString(player.height) + 
		'</td><td>' + player.weight + " lbs." + 
		'</td><td><input type="button" value="Draft"></td>');
		
		draftListElement.append(row);
	});
}

function playerTooltip(e) {
    
    $('.player-tooltip').remove();
    
    var index = $(e).data("index");
    
    var tooltip = $('<tr class="player-tooltip"></tr>');
    var player = draftClass[index];
    tooltip.html('<td colspan="6"><img src="http://via.placeholder.com/64x64"><ul style="display:inline-block;"><li>40: ' + player.combine.forty.toFixed(2) + '</li><li>Bench: ' + 
                 player.combine.bench + '</li><li>IQ: 15</li></ul></td>');
    $(e).after(tooltip);
}


function gameInit() {
	draftCreate();
	
	gameLoop();
}

function gameLoop() {
	window.requestAnimationFrame(gameLoop);

	currentTime = (new Date()).getTime();
	deltaTime = (currentTime - lastTime) / 1000;
	
	
	var mins = $("#game-mins");
	var secs = $("#game-secs");
	var quarter = $("#game-quarter");
	
	var homeBall = $("#home-ball");
	var awayBall = $("#away-ball");
	var homeScore = $("#home-score");
	var awayScore = $("#away-score");
	
	if (gameData["homeBall"]) {
		homeBall.html("&#127944;");
	} else {
		awayBall.html("&#127944;");
	}
	
	if (gameData["gameActive"]) {
		gameData["secondsRemaining"] -= 12 * deltaTime;		
		
		if (gameData["secondsRemaining"] <= 0) {
							
			if (gameData["minutesRemaining"] <= 0) {
				gameData["gameActive"] = false;
			} else {
				gameData["secondsRemaining"] = 60;
				gameData["minutesRemaining"] -= 1;
			}
		}

	}
	
	mins.html(gameData["minutesRemaining"]);
	
	if (gameData["secondsRemaining"] < 10) {
		secs.html("0" + Math.trunc(gameData["secondsRemaining"]));
	} else {
		secs.html(Math.trunc(gameData["secondsRemaining"]));
	}
	
	quarter.html("Q" + gameData["quarter"]);
	
	homeScore.html(gameData["homeScore"]);	
	awayScore.html(gameData["awayScore"]);	
	
	
	
	lastTime = currentTime;
	
}

window.onLoad = gameInit();

// ========== HELPER FUNCTIONS ========== //

function inchesToString(inches) {
	var feet = Math.floor(inches / 12);
	var remainder = inches % 12;
	return feet + "'" + remainder + '"';
}


// Returns a whole number between min and max (inclusive)
function randomRange(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomRangeRaw(min, max) {
	return Math.random() * (max - min) + min;
}