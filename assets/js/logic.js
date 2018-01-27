var itemPositionx =0;
var itemPositiony =0;

// //********* placeholder canvas animations *********
// function drawShape() {
// 	var myCanvas = document.getElementById("canvas");
// 	var ctx = myCanvas.getContext("2d");
// 	ctx.fillRect(20, 20, 100, 100);
// 	ctx.strokeRect(10,10,120,120);
// 	ctx.clearRect(45,45,50,50);
// }
// //********* global variables *********

// var health = 100;
// var damage = -10;
// var attack = health + damage;

// //********* Attack/Threat (TYPES) *********
var weaponType = ["grenade", "tnt", "nuke", "bullet", "missile", "gun"];

var threatType = {
	natural: {
		0: "tsunami", 
		1: "tornado", 
		2: "earthquake", 
		3: "volcano", 
		4: "hurricane"
	},
	space: {
		0: "asteroid", 
		1: "aliens", 
		2: "meteor shower", 
		3: "solar flare", 
		4: "atomic radiation"
		// 5: "laser satellite", 
		// 6: "wormhole", 
		// 7: "time dialation"
	},
	plague: {
		0: "famine", 
		1: "disease", 
		2: "locusts", 
		3: "parasites",
		4: "zombies"
	}
};






// var threatObjectKeys = Object.keys(ThreatType);
// // var randomDrop = $(#gridMap) --> Math.floor((Math.random() * 100) + 1);
// var randomWeapon = weaponType[Math.floor(Math.random() * weaponType.length)];

// var randomThreatIndex = Math.floor(Math.random() * threatObjectKeys.length);

// var randomThreat = ThreatType[threatObjectKeys[randomThreatIndex]];

// var randomT = ThreatType[Math.floor(Math.random() * ThreatType.length)];


// //********* console logic tests *********
// console.log(attack);
// console.log(weaponType);
// console.log(ThreatType);

// console.log(randomWeapon);
// console.log(threatObjectKeys);
// console.log(randomThreatIndex);
// console.log(randomThreat);
// // console.log(randomDrop);
// console.log(randomT);

// //********* User Attacks Function (spawns weapon constructors) *********
// var UserAttacks = function(){
// var AttackArray = [];
// var WeaponSprites = function(type, attack, active, cycle, placement){		
// 			this.type = type;			
// 			this.attack = attack; //(damage = % to health)
// 			this.active = active; //false	
// 			this.cycle = cycle; //cycle of event
// 			this.placement = placement; //random Math --> location on grid (canvas)
// 		}
// 		for(var i = 0; i < 2; i++){
// var WeaponCount = i;
// 		WeaponCount = new WeaponSprites(weaponType , (damage += 10), false, 4, randomDrop);
// 		AttackArray.push(WeaponCount);
// 	}

// 		console.log(AttackArray);
// };

// //********* Threat Function (spawns threat constructors) *********
// var AllOtherThreats = function(){
// var ThreatArray = [];
// var ThreatSprites = function(type, attack, active, cycle, placement){		
// 			this.type = type;			
// 			this.attack = attack; //(damage = % to health)
// 			this.active = active; //false	
// 			this.cycle = cycle; //cycle of event
// 			this.placement = placement; //random Math --> location on grid (canvas)
// 		}
// 		for(var i = 0; i < 2; i++){
// var ThreatCount = i;
// 		ThreatCount = new ThreatSprites(randomThreat, damage, false, 4, randomDrop);
// 		ThreatArray.push(ThreatCount);
// 	}

// 		console.log(ThreatArray);
// };

// //********* JQUERY (ready function) *********
// $(document).ready(function(){
// 	drawShape();


// //********* spawn method *********
// $("#spawn").on("click", function(){
// 	UserAttacks();
// 	AllOtherThreats();

// 	});
// });


// //METHODS:
// //********* heal method *********



var theUser = document.querySelector("#mainPlayer");
var container = document.querySelector("#planet1");
var planet2 = document.querySelector("#planet2");
var planet3 = document.querySelector("#planet3");
var planet4 = document.querySelector("#planet4");
var tester =  document.querySelector("#tester");
tester.addEventListener("click", animatePlanet, false);
container.addEventListener("click", getClickPosition, false);
bombDeployer.addEventListener("click", deployBombs, false);

function deployBombs (e)
{	
	$("#planet1").append('<div class="bomb" style="transform: translate3d('+itemPositionx+'px,' +itemPositiony+'px, 0px);" ></div>');
}

function animatePlanet (e){
$("#planet2").addClass('planet2');
$("#planet3").addClass('planet3');
$("#planet4").addClass('planet4');
console.log('click here');
var value4 = "width: 15vw; height: 15vw; margin-top: -12.5vw; margin-left: -12.5vw; border: 15px rgb(255,10,45) solid;background-color:green; left:20%; top:20%; z-index: -6;";
planet4.setAttribute("style",value4);
var value3 = "width: 20vw; height: 20vw; margin-top: -12.5vw; margin-left: -12.5vw; border: 15px rgb(255,10,45) solid;background-color:green; left:25%; top:25%; z-index: -5;";
planet3.setAttribute("style",value3);
var value2 = "width: 25vw; height: 25vw; margin-top: -12.5vw; margin-left: -12.5vw; border: 15px rgb(255,10,45) solid;background-color:green; left:30%; top:30%; z-index: -4;";
planet2.setAttribute("style",value2);
}

function getClickPosition(e){
	//var xPosition = e.clientX;
	//var yPosition = e.clientY;
	var parentPosition = getPosition(container)
	// var xPosition = e.clientX - (thePlanet.offsetWidth/2);
	// var yPosition = e.clientY - (thePlanet.offsetHeight/2);
	var xPosition = e.clientX - parentPosition.x- (theUser .offsetWidth/2);
	var yPosition = e.clientY - parentPosition.y-(theUser .offsetHeight/2);
	itemPositionx =xPosition;
	console.log(xPosition);
	console.log(yPosition);
	itemPositiony =yPosition;
	var translate3dValue = "translate3d(" + xPosition +"px,"+ yPosition + "px,0)";
	theUser.style.transform = translate3dValue;

}

function getPosition(element)
{
	var xPosition = 0;
	var yPosition = 0;
	while (element) 
	{
		xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
		yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
		element = element.offsetParent;
	}
	return {
		x: xPosition,
		y: yPosition
	};
}




