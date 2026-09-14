/* =========================================
   MORE THAN A SPORT
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   GOALS
========================================= */

const goalData = {

    confidence: {
        title: "CONFIDENCE",

        text:
            "Confidence doesn't have to mean believing you're the best. It can come from repeatedly facing something difficult and discovering that you can handle more than you expected."
    },

    strength: {
        title: "STRENGTH",

        text:
            "Martial arts can build physical strength while also teaching you how to stay composed, keep working and use technique instead of relying only on force."
    },

    discipline: {
        title: "DISCIPLINE",

        text:
            "Progress usually comes from showing up repeatedly. Training can teach you that improvement is built through consistency, not one perfect session."
    },

    resilience: {
        title: "RESILIENCE",

        text:
            "You will have difficult sessions, mistakes and moments when you want to stop. Learning to reset and continue can become one of the most valuable parts of training."
    }

};


const goalCards = document.querySelectorAll(".goal-card");
const goalResult = document.getElementById("goalResult");

goalCards.forEach(card => {

    card.addEventListener("click", () => {

        goalCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

        const goal = card.dataset.goal;

        goalResult.innerHTML = `
            <span class="result-label">
                ${goalData[goal].title}
            </span>

            <p>
                ${goalData[goal].text}
            </p>
        `;

    });

});


/* =========================================
   SPORT DATA
========================================= */

const sports = {

    bjj: {

        title: "JIU-JITSU",

        category: "GRAPPLING",

        quote:
            "Think when strength isn't enough.",

        what:
            "Jiu-Jitsu is a grappling martial art built around controlling positions, solving problems and finding ways to improve your position when the situation becomes difficult.",

        skills: [
            "PROBLEM SOLVING",
            "PATIENCE",
            "COMPOSURE",
            "TECHNICAL THINKING"
        ],

        challenge:
            "You won't always have the strongest position. You have to stay calm, understand what is happening and find another way forward.",

        lesson:
            "Being stuck doesn't mean being finished. Sometimes the answer is to slow down, think and try something different."

    },


    muaythai: {

        title: "MUAY THAI",

        category: "STRIKING",

        quote:
            "Stay composed when pressure starts to build.",

        what:
            "Muay Thai is a striking martial art built around punches, kicks, knees, elbows, movement, timing and controlling distance.",

        skills: [
            "RESILIENCE",
            "COMPOSURE",
            "DISCIPLINE",
            "CONFIDENCE"
        ],

        challenge:
            "Pressure changes everything. Staying calm and continuing to think when you're tired or uncomfortable is part of the challenge.",

        lesson:
            "Pressure doesn't automatically mean panic. Training can teach you to reset, stay focused and keep working."

    },


    wrestling: {

        title: "WRESTLING",

        category: "GRAPPLING",

        quote:
            "Keep moving when the answer isn't easy.",

        what:
            "Wrestling is built around takedowns, control, movement, balance, pressure and constantly working for a better position.",

        skills: [
            "DETERMINATION",
            "WORK ETHIC",
            "PERSISTENCE",
            "MENTAL TOUGHNESS"
        ],

        challenge:
            "Wrestling can become exhausting quickly. The challenge is continuing to work even when stopping would be easier.",

        lesson:
            "Progress isn't always obvious. Sometimes the most important thing is simply continuing to work."

    },


    mma: {

        title: "MMA",

        category: "MIXED",

        quote:
            "Adapt when the situation changes.",

        what:
            "MMA combines striking, wrestling, grappling, movement and decision-making into one constantly changing environment.",

        skills: [
            "ADAPTABILITY",
            "DECISION MAKING",
            "CONFIDENCE",
            "RESILIENCE"
        ],

        challenge:
            "The situation can change quickly. A plan that worked moments ago might not work anymore, so you have to adapt.",

        lesson:
            "Having a plan is important, but being able to change the plan is just as important."

    }

};


/* =========================================
   SPORT EXPERIENCE
========================================= */

const experience = document.getElementById("sportExperience");

