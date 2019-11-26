var menStillStanding = function(cards) {
    if (cards.length == 0)
        return [11, 11];
    
    var teamA = new Array(11).fill(0);
    var teamB = new Array(11).fill(0);

    cards.forEach(function(item) {
        
        const team = item.charAt(0);
        const number = Number(item.replace(/\D/g,'')) - 1;
        const type = item.slice(-1);
        
        if (team == 'A') {
            if (type == 'R') {
                teamA[number] = 'R';
            }
            if (type == 'Y') {
                if (teamA[number] == 'Y') {
                    teamA[number] = 'R';
                } else if (teamA[number] == 0) {
                    teamA[number] = 'Y';
                }
            }
        }
        if (team == 'B') {
            if (type == 'R') {
                teamB[number] = 'R';
            }
            if (type == 'Y') {
                if (teamB[number] == 'Y') {
                    teamB[number] = 'R';
                } else if (teamB[number] == 0) {
                    teamB[number] = 'Y';
                }
            }
        }
    });

    var menA = 0;
    var menB = 0;
    
    teamA.forEach(item => {if (item != 'R') menA++;});
    teamB.forEach(item => {if (item != 'R') menB++;});

    return [menA, menB];
};