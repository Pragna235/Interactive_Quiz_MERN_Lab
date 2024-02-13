let count = 0;

function checkAnswer(p1, p2) {
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
    if (p1 == p2) {
        confirm("Right Answer");
        count++;
    }
    else {
        confirm("Oops! Better luck next time!");
    }
}


confirm("Hey, Ready for some fun geeks?!")
confirm("Answer these simple questions and maximise your score!!!")

input = prompt("1. Who is the author of the book ''Fault in out Stars''")
checkAnswer(input, "John Green")

input = prompt("2. Who is the Father of the nation?")
checkAnswer(input, "Mahatma Gandhi")

input = prompt("3. What month of the year has 28 days?")
checkAnswer(input, "All")

confirm("Great! You've finished the game! Your score is " + count + " out of 3")