const sportTitle = document.getElementById("sportTitle");
const sportCategory = document.getElementById("sportCategory");
const sportQuote = document.getElementById("sportQuote");
const sportWhat = document.getElementById("sportWhat");
const sportSkills = document.getElementById("sportSkills");
const sportChallenge = document.getElementById("sportChallenge");
const sportLesson = document.getElementById("sportLesson");

const exploreButtons =
    document.querySelectorAll(".explore-button");

const backButton =
    document.getElementById("backButton");


exploreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sport = button.dataset.sport;

        openSport(sport);

    });

});


function openSport(sport) {

    const data = sports[sport];

    sportTitle.textContent = data.title;

    sportCategory.textContent = data.category;

    sportQuote.textContent = data.quote;

    sportWhat.textContent = data.what;

    sportChallenge.textContent = data.challenge;

    sportLesson.textContent = data.lesson;


    sportSkills.innerHTML = "";

    data.skills.forEach(skill => {

        const item = document.createElement("div");

        item.className = "skill-item";

        item.textContent = skill;

        sportSkills.appendChild(item);

    });


    experience.classList.add("active");

    experience.scrollIntoView({
        behavior: "smooth"
    });

}


backButton.addEventListener("click", () => {

    experience.classList.remove("active");

    document
        .getElementById("paths")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   TRANSFER SECTION
========================================= */

const transferSteps =
    document.querySelectorAll(".transfer-step");

const transferMessage =
    document.getElementById("transferMessage");


const transferData = {

    "TRAINING": {

        title: "YOU SHOW UP.",

        text:
            "You create a habit of doing something even when you don't feel completely ready."

    },

    "CHALLENGE": {

        title: "YOU FACE SOMETHING HARD.",

        text:
            "Training puts you in situations where the easiest option isn't always to stop."

    },

    "LESSON": {

        title: "YOU LEARN FROM IT.",

        text:
            "Mistakes, difficult sessions and setbacks can become information that helps you improve."

    },

    "LIFE": {

        title: "YOU TAKE IT WITH YOU.",

        text:
            "The mindset developed through training can influence how you approach challenges outside the gym."

    }

};


transferSteps.forEach(step => {

    step.addEventListener("click", () => {

        transferSteps.forEach(item => {
            item.classList.remove("active");
        });

        step.classList.add("active");

        const selected =
            step.textContent.trim().split("\n").pop().trim();

        const data = transferData[selected];

        transferMessage.innerHTML = `

            <span class="small-label">
                ${selected}
            </span>

            <h3>
                ${data.title}
            </h3>

            <p>
                ${data.text}
            </p>

        `;

    });

});


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question:
            "What do you want to develop most?",

        options: [
            {
                text: "Problem solving",
                scores: { bjj: 3, muaythai: 0, wrestling: 1, mma: 2 }
            },

            {
                text: "Confidence",
                scores: { bjj: 1, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "Work ethic",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "Adaptability",
                scores: { bjj: 1, muaythai: 1, wrestling: 2, mma: 3 }
            }
        ]
    },


    {
        question:
            "Which challenge sounds most interesting?",

        options: [
            {
                text: "Solving a physical puzzle",
                scores: { bjj: 3, muaythai: 0, wrestling: 1, mma: 2 }
            },

            {
                text: "Learning to stay calm under pressure",
                scores: { bjj: 1, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "Constant physical effort",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "Combining everything",
                scores: { bjj: 1, muaythai: 1, wrestling: 1, mma: 3 }
            }
        ]
    },


    {
        question:
            "What sounds most rewarding?",

        options: [
            {
                text: "Outthinking an opponent",
                scores: { bjj: 3, muaythai: 0, wrestling: 1, mma: 2 }
            },

            {
                text: "Improving your striking",
                scores: { bjj: 0, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "Winning through persistence",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "Learning multiple disciplines",
                scores: { bjj: 1, muaythai: 1, wrestling: 1, mma: 3 }
            }
        ]
    },


    {
        question:
            "How do you prefer to train?",

        options: [
            {
                text: "Technical and strategic",
                scores: { bjj: 3, muaythai: 1, wrestling: 1, mma: 2 }
            },

            {
                text: "Fast and striking-focused",
                scores: { bjj: 0, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "Physical and relentless",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "A combination",
                scores: { bjj: 1, muaythai: 1, wrestling: 1, mma: 3 }
            }
        ]
    },


    {
        question:
            "What would you rather improve?",

        options: [
            {
                text: "Patience",
                scores: { bjj: 3, muaythai: 1, wrestling: 1, mma: 2 }
            },

            {
                text: "Composure",
                scores: { bjj: 1, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "Determination",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "Adaptability",
                scores: { bjj: 1, muaythai: 1, wrestling: 1, mma: 3 }
            }
        ]
    },


    {
        question:
            "Which sentence sounds most like you?",

        options: [
            {
                text: "I like figuring things out.",
                scores: { bjj: 3, muaythai: 0, wrestling: 1, mma: 2 }
            },

            {
                text: "I want to become more composed.",
                scores: { bjj: 1, muaythai: 3, wrestling: 1, mma: 2 }
            },

            {
                text: "I don't mind hard work.",
                scores: { bjj: 1, muaythai: 1, wrestling: 3, mma: 2 }
            },

            {
                text: "I want to learn everything.",
                scores: { bjj: 1, muaythai: 1, wrestling: 1, mma: 3 }
            }
        ]
    }

];


let currentQuestion = 0;

let selectedAnswer = null;

let scores = {
    bjj: 0,
    muaythai: 0,
    wrestling: 0,
    mma: 0
};


const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const quizOptions =
    document.getElementById("quizOptions");

const quizNext =
    document.getElementById("quizNext");

const quizBox =
    document.getElementById("quizBox");

const quizResult =
    document.getElementById("quizResult");

const quizResultTitle =
    document.getElementById("quizResultTitle");

const quizResultText =
    document.getElementById("quizResultText");

const restartQuiz =
    document.getElementById("restartQuiz");


function loadQuestion() {

    const question = questions[currentQuestion];

    questionNumber.textContent =
        currentQuestion + 1;

    questionText.textContent =
        question.question;

    quizOptions.innerHTML = "";

    selectedAnswer = null;

    quizNext.disabled = true;


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option.text;

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".quiz-option")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            button.classList.add("selected");

            selectedAnswer = index;

            quizNext.disabled = false;

        });

        quizOptions.appendChild(button);

    });

}


