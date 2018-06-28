var wins= 0;
var losses= 0;
var yourScoreNumber= 0; // the number that player got from clicking jelly beans
var goalNumber= ""; //computer randomly chosen number (goal)
var img = ["./assets/images/blue.png","./assets/images/silver.png","./assets/images/red.png","./assets/images/yellow.png" ];
function randomGoalNumber () {
    goalNumber= Math.floor(Math.random() * 102) + 19;
} //generatin a randomly chosen number given as target number
function jellyBeansRandomNumber (){
    for (var i = 0; i < img.length; i++) {
			var jellyBeans = $("<img>");
			jellyBeans.attr("src", images[i]);
			jellyBeans.attr("value", (Math.floor(Math.random() * 12) + 1));
			jellyBeans.attr("height", "100");
			$("#jellyBeans").append(jellyBeans);
		}
    } // I attached the images of jelly beans with a random value 
    function HTML () {
		$("#goalNumber").html(goalNumber);
		$("#winsOrLossse").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$("#yourScoreNumber").html(yourScoreNumber);
		$(".jellyBeansImg").empty();
	}

	function Reset () {
		randomGoalNumber ();
		yourScoreNumber = 0;
		HTML ();
		jellyBeansRandomNumber ();
    }
    
    randomGoalNumber();
    HTML();
    jellyBeansRandomNumber();
    //calling functions to run
    function click() {
        yourScoreNumber += parseInt($(this).attr("randomValue"));
        $(".yourScoreNumber"),html(yourScoreNumber); //on click function

        if (yourScoreNumber==goalNumber) {
            wins++;
            Reset();
        }
        else if (yourScoreNumber>goalNumber) {
            losses++;
            Resset();
        }; // win and loss conditions
    };