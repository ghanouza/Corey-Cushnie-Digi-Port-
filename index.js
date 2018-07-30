
var words = [
	"Hi ^-^.... Welcome to my portfolio (Under Construction)",
	"My name is Corey Cushnie and I am a Software Developer from the Bronx.",
	"I am best at Python, SQL, JavaScript, HTML, CSS.",
	"I also know C++.",
	"I have been developing software on my own for about 3 years now and will never look back.",
	"I enjoy making producing music and currently work as an IT professional.",
	"My favorite season is summer, favorite food is Cheese Burgers and milkshakes, and my favorite genre is hip-hop.",
	"Addicted to Showtime series and Marvel Movies.",
	"I enjoy breaking things to get a better understanding how they were put together.",
	"Interested? ",
	"Message me on Linkedin, We can have coffee!!"
];


let i = 0;
let timer;


// Copied code from the internet. 
// Have an idea of how the concept works and will venture do my own version.


function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('tW').innerHTML += word.shift();
		} else {
			clearTimeout(timer);
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 70);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('tW').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			clearTimeout(timer);
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

typingEffect();