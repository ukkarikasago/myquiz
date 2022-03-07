const quiz =[
    {
        question: "みづきが好きでない食べ物は？",
        answers: [
            "焼き鮭(辛め)",
            "焼きおにぎり",
            "すき焼き",
            "イカ焼き"
        ],
        correct: "イカ焼き"
    },{
        question: "みづきが持っているマンガは？",
        answers: [
            "HUNTER×HUNTER",
            "青春×機関銃",
            "×××HOLIC",
            "kiss×sis"
        ],
        correct: "青春×機関銃"
    },{
        question: "白には200色ありますが、みづきの好きな白は？",
        answers: [
            "鉛白",
            "乳白色",
            "練り色",
            "生成色"
        ],
        correct: "鉛白"
    }
] ;

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    }else{
        window.alert("不正解...");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終わり！あなたの正解数は" + quizLength + "問中" + score + "問です！" );
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener ("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

