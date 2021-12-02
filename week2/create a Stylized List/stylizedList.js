//https://opentdb.com/api.php?amount=10&category=24&type=multiple

let myHistory = [
      
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who was the 45th President of the United States?",
        "correct_answer": "Donald J. Trump",
        "incorrect_answers": [
            "Barack Obama",
            "Bill Clinton",
            "George Bush"
        ]
    },
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Former United States President Bill Clinton famously played which instrument?",
        "correct_answer": "Saxophone",
        "incorrect_answers": [
            "Baritone horn",
            "Piano",
            "Violin"
        ]
    },
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In June 2017, Saudi Arabia and Egypt broke off ties with which country over its supposed support for terrorism?",
        "correct_answer": "Qatar",
        "incorrect_answers": [
            "Bahrain",
            "United States of America",
            "Russia"
        ]
    },
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What year did Gerald Ford Become President?",
        "correct_answer": "1974",
        "incorrect_answers": [
            "1977",
            "1973",
            "1969"
        ]
    },
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the 40th President of the USA?",
        "correct_answer": "Ronald Reagan",
        "incorrect_answers": [
            "Jimmy Carter",
            "Bill Clinton",
            "Richard Nixon"
        ]
    },
    {
        "category": "Politics",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which president erased the national debt of the United States?",
        "correct_answer": "Andrew Jackson",
        "incorrect_answers": [
            "Ronald Reagan",
            "John F. Kennedy",
            "Franklin Roosevelt"
        ]
    },

]


let myHistoryList = document.getElementById("list")

for (var i = 0; i < myHistory.length; i++) {
    myHistoryList.innerHTML += "<li>" + "Question: " + myHistory[i].question + " " + "Give up? " + "  " + "  " + "The correct answer is:" + " " + myHistory[i].correct_answer + "</li>"

}