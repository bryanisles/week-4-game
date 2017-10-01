// =============================================================================
// GLOBAL VARIABLES-------------------------------------------------------------
// random_number              :A variable used for a randomly generated value
// tempValue                  :A variable used for initializing the "card"
//                             values
// checkNum                   :A variable used in checking duplicates
// myWins											:A variable to provide the amount of wins
// myLosses                   :A varaible to provide the amount of losses
// myBool											:A variable to be used for boolean purposes
// -----------------------------------------------------------------------------
var random_number;
var tempValue;
var checkNum;
var myWins = 0;
var myLosses = 0;
var myBool = false;
// =============================================================================

// =============================================================================
// FUNCTION DEFINITIONS---------------------------------------------------------
// getRandomInt(min, max)     :outputs a random number based on the inclusive
//                             parameters
// initializeGame()           :initializes/reinitializes game when
//                             starting/restarting game
// printRandNum(newNum)       :changes innerHTML value and value attribute to
//                             indicated parameter
// resultantCheck(checker)    :checks if the randomly chosen number is equal to
//                             zero, which increments myWins or if the value is
//                             less than 0, which increments myLosses
// crazyChecker(ckrNo, fin)   :checks if the random_number is divisible by each
// 														 card
// helpReqd()                 :Used in conjuction with crazyChecker() to toggle
//                             the hint function
// -----------------------------------------------------------------------------
var getRandomInt = function(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max) + 1;
	return Math.floor(Math.random()*(max-min)) + min;
}

var initializeGame = function() {
	checkNum = [];
	random_number = getRandomInt(19,120);
	tempValue = getRandomInt(1,12);

	for(var i = 0; i < 4; i++){
		while(checkNum.indexOf(tempValue) > -1) {
			tempValue = getRandomInt(1,12);
		}
		checkNum.push(tempValue);
	}

	for(var i = 0; i < checkNum.length; i++) {
		$("#btn-0" + (i+1)).attr("value", checkNum[i]);
	}

	if(myBool == true) {
		crazyChecker(checkNum, random_number);
	}

	$("#randNumber").html(random_number);
	$("#randNumber").attr("value",random_number);
	$("#myWins").html(myWins);
	$("#myLosses").html(myLosses);
}

var printRandNum = function(newNum) {
	$("#randNumber").html(newNum);
	$("#randNumber").attr("value",newNum);
}

var resultantCheck = function(checker) {
	if(checker == 0){
		myWins++;
		if(myBool === true) {
			alert("You've won, but not on your own");
		}
		else{
			alert("You've surpassed all odds and won!");
		}
		initializeGame();
	}
	else if(checker < 0) {
		myLosses++;
		if(myBool === true) {
			alert("You've lossed...even with help (I feel bad for you son...)")
		}
		else{
			alert("Keep your head held high, at least you didn't cheat")
		}
		initializeGame();
	}
}

var crazyChecker = function(ckrNo,fin) {
	var tempArray = [];
	for (var i = 0; i < ckrNo.length; i++) {
		tempArray[i] = fin % ckrNo[i];
		if(tempArray[i] == 0) {
			$("#btn-0" + (i+1)).addClass("blue-FTW");
		} else {
			$("#btn-0" + (i+1)).removeClass("blue-FTW");
		}
	}
}

var helpReqd = function() {
	myBool = !myBool;
	if(myBool === true) {
		$("#enabler").html("(enabled)");
		crazyChecker(checkNum,random_number);
	}
	else {
		$("#enabler").html("(disabled)");
		$("h1 i").removeClass("blue-FTW");
	}

}
// =============================================================================

$(document).ready(function(){
	// ===========================================================================
	// ON-CLICK (BUTTON) EVENTS---------------------------------------------------
	// [#btn-01/4 onclick event]  :when a "card" is clicked the value of the card
	//                             is subtracted from the randomly generated value
	// ---------------------------------------------------------------------------
	$("#btn-01").on("click",function() {
		var tempOverall = parseInt($("#randNumber").attr("value"));
		var mySubtractor = parseInt($("#btn-01").attr("value"));
		random_number = tempOverall - mySubtractor;
		printRandNum(random_number);
		resultantCheck(random_number);
		if(myBool == true){
			crazyChecker(checkNum, random_number);
		}
		else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-02").on("click",function() {
		var tempOverall = parseInt($("#randNumber").attr("value"));
		var mySubtractor = parseInt($("#btn-02").attr("value"));
		random_number = tempOverall - mySubtractor;
		printRandNum(random_number);
		resultantCheck(random_number);
		if(myBool === true){
			crazyChecker(checkNum, random_number);
		}
		else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-03").on("click",function() {
		var tempOverall = parseInt($("#randNumber").attr("value"));
		var mySubtractor = parseInt($("#btn-03").attr("value"));
		random_number = tempOverall - mySubtractor;
		printRandNum(random_number);
		resultantCheck(random_number);
		if(myBool === true){
			crazyChecker(checkNum, random_number);
		}
		else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-04").on("click",function() {
		var tempOverall = parseInt($("#randNumber").attr("value"));
		var mySubtractor = parseInt($("#btn-04").attr("value"));
		random_number = tempOverall - mySubtractor;
		printRandNum(random_number);
		resultantCheck(random_number);
		if(myBool === true){
			crazyChecker(checkNum, random_number);
		}
		else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	// ===========================================================================

	// ===========================================================================
	// DOCUMENT READY INTIALIZATION-----------------------------------------------
	// [description]              :initializes the game when document is ready
	initializeGame();
	// ===========================================================================
})
