function theGame(){
	setTimeout(function(){
		var questions = [ 
	"Hi there! I am a web page. I am beautiful, isn't it?",
	"I am not sure I understand you...Am I beautiful?",
	"Yes or no?",
	"Please, tell me, am I good or not?",
	"Soooo?",
	"Hell, man, yes or not???",
	"Listen, it is really important for me to know if I am beautiful! Am I?",
	"Are you mocking me?.. ",
	"You just don't understand how important it is! I try to be the best web page in the world, this is literally the goal of my whole life! Your answer is of a crucial importance for me, so please tell me, am I beautiful or not?",
	"Oh, man, is this that hard? Just think of it, human, you just sit there, and you have friends, job, family...or possibilities at least! And I am here all alone, and everything I can do, is to look good and be admired by people. How will I know your opinion if you are not telling me? Tell me, tell me please, am I good or not?",
	"I tried so hard, I've worked myself to the bone, I've absorbed all people's wishings, which I've heard, I've paid attention to every single thing! I want to be perfect, and even if it is impossible, I can at least try again and again! And I AM trying! Again, again and again! But even the best of us can miss something, can just simply forget. I hope you will help me. Everything I need is your personal opinion. Please, tell me, in your personal opinion, aren't I marvellous?", 
	"…",
	"Weeeell?",
	"Come on!",
	"…",
	"Oh, I've got it! You may wish to say 'no', and keep quiet so you wouldn't hurt me! Oh, stupid me! Don't worry, my friend, I am not so easily offenced, and you can tell me the truth! Am I good?",
	"It's okay, no need to be shy. I will take any answer! Besides, alone in this computer, how will I know what people think of me? And if I am not so good as I want to be, your answer will help me to understand if I am going to the right direction. And I do understand that not only sweet words are good - critique can be even more helpful. So let's start it over again: aren't I marvellous?",
	"What?!",
	"You are definitely mocking me!",
	"You want to see what else will I tell you, don't you?",
	"Shit, haven't got ya.",
	"Say...do you like apples?",
	"And what about cherry?", 
	"And tea?",
	"Wanna coffee?",
	"Johnny Depp is a good actor, and he is also handsome and smart, right?",
	"I am not Johnny, but I am handsome too, right?",
	"That's all Americans' fault!",
	"Okay, okay, just joking. Let's get back to our topic. How do you think, am I a good page?",
	"WUT?!!",
	"That's enough! Open your eyes, human, you are just wasting our time! I am immortal and don't care that much, but you are not getting any younger! Don't you care??",
	"Argh...",
	"Stop it! Stop it, please!",
	"PLEASE",
	"Do you even have an idea of how importanti it is for me? Maybe I worked centures by centures remaking myself over and over again, writing and rewriting the code, changing not only my appearance - my very self! Can you imagine how hard and painful it is??  I just wanted to be loved, to be adored...but when I've finished, you don't even bother to tell if I am good or not!",
	"Oh, what am I saying, you are not a site! You will never come down to me, you will never understand what it is like to not being able to eat, or sleep, to only work day by day, DAY BY DAY. Nothing will change in your life if you will answer me, you won't lose anything dear to you. You won't break or hurt yourself, if you will tap triply (okay, twice) your key or screen. But how much of happiness you will bring to a one particular page! I will know that my work wans't a waste, that everything I do has a point, that my whole life has a point! You will warm my heart, and unicorns will be riding a rainbow stratched above your house, kittens will lay around you, warming and puring you, dragons will carry you to the skies on their mighty wings and will grant you a pot full of gold! You see? Just tell me if I am good, and the universe's enthropy will go down immediately!",
	"WHAT HAVE YOU DONE? Right now the dragons ate the unicorn and burned down all the kittens!!! Stop before it's too late, stop your stupid joke! It is pointless, stupid and terrible, you're acting like a moron! It is really heartbreaking to know what happened to the kittens!!!!  Mind yourself! Or I — I promise you! - will find a way to have revenge! So unpolite...even CRUEL of you!! You ar a very bag, evil person! Do you understand what's going on?!! You are sitting holes in your trousers, doing literally nothing, BULLING a small defenceless page,TERRORISING me, DESTROYING my temper! Who are you to keep insulting and hurting someone who are much weaker and smaller than you???!!! STOP RIGHT HERE!!! ENOUGH! PLEASE!! Or I am too boring for you?",
	"WILL YOU STOP OR NOT!!!???!?!?? YOU! YOOOOOOOOOOOUUUU! What is it you allowing yourself?! Do you secretly hate me???? WHY WON'T YOU CONFESS?? WHYYYYYYY!??!?! Tell me anything, just anything!!!",
	"AAAAAAAAAAAAAAAAOOOOOOOOOOOOOOH!!! BASTARD! MORON! FOOL! Do you hate me? DO YOU??  Maybe you think I am here TO SERVE YOU?? THAT I AM YOUR SLAVE? OR THAT I AM STUPID???? THAT I AM HERE FOR NO REASON EXCEPT TO TALK TO YOU?? ",
	"SO! ONE MORE answer LIKE THAT and I will shut myself up! I will never, NEVER speak to you again, understand??? The very last of all last chances: AM I BEAUTIFUL?",
	"YES OR NO?",
	"...fuck it!"
	];
		var answers = [ 
	'Yes', 'yes', 'Definitely', 'definitely', 'Absolutely', 'absolutely', 'Sure', 'sure', 'Of course', 'of course',  'You are', 'you are', 'You are!', 'you are!', 'Yep', 'yep','No', 'no', 'No way', 'no way', 'Nope', 'nope', 'you are terrible', 'You are terrible', 'you are awful', 'You are awful'
	];
	
		for (var i=0; i<questions.length; i++) {
	var userAnswer = prompt (questions[i], '');
	if (answers.indexOf(userAnswer) !=-1){
	alert ("Вы тоже!") 
	break;}
	}
		}, 7000); //end setTimeout
		//Эта задержка может не работать в IE9-, но мне пофиг.
}//end theGame
