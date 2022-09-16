import { TennisGameBase } from "./tennis-game.class";

export class TennisGame3 extends TennisGameBase {
    getScore(): string {
        var s: string;
        if (this.pointsP1 < 4 && this.pointsP2 < 4 && this.pointsP1 + this.pointsP2 < 6) {
          var p = ["Love", "Fifteen", "Thirty", "Forty"];
          s = p[this.pointsP1];
          return this.pointsP1 == this.pointsP2 ? s + "-All" : s + "-" + p[this.pointsP2];
        } else {
          if (this.pointsP1 == this.pointsP2) return "Deuce";
          s = this.pointsP1 > this.pointsP2 ? this.player1Name : this.player2Name;
          return (this.pointsP1 - this.pointsP2) * (this.pointsP1 - this.pointsP2) == 1
            ? "Advantage " + s
            : "Win for " + s;
        }
    }
}
