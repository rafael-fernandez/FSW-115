let etList = `{
    
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the TV show Cheers, Sam Malone was a former relief pitcher for which baseball team?",
            "correct_answer": "Boston Red Sox",
            "incorrect_answers": [
                "New York Mets",
                "Baltimore Orioles",
                "Milwaukee Brewers"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which character was played by Dustin Diamond in the sitcom Saved by the Bell?",
            "correct_answer": "Screech",
            "incorrect_answers": [
                "Zack",
                "Mr. Belding",
                "A.C. Slater"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What country is Cory in the House set in?",
            "correct_answer": "The United States of America",
            "incorrect_answers": [
                "Canada",
                "Venezuala",
                "England"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In season one of the Netflix political drama, House of Cards, what government position does Frank Underwood hold?",
            "correct_answer": "House Majority Whip",
            "incorrect_answers": [
                "Attorney General",
                "President",
                "Chief of Staff"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "British actor David Morrissey stars as which role in The Walking Dead?",
            "correct_answer": "The Governor",
            "incorrect_answers": [
                "Negan",
                "Rick Grimes",
                "Daryl Dixon"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When Donkey Kong died in, Donkey Kong Country episode #39 a Wonderful Life, who was his guardian angel?",
            "correct_answer": "Eddie the Mean Old Yeti",
            "incorrect_answers": [
                "Kiddy Kong",
                "Diddy Kong",
                "King K. Rool"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which actor portrays, Walter White in the series Breaking Bad?",
            "correct_answer": " Bryan Cranston",
            "incorrect_answers": [
                "Andrew Lincoln",
                "Aaron Paul",
                "RJ Mitte"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In which state of America was the Fresh Prince of Bel-Air born and raised in?",
            "correct_answer": "Pennsylvania",
            "incorrect_answers": [
                "Florida",
                "California",
                "New Jersey"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What TV show is about a grandfather dragging his grandson around on adventures?",
            "correct_answer": "Rick &amp; Morty",
            "incorrect_answers": [
                "Family Guy",
                "South Park",
                "American Dad"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which of the following awards do Matt Stone and Trey Parker NOT have?",
            "correct_answer": "Oscar",
            "incorrect_answers": [
                "Emmy",
                "Tony",
                "Grammy"
            ]
        }
    ]

}`


let entertainmentTV = JSON.parse(etList)
let entertainmentList = document.getElementById("list")


for (r = 0; r < entertainmentTV.results.length; r++) {

    let categories = document.createElement("h2")
    let types = document.createElement("li")
    let difficulty = document.createElement("li")
    let questions = document.createElement("li")
    let correctAnswers = document.createElement("li")

    categories.textContent = entertainmentTV.results[r].category
    document.body.append(categories)

    types.textContent = entertainmentTV.results[r].type
    document.body.append(types)

    difficulty.textContent = entertainmentTV.results[r].difficulty
    document.body.append(difficulty)

    questions.textContent = entertainmentTV.results[r].question
    document.body.append(questions)

    correctAnswers.textContent = entertainmentTV.results[r].correct_answer  
    document.body.append(correctAnswers)
}
