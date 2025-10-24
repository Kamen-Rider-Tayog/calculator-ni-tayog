const display = document.getElementById("display");
const nameButton = document.getElementById("name");
const sound = new Audio("randomatic.mp3");
let loveNotesTimeouts = [];

function appendToDisplay(input) {
    display.style.fontSize = "3rem";
    display.style.textAlign = "right";
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    nameButton.textContent = "calculator ni tayog";
    display.style.fontSize = "3rem";
    display.style.textAlign = "right";
    sound.pause();
    sound.currentTime = 0;
    
    loveNotesTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    loveNotesTimeouts = []; 
}

function calculate() {
    let expression = display.value;

    if (!expression) {
        display.value = "Error";
        return;
    }

    expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

    try {
        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        if (result === 143) {
            display.value = "";
            displayLoveNotes();
            nameButton.textContent = "calculator ni tayog";
            sound.play();
        } else {
            display.value = result;
            nameButton.textContent = "calculator ni tayog";
        }
    } catch (error) {
        display.value = "Error";
    }
}

function displayLoveNotes() {
    const loveNotes = [
        { text: "Write little love notes on a post-it", delay: 3000 },
        { text: "And I'd post it on your front door", delay: 3000 },
        { text: "Show up in suit and tie with a broach and", delay: 3000 },
        { text: "With the roses on your front yard… oh…", delay: 3000 },
        { text: "Doo-doo-roo-doo", delay: 3500 },
        { text: "Yeah, ang daming paraan", delay: 3000 },
        { text: "Ikaw ang tanging dahilan", delay: 2500 },
        { text: "Oh babe…", delay: 1500 },
        { text: "Haharanahin kita", delay: 2300 },
        { text: "Sa'n man tayo mapunta", delay: 3000 },
        { text: "Yu'ng tipong kahit wala lang", delay: 3000 },
		{ text: "(wala lang)",delay: 1000},
        { text: "O kaya biglang may breakfast in bed", delay: 3800 },
        { text: "Just to keep you interested", delay: 2500 },
        { text: "Lahat ay dahil wala lang", delay: 3000 },
		{ text: "(wala lang)",delay: 1500},
        { text: "I just wanna do", delay: 2000 },
        { text: "Simple random things to say", delay: 4000 },
        { text: "I love you…ohhh i...love you...", delay: 3000 }
    ];

    loveNotesTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    loveNotesTimeouts = [];

    display.value = "";
    display.style.fontSize = "1.25rem";
    display.style.textAlign = "center";
    let currentLine = 0;

    function displayNextLine() {
        if (currentLine < loveNotes.length) {
            display.value = loveNotes[currentLine].text;
            
            currentLine++;
            if (currentLine < loveNotes.length) {
                const timeoutId = setTimeout(displayNextLine, loveNotes[currentLine - 1].delay);
                loveNotesTimeouts.push(timeoutId);
            } else {
                const timeoutId = setTimeout(() => {
                    display.value = "";
                    display.style.fontSize = "3rem"; 
                    display.style.textAlign = "right";
                }, loveNotes[loveNotes.length - 1].delay);
                loveNotesTimeouts.push(timeoutId);
            }
        }
    }

    displayNextLine();
}
