// =============================================================================
// GLOBAL VARIABLES-------------------------------------------------------------
// random_number              :A variable used for a randomly generated value
// tempValue                  :A variable used for initializing the "card"
//                             values
// checkNum                   :A variable used in checking duplicates
// myWins                     :A variable to provide the amount of wins
// myLosses                   :A varaible to provide the amount of losses
// myBool                     :A variable to be used for boolean purposes
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
// printRandNum()             :prints all necessary info to document
// resultantCheck(checker)    :checks if the randomly chosen number is equal to
//                             zero, which increments myWins or if the value is
//                             less than 0, which increments myLosses
// rmdrChkr()                 :checks if the random_number is divisible by each
//                             card
// helpReqd()                 :Used in conjuction with rmdrChkr() to toggle the
//                             hint function
// theSubtractor(pusher)      :subtracts the value attached to the respective
//                             element, but requires a global variable within
//                             the click event which references the selected
//                             element's id attribute
// impossibleWin()            :(working) function used in the initializeGame()
//                             function to determine if there is a impossible
//                             win scenario.
// -----------------------------------------------------------------------------
var getRandomInt = function(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max) + 1;
	return Math.floor(Math.random()*(max-min)) + min;
}

var initializeGame = function() {
	random_number = getRandomInt(19,120);
	tempValue = getRandomInt(1,12);
	var j = 0;
	var k = 0;
	// never thought I would ever nest a do/while, a for, and a while loop
	do {
		k++;
		checkNum = [];
		for (var i = 0; i < 4; i++) {
			while (checkNum.indexOf(tempValue) > -1) {
				j++;
				tempValue = getRandomInt(1,12);
				if (j == 128) {
					break;
				}
			}
			checkNum.push(tempValue);
		}
		if (k == 128) {
			break;
		}
	} while (impossibleWin() === 1);
	for (var i = 0; i < checkNum.length; i++) {
		$("#btn-0" + (i+1)).attr("value", checkNum[i]);
	}
	if (myBool == true) {
		rmdrChkr();
	}
	printRandNum();
}

var printRandNum = function() {
	$("#randNumber").html(random_number);
	$("#randNumber").attr("value",random_number);
	$("#myWins").html(myWins);
	$("#myLosses").html(myLosses);
}

var resultantCheck = function(checker) {
	if (checker == 0) {
		myWins++;
		if (myBool === true) {
			alert("You've won, but not on your own");
		}	else {
			alert("You've surpassed all odds and won!");
		}
		initializeGame();
	} else if (checker < 0) {
		myLosses++;
		if (myBool === true) {
			alert("You've lossed...even with help (I feel bad for you son...)")
		}	else {
			alert("Keep your head held high, at least you didn't cheat")
		}
		initializeGame();
	}
}

var rmdrChkr = function() {
	for (var i = 0; i < checkNum.length; i++) {
		if (random_number % checkNum[i] == 0) {
			$("#btn-0" + (i+1)).addClass("blue-FTW");
		}	else {
			$("#btn-0" + (i+1)).removeClass("blue-FTW");
		}
	}
}

var helpReqd = function() {
	myBool = !myBool;
	if (myBool === true) {
		$("#enabler").html("(enabled)");
		rmdrChkr();
	}	else {
		$("#enabler").html("(disabled)");
		$("h1 i").removeClass("blue-FTW");
	}
}

var theSubtractor = function(pusher) {
	var tempOverall = parseInt($("#randNumber").attr("value"));
	var mySubtractor = parseInt($("#" + pusher.id).attr("value"));
	random_number = tempOverall - mySubtractor;
}

// (working) Logic may not be complete and may require additional review to
//   determine if current algorithm covers all impossible cases
var impossibleWin = function() {
	var randNoOddEven = random_number % 2;
	for (var i = 0; i < checkNum.length; i++) {
		if (checkNum[i] % 2 === randNoOddEven || checkNum[i] === 1) {
			return 0; // Winning is possible
			break;
		}
	}
	return 1; // Winning is impossible
}
// =============================================================================

// =============================================================================
// WHERE THE MAGIC HAPPENS------------------------------------------------------
// [description]                :document ready function that consists of all
//                               on-click events
// -----------------------------------------------------------------------------
$(document).ready(function(){
	// ===========================================================================
	// ON-CLICK (BUTTON) EVENTS---------------------------------------------------
	// [#btn-01/4 onclick event]  :when a "card" is clicked the value of the card
	//                             is subtracted from the randomly generated value
	// ---------------------------------------------------------------------------
	$("#btn-01").on("click",function() {
		var pushThis = this;
		theSubtractor(pushThis);
		printRandNum();
		resultantCheck(random_number);
		if (myBool === true) {
			rmdrChkr();
		} else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-02").on("click",function() {
		var pushThis = this;
		theSubtractor(pushThis);
		printRandNum();
		resultantCheck(random_number);
		if (myBool === true) {
			rmdrChkr();
		}	else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-03").on("click",function() {
		var pushThis = this;
		theSubtractor(pushThis);
		printRandNum();
		resultantCheck(random_number);
		if (myBool === true) {
			rmdrChkr();
		}	else {
			$("h1 i").removeClass("blue-FTW");
		}
	});
	$("#btn-04").on("click",function() {
		var pushThis = this;
		theSubtractor(pushThis);
		printRandNum();
		resultantCheck(random_number);
		if (myBool === true) {
			rmdrChkr();
		}	else {
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
// =============================================================================
