import { TennisGameBase } from "./tennis-game.class";

export class TennisGame1 extends TennisGameBase {

  getScore() {
    var score = "";
    var tempScore = 0;
    if (this.pointsP1 === this.pointsP2) {
      switch (this.pointsP1) {
        case 0:
          score = "Love-All";
          break;
        case 1:
          score = "Fifteen-All";
          break;
        case 2:
          score = "Thirty-All";
          break;
        default:
          score = "Deuce";
          break;
      }
    } else if (this.pointsP1 >= 4 || this.pointsP2 >= 4) {
      var minusResult = this.pointsP1 - this.pointsP2;
      if (minusResult === 1) score = "Advantage player1";
      else if (minusResult === -1) score = "Advantage player2";
      else if (minusResult >= 2) score = "Win for player1";
      else score = "Win for player2";
    } else {
      for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.pointsP1;
        else {
          score += "-";
          tempScore = this.pointsP2;
        }
        switch (tempScore) {
          case 0:
            score += "Love";
            break;
          case 1:
            score += "Fifteen";
            break;
          case 2:
            score += "Thirty";
            break;
          case 3:
            score += "Forty";
            break;
        }
      }
    }
    return score;
  }
}
