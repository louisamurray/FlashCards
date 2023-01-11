var selectedCards = [];
var score = 0;

function buildSetsScreen(cards){
	
	document.getElementById("pageTitle").innerHTML = "Select Flash Card Decks";
	var deckNameHeader = document.getElementById("deckName");
	deckNameHeader.innerHTML = cards.name;
	var setsScreen = document.getElementById("sets");
	
	var orderButton = new Togglable(document.getElementById("setsFooter"), "Order: Sorted", "Order: Random");
	orderButton.getElement().className += " orderButton footerButton right";
	
	var startButton = document.getElementById("startButton");
	
	for(var i in cards.sets){
		var lengthStr = "";
		if(cards.sets[i].cards.length == 1){
			lengthStr = "<span>1 card</span>"
		} else {
			lengthStr = "<span>"+cards.sets[i].cards.length+" cards</span>"
		}
		cards.sets[i].toggleButton = new Togglable(setsScreen, cards.sets[i].name + lengthStr, "", updateSetSelections);
	}
	
	deckNameHeader.onclick = function(){
		var selectedSetCount = 0;
		for(var i in cards.sets){
			if(cards.sets[i].toggleButton.isToggled()){
				selectedSetCount++;
			}
		}
		
		for(var i in cards.sets){
			if(selectedSetCount > cards.sets.length / 2){
				cards.sets[i].toggleButton.set(false);
			} else {
				cards.sets[i].toggleButton.set(true);
			}
		}
	};
	
	function updateSetSelections(){
		var selectedSetCount = 0;
		for(var i in cards.sets){
			if(cards.sets[i].toggleButton.isToggled()){
				selectedSetCount++;
			}
		}
		if(selectedSetCount > 0){
			startButton.disabled = false;
		} else {
			startButton.disabled = true;
		}
	}
	
	startButton.onclick = function(){
		if(startButton.disabled){
			return false;
		}

		selectedCards = [];
		
		for(var i in cards.sets){
			if(cards.sets[i].toggleButton.isToggled()){
				for(var a in cards.sets[i].cards){
					var card = cards.sets[i].cards[a];
					if(!(card instanceof Array)){
						selectedCards.push({
							 set: cards.sets[i],isMulti: true
							 ,deck: cards
							 ,name: card.name
							 ,cards: card.cards
							 ,number: a
						 });
					 } else {
						 selectedCards.push({
							  set: cards.sets[i]
							 ,isMulti: false
							 ,deck: cards
							 ,front: card[0]
							 ,back: card[1]
							 ,number: a
						 });
					 }
				 }
			 }
		 }
 
		 var shuffleCards = orderButton.isToggled();
		 
		 startQuiz(shuffleCards);
	 }
 }
 
 function startQuiz(shuffleCards){
	 // logic for starting the quiz
	 function startQuiz(shuffleCards){
		if (shuffleCards){
			selectedCards = shuffle(selectedCards);
		}
		var currentCardIndex = 0;
		showCard(currentCardIndex);
	}
	
	
	 correctButton.onclick = function(){
		 score++;
		 // other logic for correct button
		 document.getElementById("score").innerHTML = score;
	 }
 }
 
 function showSetsScreen(){
	 document.getElementById("score").innerHTML = score;
	 document.getElementById("setScreen").style.display = "block";
	 document.getElementById("setList").style.display = "block";
	 document.getElementById("startButton").style.display = "block";
	 document.getElementById("setsFooter").style.display = "block";
 }
 
