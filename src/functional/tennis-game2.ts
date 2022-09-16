import { TennisGameBase } from "./tennis-game.class";

export class TennisGame2 extends TennisGameBase {
    P1res = "";
    P2res = "";

    getScore() {
        var score = "";
      
        if (this.pointsP1 === this.pointsP2 && this.pointsP1 < 3) {
          if (this.pointsP1 === 0) score = "Love";
          if (this.pointsP1 === 1) score = "Fifteen";
          if (this.pointsP1 === 2) score = "Thirty";
          score += "-All";
        }
        if (this.pointsP1 === this.pointsP2 && this.pointsP1 > 2) score = "Deuce";
      
        if (this.pointsP1 > 0 && this.pointsP2 === 0) {
          if (this.pointsP1 === 1) this.P1res = "Fifteen";
          if (this.pointsP1 === 2) this.P1res = "Thirty";
          if (this.pointsP1 === 3) this.P1res = "Forty";
      
          this.P2res = "Love";
          score = this.P1res + "-" + this.P2res;
        }
        if (this.pointsP2 > 0 && this.pointsP1 === 0) {
          if (this.pointsP2 === 1) this.P2res = "Fifteen";
          if (this.pointsP2 === 2) this.P2res = "Thirty";
          if (this.pointsP2 === 3) this.P2res = "Forty";
      
          this.P1res = "Love";
          score = this.P1res + "-" + this.P2res;
        }
      
        if (this.pointsP1 > this.pointsP2 && this.pointsP1 < 4) {
          if (this.pointsP1 === 2) this.P1res = "Thirty";
          if (this.pointsP1 === 3) this.P1res = "Forty";
          if (this.pointsP2 === 1) this.P2res = "Fifteen";
          if (this.pointsP2 === 2) this.P2res = "Thirty";
          score = this.P1res + "-" + this.P2res;
        }
        if (this.pointsP2 > this.pointsP1 && this.pointsP2 < 4) {
          if (this.pointsP2 === 2) this.P2res = "Thirty";
          if (this.pointsP2 === 3) this.P2res = "Forty";
          if (this.pointsP1 === 1) this.P1res = "Fifteen";
          if (this.pointsP1 === 2) this.P1res = "Thirty";
          score = this.P1res + "-" + this.P2res;
        }
      
        if (this.pointsP1 > this.pointsP2 && this.pointsP2 >= 3) {
          score = "Advantage player1";
        }
      
        if (this.pointsP2 > this.pointsP1 && this.pointsP1 >= 3) {
          score = "Advantage player2";
        }
      
        if (
          this.pointsP1 >= 4 &&
          this.pointsP2 >= 0 &&
          this.pointsP1 - this.pointsP2 >= 2
        ) {
          score = "Win for player1";
        }
        if (
          this.pointsP2 >= 4 &&
          this.pointsP1 >= 0 &&
          this.pointsP2 - this.pointsP1 >= 2
        ) {
          score = "Win for player2";
        }
        return score;
    }
      
    SetP1Score(number: number) {
        for (var i = 0; i < number; i++) {
            this.pointsP1++;
        }
    }
      
    SetP2Score(number: number) {
        for (var i = 0; i < number; i++) {
            this.pointsP2++;
        }
    }
}