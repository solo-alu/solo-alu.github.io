
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function handleRadioChange() {
    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancyRadio");
    
    if(fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;
    
    // Convert text to uppercase
    text = text.toUpperCase();
    
    // Split by periods to get sentences
    let sentences = text.split(".");
    
    // Add -Moo to the last word of each sentence
    for (let i = 0; i < sentences.length - 1; i++) {
        if (sentences[i].trim() !== "") {
            let words = sentences[i].trim().split(" ");
            let lastIndex = words.length - 1;
            
            if (lastIndex >= 0) {
                words[lastIndex] = words[lastIndex] + "-MOO";
                sentences[i] = words.join(" ");
            }
        }
    }
    
  
    textArea.value = sentences.join(".");
}