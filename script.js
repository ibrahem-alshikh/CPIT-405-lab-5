const data = [
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers (PHI)",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "New York Knicks (NYK)",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder (OKC)",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "Philadelphia 76ers (PHI)",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers (CAVS)",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks (DAL)",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets (DEN)",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves (MIN)",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns (PHX)",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "Orlando Magic (ORL)",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns (PHX)",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics (BOS)",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "Milwaukee Bucks (MIL)",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "Boston Celtics (BOS)",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "Miami Heat (MIA)",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks (DAL)",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "Indiana Pacers (IND)",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers (LAC)",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "Denver Nuggets (DEN)",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "Los Angeles Clippers (LAC)",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves (MIN)",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "Orlando Magic (ORL)",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "Oklahoma City Thunder (OKC)",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "Indiana Pacers (IND)",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "New York Knicks (NYK)",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "New Orleans Pelicans (NOP)",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "Milwaukee Bucks (MIL)",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "Indiana Pacers (IND)",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "Los Angeles Lakers (LAL)",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "Miami Heat (MIA)",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "Boston Celtics (BOS)",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "Milwaukee Bucks (MIL)",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns (PHX)",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "Los Angeles Clippers (LAC)",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "Cleveland Cavaliers (CAVS)",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "Denver Nuggets (DEN)",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "Cleveland Cavaliers (CAVS)",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "Oklahoma City Thunder (OKC)",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "Indiana Pacers (IND)",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "Orlando Magic (ORL)",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "New York Knicks (NYK)",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "New Orleans Pelicans (NOP)",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "Denver Nuggets (DEN)",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "New Orleans Pelicans (NOP)",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "Los Angeles Lakers (LAL)",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "Philadelphia 76ers (PHI)",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "Boston Celtics (BOS)",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];

// ----- Get the elements from the page -----
var searchBox = document.getElementById("search");
var teamDropdown = document.getElementById("team-filter");
var darkButton = document.getElementById("dark-mode-toggle");
var tableBody = document.getElementById("player-rows");
var headers = document.querySelectorAll("#player-stats th");

// These two variables keep track of the sorting.
var sortColumn = "";
var ascending = true;


// ----- Small helper: pull "PHI" out of "Philadelphia 76ers (PHI)" -----
function getTeamAbbreviation(teamName) {
    var open = teamName.indexOf("(");
    var close = teamName.indexOf(")");
    if (open !== -1 && close !== -1) {
        return teamName.substring(open + 1, close);
    }
    return teamName;
}


// ----- Fill the team <select> with each team abbreviation once -----
function fillTeamDropdown() {
    var teams = [];

    // Loop over every player, get their team abbreviation, add it once.
    for (var i = 0; i < data.length; i++) {
        var abbr = getTeamAbbreviation(data[i].team);
        var alreadyThere = false;

        for (var j = 0; j < teams.length; j++) {
            if (teams[j] === abbr) {
                alreadyThere = true;
            }
        }

        if (alreadyThere === false) {
            teams.push(abbr);
        }
    }

    // Put them in alphabetical order.
    teams.sort();

    // Add an <option> for each team.
    for (var k = 0; k < teams.length; k++) {
        var option = document.createElement("option");
        option.value = teams[k];
        option.textContent = teams[k];
        teamDropdown.appendChild(option);
    }
}


// ----- Build the table rows from a list of players -----
function showPlayers(playerList) {
    // Clear the table first.
    tableBody.innerHTML = "";

    // Go through the list one player at a time.
    for (var i = 0; i < playerList.length; i++) {
        var player = playerList[i];

        // Create a row.
        var row = document.createElement("tr");

        // Create the 5 cells.
        var nameCell = document.createElement("td");
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        var teamCell = document.createElement("td");
        teamCell.textContent = getTeamAbbreviation(player.team);
        row.appendChild(teamCell);

        var pointsCell = document.createElement("td");
        pointsCell.textContent = player.points;
        row.appendChild(pointsCell);

        var reboundsCell = document.createElement("td");
        reboundsCell.textContent = player.rebounds;
        row.appendChild(reboundsCell);

        var assistsCell = document.createElement("td");
        assistsCell.textContent = player.assists;
        row.appendChild(assistsCell);

        // Highlight the row while the mouse is over it.
        row.onmouseover = function () {
            this.classList.add("highlight");
        };
        row.onmouseout = function () {
            this.classList.remove("highlight");
        };

        // Put the row in the table.
        tableBody.appendChild(row);
    }
}


// ----- Sort a list of players by a column name -----
function sortPlayers(playerList, column, isAscending) {
    playerList.sort(function (a, b) {
        var valueA;
        var valueB;

        // Pick what we compare based on which column was clicked.
        if (column === "name") {
            valueA = a.name.toLowerCase();
            valueB = b.name.toLowerCase();
        } else if (column === "team") {
            valueA = getTeamAbbreviation(a.team).toLowerCase();
            valueB = getTeamAbbreviation(b.team).toLowerCase();
        } else {
            valueA = a[column];
            valueB = b[column];
        }

        if (valueA < valueB) {
            if (isAscending === true) {
                return -1;
            } else {
                return 1;
            }
        } else if (valueA > valueB) {
            if (isAscending === true) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    });
}


// ----- Filter the data using the search box and the team dropdown -----
function filterPlayers() {
    var searchText = searchBox.value.toLowerCase();
    var chosenTeam = teamDropdown.value;

    var result = [];

    // Go through every player and keep the ones that match.
    for (var i = 0; i < data.length; i++) {
        var player = data[i];
        var playerTeam = getTeamAbbreviation(player.team);

        var nameMatches = player.name.toLowerCase().indexOf(searchText) !== -1;
        var teamMatches = (chosenTeam === "all") || (playerTeam === chosenTeam);

        if (nameMatches === true && teamMatches === true) {
            result.push(player);
        }
    }

    // If a column has been clicked, sort the filtered list too.
    if (sortColumn !== "") {
        sortPlayers(result, sortColumn, ascending);
    }

    // Show the result in the table.
    showPlayers(result);
}


// ----- Event: typing in the search box -----
searchBox.oninput = function () {
    filterPlayers();
};


// ----- Event: changing the team dropdown -----
teamDropdown.onchange = function () {
    filterPlayers();
};


// ----- Event: clicking the dark mode button -----
darkButton.onclick = function () {
    document.body.classList.toggle("dark-mode");
};


// ----- Event: clicking a table header to sort -----
for (var i = 0; i < headers.length; i++) {
    headers[i].onclick = function () {
        var clickedColumn = this.getAttribute("data-key");

        // If clicking the same column, flip the direction.
        if (sortColumn === clickedColumn) {
            ascending = !ascending;
        } else {
            sortColumn = clickedColumn;
            ascending = true;
        }

        // Redraw the table with the new sort.
        filterPlayers();
    };
}


// ----- Start the page -----
fillTeamDropdown();
filterPlayers();