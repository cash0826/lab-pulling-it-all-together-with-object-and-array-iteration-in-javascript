function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//takes a player’s name and returns their points scored.
function numPointsScored(playerName) {
    const game = gameObject ()
    for (const teamKey in game) {
        const team = game[teamKey];
        if (playerName in team.players) {
            return team.players[playerName].points
        };
    };
};

//takes a player’s name and returns their shoe size.
function shoeSize(playerName) {
    const game = gameObject ();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (playerName in team.players) {
            return team.players[playerName].shoe
        };
    };
};

// Takes a team name as input and returns an array of the team’s colors.
function teamColors(teamName) {
    const game = gameObject ();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        };
    };
};

// Returns an array of both team names
function teamNames() {
    const game = gameObject ();
    const names = [];
    for (const teamKey in game) {
        const team = game[teamKey];
        names.push(team.teamName);
    }
    return names;
};


// Takes a team name as input and returns an array of all players’ jersey numbers on that team
function playerNumbers(teamName) {
    const game = gameObject ();
    const jerseyNumbers = [];
    for (const teamKey in game) {
        const team = game[teamKey]
        if (team.teamName === teamName)
            for (const player in team.players) {
                jerseyNumbers.push(team.players[player].number);
            };
    };
    return jerseyNumbers;
};

//Takes a player’s name as input and returns an object with all stats for that player
function playerStats(playerName) {
    const game = gameObject ();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (playerName in team.players) {
            return team.players[playerName];
            };
    };
};

//Returns the number of rebounds for the player with the largest shoe size.
function bigShoeRebounds () {
    const game = gameObject ();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                console.log(player.shoe)
                rebounds = player.rebounds;
                console.log(rebounds)
            };
        };
    };
    return rebounds;
};
