const TEAM_LIST = [];

function Division(count) {
	let _conference;
	let _count = count;

	let _teams = [];

	let addTeams = function() {
		let args = Array.from(arguments);
        args.forEach( function(team) {
    		if (_teams.length == _count) {
    			console.log("Error: This division is already full.");
    			return;
    		}
    		team.SetDivision(this);
            if (_conference != null) {
                team.SetConference(_conference);
            }
    		_teams.push(team);
        });
	};

	let setConference = function(conference) {
		_conference = conference;
		_teams.forEach(function(team) {
			team.SetConference(conference);
		});
	}

	return {
		Count: _count,
		AddTeams: addTeams,
		SetConference: setConference,
		Teams: _teams,
	};
}

function Conference(name) {
	let _name = name;

	let _divisions = {
		North: null,
		East: null,
		South: null,
		West: null
	};

	let setDivision = function(region, division) {
		if (_divisions[region] != null) {
			_divisions[region].SetConference(null);
		}
		_divisions[region] = division;
		division.SetConference(this);
		console.log(_divisions[region]);
		console.log(" is now set as " + region + " in " + _name);
	};

	return {
		SetDivision: setDivision,
		Divisions: _divisions,
	};
}

let ScheduleFactory = (function() {
	let buildSchedule = function() {

	}
})();

function Team(city, name, abbr) {
	let _primaryColor, _secondaryColor, _division, _conference;

	let setColors = function(primary, secondary) {
		_primaryColor = primary;
		_secondaryColor = secondary;
	};

	let getPrimary = function() {
		return _primaryColor;
	};

	let getSecondary = function() {
		return _secondaryColor;
	};

	let setConference = function(conference) {
		_conference = conference;
	};

	let setDivision = function(division) {
		_division = division;
	}

	return {

		Name: name,
		City: city,
		Abbr: abbr,

		SetColors: setColors,
		GetPrimary: getPrimary,
		GetSecondary: getSecondary,
		SetConference: setConference,
		SetDivision: setDivision,
	};
};

// Season data

function Season(year) {
	let _year = year;
	let _preseason = [];
	let _weeks = [];
	let _postseason = [];
}

let Seasons = {
	2017: new Season(2017),
};

console.log(Seasons);
// Game data

function Game(home,away) {
	let _home = home;
	let _away = away;

	let _gameData = {
		minutesRemaining: 15,
		secondsRemaining: 00,
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
		down: 1,
		distance: 10,
		ballAt: 25,
		ballSide: 1,
		redZone: false,
		goalline: false,
		toEndzone: function() {
			// TODO: Fix this!!
			if ((this.ballSide == 1 && this.homeBall) || (this.ballSide == -1 && !this.homeBall)) {
				return 50 + (50 - this.ballAt);
			} else {
				return this.ballAt;
			}
		},
	};

	return {
		GameData: _gameData,
	};
}

