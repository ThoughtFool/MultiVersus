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
// var weaponType = ["grenade", "tnt", "nuke", "bullet", "missle", "gun"];

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



var thePlanet = document.querySelector("#planet");
	var container = document.querySelector("#contentContainer");

	container.addEventListener("click", getClickPosition, false);

	function getClickPosition(e){
		//var xPosition = e.clientX;
		//var yPosition = e.clientY;
		var parentPosition = getPosition(container)
		// var xPosition = e.clientX - (thePlanet.offsetWidth/2);
		// var yPosition = e.clientY - (thePlanet.offsetHeight/2);
		var xPosition = e.clientX - parentPosition.x- (thePlanet.offsetWidth/2);
		var yPosition = e.clientY - parentPosition.y-(thePlanet.offsetHeight/2);
		var translate3dValue = "translate3d(" + xPosition +"px,"+ yPosition + "px,0)";
		thePlanet.style.transform = translate3dValue;

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


