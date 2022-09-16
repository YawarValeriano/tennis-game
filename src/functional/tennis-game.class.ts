export class TennisGameBase implements TennisGame {
    player1Name: string;
    player2Name: string;
    pointsP1: number;
    pointsP2: number;
    wonPoint(playerName: string) {
        if (playerName === "player1") this.pointsP1 += 1;
        else this.pointsP2 += 1;
    }
}