function BuildLeague() {
    const CONF_AMERICAN = new Conference("American Conference");
    const CONF_NATIONAL = new Conference("National Conference");

    // NFC WEST
    const DIV_NATIONAL_WEST = new Division(4);
	DIV_NATIONAL_WEST.SetConference(CONF_NATIONAL);
	
	const TEAM_SEATTLE = new Team("Seattle","Skyhawks","SEA");
	TEAM_SEATTLE.SetColors("navy","lime");

	const TEAM_ARIZONA = new Team("Arizona","Redbirds","ARZ");
	TEAM_ARIZONA.SetColors("red","gold");

	const TEAM_LOS_ANGELES = new Team("Los Angeles","Goats","LAG");
	TEAM_LOS_ANGELES.SetColors("blue","white");
	
	const TEAM_SAN_FRANSISCO = new Team("San Fransisco","Miners","SF");
	TEAM_SAN_FRANSISCO.SetColors("gold","red");

	DIV_NATIONAL_WEST.AddTeams(TEAM_SEATTLE,TEAM_ARIZONA,TEAM_LOS_ANGELES,TEAM_SAN_FRANSISCO);
	CONF_NATIONAL.SetDivision("West",DIV_NATIONAL_WEST);
	TEAM_LIST.push(TEAM_SEATTLE,TEAM_ARIZONA,TEAM_LOS_ANGELES,TEAM_SAN_FRANSISCO);

    // NFC EAST
    const DIV_NATIONAL_EAST = new Division(4);
	DIV_NATIONAL_EAST.SetConference(CONF_NATIONAL);
	
	const TEAM_PHILADELPHIA = new Team("Philadelphia","Goldenbirds","PHI");
	TEAM_PHILADELPHIA.SetColors("teal","black");

	const TEAM_WASHINGTON = new Team("Washington","Americans","WAS");
	TEAM_WASHINGTON.SetColors("red","white");

	const TEAM_DALLAS = new Team("Dallas","Ranchers","DAL");
	TEAM_DALLAS.SetColors("white","blue");

	const TEAM_NEW_JERSEY = new Team("New Jersey","Cyclops","NJC");
	TEAM_NEW_JERSEY.SetColors("blue","white");

	DIV_NATIONAL_EAST.AddTeams(TEAM_PHILADELPHIA,TEAM_WASHINGTON,TEAM_DALLAS,TEAM_NEW_JERSEY);
	CONF_NATIONAL.SetDivision("East",DIV_NATIONAL_EAST);
	TEAM_LIST.push(TEAM_PHILADELPHIA,TEAM_WASHINGTON,TEAM_DALLAS,TEAM_NEW_JERSEY);

    // NFC NORTH
    const DIV_NATIONAL_NORTH = new Division(4);
	DIV_NATIONAL_NORTH.SetConference(CONF_NATIONAL);
	
	const TEAM_MINNESOTA = new Team("Minnesota","Pillagers","MIN");
	TEAM_MINNESOTA.SetColors("purple","white");

	const TEAM_GREEN_BAY = new Team("Green Bay","Shippers","GB");
	TEAM_GREEN_BAY.SetColors("darkgreen","yellow");

	const TEAM_DETROIT = new Team("Detroit","Pumas","DET");
	TEAM_DETROIT.SetColors("lightblue","darkgrey");

	const TEAM_CHICAGO = new Team("Chicago","Grizzlies","CHI");
	TEAM_CHICAGO.SetColors("darkblue","orange");

	DIV_NATIONAL_NORTH.AddTeams(TEAM_MINNESOTA,TEAM_GREEN_BAY,TEAM_DETROIT,TEAM_CHICAGO);
	CONF_NATIONAL.SetDivision("North",DIV_NATIONAL_NORTH);
	TEAM_LIST.push(TEAM_MINNESOTA,TEAM_GREEN_BAY,TEAM_DETROIT,TEAM_CHICAGO);

    // NFC SOUTH
    const DIV_NATIONAL_SOUTH = new Division(4);
	DIV_NATIONAL_SOUTH.SetConference(CONF_NATIONAL);
	
	const TEAM_CAROLINA = new Team("Carolina","Leopards","CAR");
	TEAM_CAROLINA.SetColors("skyblue","black");

	const TEAM_NEW_ORLEANS = new Team("New Orleans","Spirit","NO");
	TEAM_NEW_ORLEANS.SetColors("gold","black");

	const TEAM_ATLANTA = new Team("Atlanta","Predators","ATL");
	TEAM_ATLANTA.SetColors("red","white");

	const TEAM_TAMPA_BAY = new Team("Tampa Bay","Swashbucklers","TB");
	TEAM_TAMPA_BAY.SetColors("firebrick","tan");
	
	DIV_NATIONAL_SOUTH.AddTeams(TEAM_CAROLINA,TEAM_NEW_ORLEANS,TEAM_ATLANTA,TEAM_TAMPA_BAY);
	CONF_NATIONAL.SetDivision("South",DIV_NATIONAL_SOUTH);
	TEAM_LIST.push(TEAM_CAROLINA,TEAM_NEW_ORLEANS,TEAM_ATLANTA,TEAM_TAMPA_BAY);

    // AFC WEST
	const DIV_AMERICAN_WEST = new Division(4);
	DIV_AMERICAN_WEST.SetConference(CONF_AMERICAN);
	
	const TEAM_KANSAS_CITY = new Team("Kansas City","Chefs","KC");
	TEAM_KANSAS_CITY.SetColors("red","white");

	const TEAM_DENVER = new Team("Denver","Stallions","DEN");
	TEAM_DENVER.SetColors("orange","navy");

	const TEAM_SAN_DIEGO = new Team("San Diego","Lightning","SD");
	TEAM_SAN_DIEGO.SetColors("skyblue","yellow");

	const TEAM_OAKLAND = new Team("Oakland","Destroyers","OAK");
	TEAM_OAKLAND.SetColors("silver","black");
	
	DIV_AMERICAN_WEST.AddTeams(TEAM_KANSAS_CITY,TEAM_DENVER,TEAM_SAN_DIEGO,TEAM_OAKLAND);
	CONF_AMERICAN.SetDivision("West",DIV_AMERICAN_WEST);
	TEAM_LIST.push(TEAM_KANSAS_CITY,TEAM_DENVER,TEAM_SAN_DIEGO,TEAM_OAKLAND);

    // AFC EAST
	const DIV_AMERICAN_EAST = new Division(4);
	DIV_AMERICAN_EAST.SetConference(CONF_AMERICAN);
	
	const TEAM_NEW_ENGLAND = new Team("New England","Generals","NE");
	TEAM_NEW_ENGLAND.SetColors("navy","red");

	const TEAM_MIAMI = new Team("Miami","Swordfish","MIA");
	TEAM_MIAMI.SetColors("turquoise","orange");

	const TEAM_BUFFALO = new Team("Buffalo","Buffalos","BUF");
	TEAM_BUFFALO.SetColors("blue","white");

	const TEAM_NEW_YORK = new Team("New York","Freedom","NYF");
	TEAM_NEW_YORK.SetColors("darkgreen","white");
	
	DIV_AMERICAN_EAST.AddTeams(TEAM_NEW_ENGLAND,TEAM_MIAMI,TEAM_BUFFALO,TEAM_NEW_YORK);
	CONF_AMERICAN.SetDivision("East",DIV_AMERICAN_EAST);
	TEAM_LIST.push(TEAM_NEW_ENGLAND,TEAM_MIAMI,TEAM_BUFFALO,TEAM_NEW_YORK);

    // AFC NORTH
	const DIV_AMERICAN_NORTH = new Division(4);
	DIV_AMERICAN_NORTH.SetConference(CONF_AMERICAN);
	
	const TEAM_PITTSBURGH = new Team("Pittsburgh","Iron","PIT");
	TEAM_PITTSBURGH.SetColors("yellow","black");

	const TEAM_CINCINNATI = new Team("Cincinnati","Tigers","CIN");
	TEAM_CINCINNATI.SetColors("orangered","black");

	const TEAM_BALTIMORE = new Team("Baltimore","Crows","BAL");
	TEAM_BALTIMORE.SetColors("purple","black");

	const TEAM_CLEVELAND = new Team("Cleveland","Champions","CLE");
	TEAM_CLEVELAND.SetColors("brown","orange");
	
	DIV_AMERICAN_NORTH.AddTeams(TEAM_PITTSBURGH,TEAM_CINCINNATI,TEAM_BALTIMORE,TEAM_CLEVELAND);
	CONF_AMERICAN.SetDivision("North",DIV_AMERICAN_NORTH);
	TEAM_LIST.push(TEAM_PITTSBURGH,TEAM_CINCINNATI,TEAM_BALTIMORE,TEAM_CLEVELAND);

    // AFC SOUTH
	const DIV_AMERICAN_SOUTH = new Division(4);
	DIV_AMERICAN_SOUTH.SetConference(CONF_AMERICAN);
	
	const TEAM_TENNESSE = new Team("Tennesse","Tanks","TEN");
	TEAM_TENNESSE.SetColors("skyblue","blue");

	const TEAM_JACKSONVILLE = new Team("Jacksonville","Wildcats","JAX");
	TEAM_JACKSONVILLE.SetColors("black","teal");

	const TEAM_HOUSTON = new Team("Houston","Heroes","HOU");
	TEAM_HOUSTON.SetColors("navy","red");

	const TEAM_INDIANAPOLIS = new Team("Indianapolis","Impalas","IND");
	TEAM_INDIANAPOLIS.SetColors("white","blue");
	
	DIV_AMERICAN_SOUTH.AddTeams(TEAM_TENNESSE,TEAM_JACKSONVILLE,TEAM_HOUSTON,TEAM_INDIANAPOLIS);
	CONF_AMERICAN.SetDivision("South",DIV_AMERICAN_SOUTH);
	TEAM_LIST.push(TEAM_TENNESSE,TEAM_JACKSONVILLE,TEAM_HOUSTON,TEAM_INDIANAPOLIS);

	console.log(JSON.stringify(CONF_NATIONAL));
	console.log(CONF_NATIONAL);
}
