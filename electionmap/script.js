var makePolitician = function (name, color) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.color = color;
  return politician;
}

//declaring the candidates
var BettyRubble = makePolitician("Betty Rubble", [132, 17, 11]);
var LisaSimpson = makePolitician("Lisa Simpson", [245, 141, 136]);

BettyRubble.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
LisaSimpson.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//updating vote counts
BettyRubble.electionResults[9] = 1;
LisaSimpson.electionResults[9] = 24;
BettyRubble.electionResults[4] = 17;
LisaSimpson.electionResults[4] = 38;
BettyRubble.electionResults[43] = 11;
LisaSimpson.electionResults[43] = 27;

/*console.log(BettyRubble.electionResults);
console.log(LisaSimpson.electionResults);*/


//setting state results
var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (BettyRubble.electionResults[state] > LisaSimpson.electionResults[state]) {
    theStates[state].winner = BettyRubble;
  }
  else if (LisaSimpson.electionResults[state] > BettyRubble.electionResults[state]) {
    theStates[state].winner = LisaSimpson;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.color;
  }
  else
  {
    theStates[state].rgbColor = [11,32,57];
  }

  //set state results in the table
  var stateInfoTable = document.getElementById("stateResults");
  var stateHeader = stateInfoTable.children[0];
  var stateBody = stateInfoTable.children[1];
  var stateName = stateHeader.children[0].children[0];
  var stateAbbrev = stateHeader.children[0].children[1];
  var candidate1Name = stateBody.children[0].children[0];
  var candidate1Results = stateBody.children[0].children[1];
  var candidate2Name = stateBody.children[1].children[0];
  var candidate2Results = stateBody.children[1].children[1];
  var resultsRow = stateBody.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = BettyRubble.name;
  candidate1Results.innerText = BettyRubble.electionResults[state];
  candidate2Name.innerText = LisaSimpson.name;
  candidate2Results.innerText = LisaSimpson.electionResults[state];

  if (theStates[state].winner === null)
  {
    resultsRow.innerText = "TIE";
  }
  else
  {
    resultsRow.innerText = theStates[state].winner.name;
  }


};

//setStateResults();

//adding up all state results
BettyRubble.totalVotes = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
//    console.log(this.totalVotes);
  }
};

BettyRubble.totalVotes();

LisaSimpson.totalVotes = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
//    console.log(this.totalVotes);
  }
};

LisaSimpson.totalVotes();

//announcing winner
if (BettyRubble.totalVotes > LisaSimpson.totalVotes)
{
  winner = "Betty Rubble";
  console.log("Betty Rubble is the winner of the election with a total of " + BettyRubble.totalVotes + " votes!");
}
else if (BettyRubble.totalVotes < LisaSimpson.totalVotes)
{
  winner = "Lisa Simpson"
  console.log("Lisa Simpson is the winner of the election with a total of " + LisaSimpson.totalVotes + " votes!");
}
else
{
  winner = "It's a tie!"
  console.log("There is a draw! Both candidates tied with " + LisaSimpson.totalVotes + " votes!");
}

//Country results
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = BettyRubble.name;
row.children[1].innerText = BettyRubble.totalVotes;
row.children[2].innerText = LisaSimpson.name;
row.children[3].innerText = LisaSimpson.totalVotes;
row.children[5].innerText = winner;
