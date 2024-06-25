//מחכים שניה עד הפיכה חזרה
//מיקומים רנדומלים לתמונות
//שינוי סדר לתמונות
//אם ניתן לאלמנט קלאס פליפ-יהיה סיבוב

const cards = document.querySelectorAll(".memory-card");
//console.log(cards);
shuffleCards();
AddCardEventListener();

//1 לא בחרתי קלף
//2 בחרתי אחד
//3 בחרתי שני קלפים
let hasFlippedCard = false;//מסמן שלא נבחר אף קלף
var firstCard;
var secondCard;
var lockBoard = false;//כשהוא אמת כולם בדיסייבל

function AddCardEventListener() {
    cards.forEach((card) => {
        card.addEventListener("click", flipCard);
    });
}

function flipCard() {
    if (lockBoard)// אם  שצריך לחסום את כל הקלפים
        return;

    this.classList.add("flip");

    if (this == firstCard) {// אם בחרנו שוב אותו קלף
        return;
    }

    else if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    else {//אם אני ברכטיס שני
        secondCard = this;
        lockBoard = true;
        checkMatch();
    }
}

function checkMatch() {
    //גישה לאטריביוטים שמתחילים במילה דאטה
    if (firstCard.dataset.framework == secondCard.dataset.framework)//אם יש התאמה אל תהפוך חזרה, ותעשה דיסאייבל כדי לא להפעיל ארוע לחיצה להבא
    {
        disableCards();
    }
    else
        flipBack();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();//אתחול המשתנים מחדש לזוג הבא
}

function flipBack() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();//אתחול המשתנים מחדש לזוג הבא
    }, 1500);// שניה וחצי
}

//ערבוב
function shuffleCards() {
    cards.forEach((card) => {
        let randomePosition = Math.floor(Math.random() * 12);
        //שינוי המיקום באמצעות פרופרטי אורדר של פלקסבוקס
        card.style.order = randomePosition;
    });

    // cards.forEach((card)=>{
    //      card.classList.add("flip");
    // });
}

function resetBoard() {
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}