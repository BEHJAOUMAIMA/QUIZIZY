//CORRECTION
const correction = document.querySelector(".correction");
//stepper component
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

// one.onclick = function() {
//     one.classList.add("active");
//     two.classList.remove("active");
//     three.classList.remove("active");
// }
// two.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.remove("active");
// }
// three.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
// }

// STEPPER
let stepper = document.getElementById("prog");
// commencer le quiz
let startBtn = document.querySelector("#start");
//guide de quiz

let guide = document.querySelector(".guide");
let exitBtn = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//informations
let userName = document.querySelector("#input");
let errorName = document.querySelector("#errorname");
let validerBtn = document.querySelector("#btnvalider");
let info = document.querySelector("#section")

// application de quiz 

let quiz = document.querySelector("#quiz-app");
let time = document.querySelector("#time");

// questions de quiz
let questionNumber = document.querySelector("#questionNo");
let questionText = document.querySelector("#question");

// choix de questions

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

// Récupérer toutes les questions 

let answers = document.querySelectorAll(".answer");

//Reponses correctes et boutton "Suivant"

let total_correct = document.querySelector("#total_correct");
let nextBtn = document.querySelector("#btnNext");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quitBtn = document.querySelector("#quit");
let startAgainBtn = document.querySelector("#startAgain");

// variables 

let index = 0;
let timer = 0;
let interval = 0;
let mention = "";

//total points 

let correct = 0;

// stocker la valeur des réponses

let userAnswers = undefined;

// BUTTON "Valider" validation Name
validerBtn.addEventListener("click", () => {

    if (userName.value === "" || userName.value == null) {
        errorName.innerHTML = "Veuillez entrer votre Nom !";
    } else {
        errorName.innerHTML = "";
        section.style.display = "none";
        guide.style.display = "flex";
    }
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");

});
//que se passe-t-il si le bouton "commencer" est clicker
startBtn.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "none";
    section.style.display = "flex";
    stepper.style.display = "flex";
});

//que se passe-t-il si le bouton "sortir" est clicker
exitBtn.addEventListener("click", () => {
    startBtn.style.display = "block";
    guide.style.display = "none";
    stepper.style.display = "none";
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
});
//que ce pass-t-il lorsque le botton "continuer" est clické
function StartQuiz() {
    quiz.style.display = "flex";
    guide.style.display = "none";
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    interval = setInterval(countDown, 1000);
    getData();
};
// Création du time Pour le quiz
function countDown() {
    if (timer === 30) {
        clearInterval(interval);
        nextBtn.click();

    } else {
        timer++;
        time.innerText = "Temps : " + timer + " s";
    }
    console.log(timer);
}

// aficher la question et les options

function getData() {

    questionNumber.innerText = index + 1 + ". ";
    questionText.textContent = quizData[index].question;
    option1.textContent = quizData[index].answer_1;
    option2.textContent = quizData[index].answer_2;
    option3.textContent = quizData[index].answer_3;
    option4.textContent = quizData[index].answer_4;

    // timer commence
    timer = 0;
}
getData();

//

answers.forEach(removeActive => {
    removeActive.classList.remove("active")
})
total_correct.innerHTML = `${index+1} sur ${quizData.length} Questions`;


answers.forEach((choices) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //vérifier la réponse
        if (choices.innerText === quizData[index].right_answer) {
            correct++;
        } else {
            correct += 0;
            correction.innerHTML += `<div class="quest">
                <h4 class="quNo">${index+1}. </h4>
                <h4 class="tit">${quizData[index].question}</h4>
            </div>
            <div class="choices">
                <p class="choix" id="ch1">${choices.innerText}</p>
                <p class="choix" id="ch2">${quizData[index].right_answer}</p>
            </div>
            <div class="justif">
                <p class="explication">${quizData[index].justification}</p>
            </div>
            <hr>
            `;
        }
        // stopper le compteur

        clearInterval(interval);

        // faire désactiver les options restantes
        for (i = 0; i <= 3; i++) {
            answers[i].classList.add("disabled");
        }

    })
})

// que ce pass-t-il lorsque le botton "suivant" est clické

nextBtn.addEventListener("click", () => {
    //si index est inférieur à quizData.length
    if (index !== quizData.length - 1) {
        index++;
        answers.forEach(removeActive => {
            removeActive.classList.remove("active");
        })


        // Afficher question 
        getData();


        //resultats
        total_correct.style.display = "block";
        total_correct.innerHTML = `${index+1} sur ${quizData.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);

    } else {
        index = 0;
        clearInterval(interval);
        quiz.style.display = "none";
        one.classList.add("active");
        two.classList.add("active");
        three.classList.add("active");
        if (correct == 0 || correct <= 4) {
            mention = "Malheureusement !"
        } else if (correct == 5 || correct <= 7) {
            mention = "Bien !"
        } else if (correct == 8 || correct < 10) {
            mention = "Très Bien !"
        } else {
            mention = "Excellent"
        }
        points.innerHTML = `${mention} Vous avez répondu à ${correct} sur ${quizData.length} questions`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        answers[i].classList.remove("disabled");
    }
})

// click sur le botton "Quitter"

quitBtn.addEventListener("click", () => {
    startBtn.style.display = "block";
    result.style.display = "none";
    stepper.style.display = "none";
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
})

// click sur le botton "recommencer"
startAgainBtn.addEventListener("click", () => {
    section.style.display = "flex";
    result.style.display = "none";
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
})

//questions aléatoires:
quizData.sort(function() { return Math.random() - 0.5; });