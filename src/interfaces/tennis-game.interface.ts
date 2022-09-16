interface TennisGame {
    player1Name: string;
    player2Name: string;
    pointsP1: number;
    pointsP2: number;

    wonPoint(playerName: string): void;
}
