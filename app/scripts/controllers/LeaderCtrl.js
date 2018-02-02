(function(){
  function LeaderCtrl(User){
    this.leaderBoard = User.highScore;
  }
  angular
    .module('rockPaperScissors')
    .controller('LeaderCtrl', ['User', LeaderCtrl]);
  })();
