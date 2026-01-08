let quoteUrl = "https://korean-advice-open-api.vercel.app/api/advice";
const quoteTag = document.getElementById("quote");
const authorTag = document.getElementById("author");
const loadMessage = document.getElementById("loadMessage");
const quoteDiv = document.getElementById("quoteDiv");
const nextButton = document.getElementById("nextButton");
const favoriteButton = document.getElementById("favoriteButton");
const favoriteList = document.getElementById("favoriteList");
const favoriteQuote = document.getElementsByTagName("li");


// ----- nextButton functions ---------

const saveLocal = function(response){
    localStorage.setItem("currentQuote", response["message"] + " (" + response["author"] + ")");
}

const showLoading = () => {
    loadMessage.style.display = "block";
    quoteDiv.style.display = "none";
    
    // disable buttons
    nextButton.disabled = true;
    nextButton.style.cursor = 'wait';
    favoriteButton.disabled = true;
    favoriteButton.style.cursor = 'wait';
};

const finishLoading = (noError) => {
    loadMessage.style.display = "none";
    quoteDiv.style.display = "block";
    
    // enable buttons
    nextButton.disabled = false;
    nextButton.style.cursor = 'pointer';

    if(noError){ // checks if there was error
        favoriteButton.disabled = false;
        favoriteButton.style.cursor = 'pointer';
    }
    else{ // disable favoriteButton if there is an error
        favoriteButton.disabled = true;
        favoriteButton.style.cursor = 'not-allowed';
    }
};


async function fetchQuote(){
    showLoading();
    let noError = true;

    try {
        // 'rand' used for testing error cases
        const rand = Math.floor(Math.random() * 10);
        if(rand%2 === 0){
            quoteUrl = "https://korean-advice-open-api.vercel.app/api/advice";
        }
        else{
            quoteUrl = "none";
        }

        const temp = await fetch(quoteUrl); // gets response from url
        const response = await temp.json(); // gets json from the response
        
        quoteTag.textContent = "[  " + response["message"] + "  ]";
        authorTag.textContent = "- " + response["author"];

        saveLocal(response);
    } catch (error) {
        console.log("Failed to load quote", error);
        quoteTag.textContent = "명언을 불러오는 데 실패했습니다. 다시 시도해 주세요.";
        authorTag.textContent = "";
        saveLocal({message : "none", author : "none"});
        noError = false;
    }

    // timeout used for testing load screen
    setTimeout(() => {
        finishLoading(noError);
    }, 1500);
};


// ----- favoriteButton functions ---------

const checkList = (currentQuote) => {
    for(q of favoriteQuote){ // iterate and check all the quotes
        if(q.textContent === currentQuote){
            return false;
        }
    }
    return true;
}

const favoriteButtonClicked = () => {
    const quote = localStorage.getItem("currentQuote"); // get quote from localStorage
    
    if(checkList(quote)){
        const li = document.createElement("li"); // create new li tag
        li.textContent = quote;
        favoriteList.appendChild(li);
    }
    else{
        alert("이미 즐겨찾기 되어 있습니다!🙅‍♂️");
    }
}


// initialize
fetchQuote();

nextButton.addEventListener("click", fetchQuote);
favoriteButton.addEventListener("click", favoriteButtonClicked);