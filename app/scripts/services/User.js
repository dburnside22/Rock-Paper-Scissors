(function() {
  function User($firebaseArray){
  var User = {};
  var ref = firebase.database().ref().child("highScore").orderByChild("order");
  var highScore = $firebaseArray(ref);

  User.highScore = highScore;



  User.addToLeaderBoard = function(name, score){
    User.highScore.$add({
      name: name,
      score: score,
      order: 999999-score
    });
  }

  return User;
}

  angular
    .module("rockPaperScissors")
    .factory('User', ['$firebaseArray', User]);
})();
