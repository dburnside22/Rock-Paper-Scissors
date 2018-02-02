(function(){
  function HomeCtrl(User){
    this.user = User;
    this.score = 0;
    this.computerPick = "...";
    this.userPick = "...";
    this.result = "Pick one!";
    this.leaderBoard = User.highScore;


    this.youLost = function(){
      for(var i=0; i<this.leaderBoard.length; i++){
        if(this.score > this.leaderBoard[i].score){
          var name = prompt("Add your name to the Leaderboard!");
          if(name === null){
            name = "Batman";
          }
          this.user.addToLeaderBoard(name, this.score)
          break;
        }
      }
    }

    this.playGame = function(button){
      var randomNumber = Math.floor(Math.random() * 3);
      var theOptions = ["Rock", "Paper", "Scissors"];
      this.userPick = button;
      this.computerPick = theOptions[randomNumber];

      if(this.userPick === this.computerPick){
        this.result = "You Tied"
      }
      else if(this.userPick === "Rock" && this.computerPick === "Paper" || this.userPick === "Paper" && this.computerPick === "Scissors" || this.userPick === "Scissors" && this.computerPick === "Rock"){
        this.result = "You Lost!"
        this.youLost();
        this.score = 0;
      }else if(this.userPick === "Rock" && this.computerPick === "Scissors" || this.userPick === "Paper" && this.computerPick === "Rock" || this.userPick === "Scissors" && this.computerPick === "Paper"){
        this.result = "You Won!"
        this.score++;
      }
    }
  }
  angular
    .module('rockPaperScissors')
    .controller('HomeCtrl', ['User', HomeCtrl]);
})();
