function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: [
                "Black", 
                "White"
            ],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assist: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assist: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assist: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assist: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assist: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [
                "Turquoise", 
                "Purple"
            ],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assist: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assist: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assist: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assist: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assist: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

let game = gameObject();

function homeTeamName() {
    return gameObject()['home']['teamName'];
}

function numPointsScored(playerName) {
    // let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for(let teamKey in teamObj) {
            if(teamKey === 'players'){
                return teamObj[teamKey][playerName].points;
            }
        }
    }
    return 0;
}

function shoeSize(playerName) {
    // let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for(let teamKey in teamObj) {
            if(teamKey === 'players'){
                return teamObj[teamKey][playerName].shoe;
            }
        }
    }
    return 0;
}

function teamColors(teamName) {
    // let game = gameObject();
    
    for(let gameKey in game) {
        if(game.hasOwnProperty(gameKey)) {
            let teamObj = game[gameKey];
            for(let team in teamObj) {
                if(teamObj.hasOwnProperty(team)) {
                    if(teamObj[team] === teamName) {
                        return teamObj.colors;
                    }
                }
            }
        }
    }

    return [];
}

function teamNames() {
    let teams = [];
    for(let gameKey in game) {
        if(game.hasOwnProperty(gameKey)) {
            teams.push(game[gameKey].teamName);
        }
    }

    return teams;
}

function playerNumbers(teamName) {
    // let game = gameObject();
    let numbers = [];
    for (let gameKey in game) {
        if(game.hasOwnProperty(gameKey)) {
            if(game[gameKey].teamName === teamName) {
                let teamObj = game[gameKey];
                // console.log(teamsObj.players);
                for(let teamObjKey in teamObj) {
                    if(teamObj.hasOwnProperty(teamObjKey)) {
                        if(teamObjKey === 'players') {
                            Object.keys(teamObj[teamObjKey]).find(key =>{ 
                                let number = teamObj[teamObjKey][key].number;
                                numbers.push(number);
                            });
                        }
                    }
                }
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    let stats = {};
    for(let gameKey in game) {
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            // console.log(teamKey);
            if(teamObj[teamKey][playerName]) {
                stats = Object.assign(stats, teamObj[teamKey][playerName]);
            }
        }
    }
    return stats;
}

function bigShoeRebounds() {
    let currentBigShoe = 0;
    for(let gameKey in game) {
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            if(teamKey === 'players') {
                let playersObj = teamObj[teamKey];
                
                for(playerKey in playersObj) {
                    let shoe = playersObj[playerKey].shoe;
                    if(shoe > currentBigShoe) {
                        currentBigShoe = shoe;
                    }
                }
            }
        }
    }
    return currentBigShoe;
}

function mostPointsScored() {
    let highestScore = 0;
    for(let gameKey in game) {
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            if(teamKey === 'players') {
                let playersObj = teamObj[teamKey];
                
                for(playerKey in playersObj) {
                    // console.log(playersObj[playerKey]);
                    let points = playersObj[playerKey].points;
                    if(points > highestScore) {
                        highestScore = points;
                    }
                }
            }
        }
    }
    return highestScore;
}

function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for(let gameKey in game) {
        let teamObj = game[gameKey];

        for(let teamKey in teamObj) {
            if(teamObj[teamKey] === game.home.teamName) {
                // home team
                let homeTeamPlayers = teamObj.players;
                homeTeamPoints = calculatePoints(homeTeamPlayers);
            } 
            else if(teamObj[teamKey] === game.away.teamName){
                // away team
                let awayTeamPlayers = teamObj.players;
                awayTeamPoints = calculatePoints(awayTeamPlayers);
            }
        }
    }
    
    return (homeTeamPoints > awayTeamPoints) ? homeTeamPoints : awayTeamPoints;
}

function calculatePoints(players) {
    let accumPoints = 0;
    for(let player in players) {
        accumPoints += players[player].points;
    }
    return accumPoints;
}

function playerWithLongestName() {
    let longestName = "";
    let countLetters = 0;
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let allPlayers = teamObj.players;

        for(let player in allPlayers) {
            let currentCountLetters = player.length - 1;

            if(currentCountLetters > countLetters) {
                countLetters = currentCountLetters;
                longestName = player;
            }
        }
    }
    return longestName;
}



function doesLongNameStealATon() {
    const playerLongestName = playerWithLongestName();
    let currentPlayerSteals = 0;
    let stealsPlayerLongestName = 0;
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let allPlayers = teamObj.players;
        
        if(allPlayers[playerLongestName]) {
            stealsPlayerLongestName = allPlayers[playerLongestName].steals;
        }
        for(let player in allPlayers) {
            if(player !== playerLongestName) {
                if(currentPlayerSteals < allPlayers[player].steals) {
                    currentPlayerSteals = allPlayers[player].steals;
                }
            }
        }
    }
 
    return stealsPlayerLongestName > currentPlayerSteals;
}

console.log(doesLongNameStealATon());
// console.log(bigShoeRebounds());