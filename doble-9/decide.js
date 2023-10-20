
function myNext() {
    return (position + 1) % 4;
}
function myPrevious() {
    if (position == 0) return 3;
    return position - 1;
}
function myPartner() {
    return (position + 2) % 4;
}

function match(p, heads) {
    if ((p[0] == heads[0] || p[1] == heads[0]) && (p[0] == heads[1] || p[1] == heads[1])) {
        return 2;
    }
    if (p[0] == heads[0] || p[1] == heads[0]) {
        return 0;
    } else if (p[0] == heads[1] || p[1] == heads[1]) {
        return 1;
    }
    return -1;
}
function hallarLinduraCarry(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva) {
    var lindura = new Array(10).fill(0);

    pieces.forEach((piece, i) => {

        lindura[i]= Math.random()*10;

    });

    return lindura;
}
function playAsCarry(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva) {

    let lindura = hallarLinduraCarry(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva);
    let jugarPor = new Array(10).fill(0);
    pieces.forEach((piece, i) => {
        let mat = match(piece, heads);
        if (mat != -1) {

            lindura[i] += 5;

            if (mat == 1) {
                jugarPor[i] = 1;
            }

            if (mat == 0) {
                jugarPor[i] = 0;
            }
        }
    });
    console.log("lindura", lindura);

    let sePuede = Boolean(false);

    let maxxLindura = 5;
    if (heads[0] == -1) {
        maxxLindura = 0;
    }
    let AJUGAR = [];
    let POR;
    pieces.forEach((piece, i) => {
        if (lindura[i] >= maxxLindura) {
            sePuede = true;
            AJUGAR = piece;
            POR = jugarPor[i];
            maxxLindura = lindura[i];
        }
    });

    console.log("piecesAndHeads\n", pieces, heads);
    if (sePuede) {
        return {
            piece: AJUGAR,
            head: POR
        }
    } else {
        return {
            piece: null,
            head: null

        }
    }
}
function playAsSupport(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva) {

    let lindura = hallarLinduraSupport(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva);
    let jugarPor = new Array(10).fill(0);
    pieces.forEach((piece, i) => {
        let mat = match(piece, heads);
        if (mat != -1) {

            lindura[i] += 5;

            if (mat == 1) {
                jugarPor[i] = 1;
            }

            if (mat == 0) {
                jugarPor[i] = 0;
            }
        }
    });
    console.log("lindura", lindura);

    let sePuede = Boolean(false);

    let maxxLindura = 5;
    if (heads[0] == -1) {
        maxxLindura = 0;
    }
    let AJUGAR = [];
    let POR;
    pieces.forEach((piece, i) => {
        if (lindura[i] >= maxxLindura) {
            sePuede = true;
            AJUGAR = piece;
            POR = jugarPor[i];
            maxxLindura = lindura[i];
        }
    });

    console.log("piecesAndHeads\n", pieces, heads);
    if (sePuede) {
        return {
            piece: AJUGAR,
            head: POR
        }
    } else {
        return {
            piece: null,
            head: null

        }
    }
}


export function decideAPiece(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva) {
    if (myMoves.length >= myPartnerMoves.length) {
        //Soy carry
        console.log("soy carry!!");
        return playAsCarry(myPreviousPlayed, lastValOfMyPrevious, myPartnerPlayed, lastValOfMyPartner, pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva);
    } else {
        //Play as support
        return playAsCarry(
          myPreviousPlayed,
          lastValOfMyPrevious,
          myPartnerPlayed,
          lastValOfMyPartner,
          pieces,
          heads,
          myMoves,
          myPartnerMoves,
          myPartnerNoLleva,
          myNextplayerMoves,
          myNextplayerNoLleva,
          myPreviousplayerMoves,
          myPreviousplayerNoLleva
        );
        
        //return playAsSupport(pieces, heads, myMoves, myPartnerMoves, myPartnerNoLleva, myNextplayerMoves, myNextplayerNoLleva, myPreviousplayerMoves, myPreviousplayerNoLleva);
    }


}
