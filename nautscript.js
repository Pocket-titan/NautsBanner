window.onload = function() {
  var startBtn = document.getElementById("startbtn");
  var message = document.getElementById("message");
  var field1 = document.getElementById("value1");
  var field2 = document.getElementById("value2");
  var field3 = document.getElementById("value3");
  var field4 = document.getElementById("value4");
  var field5 = document.getElementById("value5");
  var field6 = document.getElementById("value6");

  message.innerHTML = "Enter teams and click start to begin draft";

  startBtn.onclick = function() {
    var team1 = [];
    var team2 = [];
    //Make sure the field values only get added if they are nonempty
    if (field1.value) {team1.push(field1.value)};
    if (field2.value) {team1.push(field2.value)};
    if (field3.value) {team1.push(field3.value)};
    if (field4.value) {team2.push(field4.value)};
    if (field5.value) {team2.push(field5.value)};
    if (field6.value) {team2.push(field6.value)};

    //No empty teams
    if (team1.length === 0 || team2.length === 0){
      message.innerHTML = "Please enter valid teams";
      return;
    }
    //No cheating
    startBtn.disabled = true;

    var randTeam = Math.random();
    var currTeam;

    if (randTeam < 0.5) {
      currTeam = team1;
    }
    if (randTeam >= 0.5) {
      currTeam = team2;
    }

    var nauts = document.querySelector("#nauts");
    nauts.addEventListener("click", clickNaut, false);

    function clickNaut(e) {
      var currElement = document.getElementById(e.target.id);
      currElement.disabled = true;
      currElement.style.opacity = 0.45;
      if (currTeam === team1) {
        nextTeam = team2;
      }
      else if (currTeam === team2) {
        nextTeam = team1;
      }
      pickNaut(nextTeam);
    }

    pickNaut(currTeam);
    function pickNaut(team) {
      if (team1.length === 0 && team2.length === 0){
        //If the teams are empty disable the buttons
        nauts.removeEventListener("click", clickNaut, false);
        message.innerHTML = "Banning has ended.";
        return;
      }
      currTeam = team;
      var randomPerson =  Math.floor(Math.random() * team.length);
      message.innerHTML = team[randomPerson] + " gets to pick";
      team.splice(randomPerson,1);
    }
  }
}
