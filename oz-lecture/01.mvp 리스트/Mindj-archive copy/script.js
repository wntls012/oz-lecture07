const questions = [
    {
        question: "주말에 갑작스럽게 약속이 취소되었을 때, 나의 솔직한 심정은?",
        options: [
            { text: "속으로 안도하며 온전히 나만을 위한 집콕 힐링 계획을 세운다.", type: "I" },
            { text: "아쉽지만 곧바로 다른 친구에게 연락해서 새로운 약속을 타진한다.", type: "E" }
        ]
    },
    {
        question: "새로운 사람들과 모임에 참석했을 때 나의 행동 패턴은?",
        options: [
            { text: "주로 전체적인 대화를 조용히 경청하며 분위기를 파악하는 편이다.", type: "I" },
            { text: "먼저 인사를 건네고 분위기를 띄우며 대화를 주도하는 편이다.", type: "E" }
        ]
    }
];

let currentQuestionIndex = 0;
let userScore = { I: 0, E: 0 };

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultText = document.getElementById('result-text');
const currentStepEl = document.getElementById('current-step');
const totalStepEl = document.getElementById('total-step');

// 총 문항수 초기 세팅
totalStepEl.textContent = questions.length;

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        currentStepEl.textContent = currentQuestionIndex + 1;
        questionText.textContent = q.question;
        optionsContainer.innerHTML = '';
        
        q.options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option.text;
            btn.classList.add('option-btn');
            btn.addEventListener('click', () => handleAnswer(option.type));
            optionsContainer.appendChild(btn);
        });
    } else {
        showResult();
    }
}

function handleAnswer(type) {
    userScore[type]++;
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    if (userScore.I >= userScore.E) {
        resultText.textContent = "당신은 에너지를 내면으로부터 차분하게 채우는 '사색가형' 심리 성향을 가지고 계시네요. 혼자만의 시간이 곧 마음의 충전소가 되는 타입입니다.";
    } else {
        resultText.textContent = "당신은 타인과의 교감과 소통 속에서 활력을 얻는 '에너지 드라이버형' 심리 성향이시군요. 관계 속에서 에너지가 피어나는 타입입니다.";
    }
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScore = { I: 0, E: 0 };
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});