quizNext.addEventListener("click", () => {

    if (selectedAnswer === null) {
        return;
    }

    const answer =
        questions[currentQuestion]
            .options[selectedAnswer];

    Object.keys(answer.scores).forEach(sport => {

        scores[sport] += answer.scores[sport];

    });


    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showQuizResult();

    }

});


function showQuizResult() {

    const winner =
        Object.keys(scores).reduce((a, b) =>
            scores[a] > scores[b] ? a : b
        );


    const resultData = {

        bjj: {
            title: "JIU-JITSU",

            text:
                "You may enjoy a martial art where patience, technique and problem solving are central to the challenge."
        },

        muaythai: {
            title: "MUAY THAI",

            text:
                "You may enjoy a striking-focused martial art where composure, timing and confidence are constantly tested."
        },

        wrestling: {
            title: "WRESTLING",

            text:
                "You may enjoy a physically demanding martial art where persistence, pressure and work ethic are central."
        },

        mma: {
            title: "MMA",

            text:
                "You may enjoy a mixed discipline where adaptability and decision-making are constantly challenged."
        }

    };


    quizBox.style.display = "none";

    quizResult.classList.add("show");

    quizResultTitle.textContent =
        resultData[winner].title;

    quizResultText.textContent =
        resultData[winner].text;

}


restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    scores = {
        bjj: 0,
        muaythai: 0,
        wrestling: 0,
        mma: 0
    };

    quizResult.classList.remove("show");

    quizBox.style.display = "block";

    loadQuestion();

});


/* =========================================
   START QUIZ
========================================= */

loadQuestion();