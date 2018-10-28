//There will be exactly one trivia question for each president.
//The index of the question in the question array will correspond to this array.
//For example, the first question's answer is George Washington. The second will be John Adams.

//The presidents array.
var presidentList = ["",
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James K. Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses S. Grant",
    "Rutherford B. Hayes",
    "James Garfield",
    "Chester A. Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "Grover Cleveland",
    "William McKinley",
    "Theodore Roosevelt",
    "William Howard Taft",
    "Woodrow Wilson",
    "Warren G. Harding",
    "Calvin Coolidge",
    "Herbert Hoover",
    "Franklin D. Roosevelt",
    "Harry S. Truman",
    "Dwight D. Eisenhower",
    "John F. Kennedy",
    "Lyndon B. Johnson",
    "Richard M. Nixon",
    "Gerald R. Ford",
    "James Carter",
    "Ronald Reagan",
    "George H. W. Bush",
    "William J. Clinton",
    "George W. Bush",
    "Barack Obama",
    "Donald J. Trump"]


//The questions array.
//I also didn't do extensive research on these, so some of them might be factually incorrect.
//I basically googled and ended up on the most reputable of sources: click-baity sites.
var questions = [
    "",
    "This President was the highest ranking U.S. officer of all time.",
    "Who was the first President to live in the White House?",
    "Before becoming President, he was the first Secretary of State.",
    "At 5 feet, 4 inches, he was the shortest President.",
    "One of this President’s presidential portraits was painted by Samuel Morse, the inventor of the Morse Code.",
    "This President became the only ex-President to serve in the U.S. House of Representatives.",
    "This President was the target of the first attempted Presidential assassination.",
    'The nickname of which President helped popularize the use of "OK"?',
    "This President has the longest inauguration address.",
    "Only after 33 days, this President was the first to succeed to the Presidency",
    "The First Lady of this President hosted the first Thanksgiving dinner in the White House.",
    "This President's death helped create the myth that cherries and milk are a deadly combination.",
    "This President ended up marrying his teacher.",
    "He was the first President to deliver his inaugural speech from memory.",
    "He was the only President who was a lifelong bachelor.",
    "He was the only Preisdent to have a patent.",
    "He was the first President to be impeached.",
    "Mark Twain wrote the memoirs of this President.",
    "This President started the tradition of the Easter egg roll on the White House lawn.",
    "This President was the second President to get assassinated.",
    "This President requested a standardized time, and thus helped create the Greenwich Meridian and international standardized time.",
    "This President became the first to marry in the White House",
    "He was the first President to use electricity in the White House.",
    "He was the only President to be elected to two non-consecutive terms in office.",
    "His face appears on the $500 bill.",
    "This President survived an assassination attempt, and then immediately went on to deliver a scheduled speech with the bullet still inside him.",
    "This President was the only President who also served as Chief Justice.",
    "Some politicians are justifying the impeachment of Trump with the 25th amendment. This amendment exists because of this President.",
    "Albert B. Fall was the first U.S. cabinet official sentenced to prison. He served under this President.",
    "This President was the only President to be on the 4th of July.",
    "Before becoming President, he he starred in the first television broadcast in American history.",
    "This President might not have had Polio, but another disease that led to his paralysis.",
    "The Chicago Daily Tribune famously printed a false headline about this President.",
    "This President was once the president of Columbia University. He also helped the General Studies school of Columbia.",
    'The Misfits released a song titled "Bullet"; it was about this President.',
    "This President had a nickname for his penis: Jumbo.",
    "This President ran a failed orange juice business.",
    "Lyndon B Johnson once said this: He's a nice fellow but he spent too much time playing football without a helmet. Which President was he referring to?",
    "This President gave up a military career to save the family peanut farm.",
    "He was the first elected President to have been divorced.",
    "While the captain of Yale's baseball team, this President met Babe Ruth.",
    "He was the first President to win a Grammy",
    "He was the first President with an MBA degree",
    "Keegan-Michael Key played an anger translator for this President",
    "This president is ranked the worst in US history"
]

var score = 0; //Starting score is 0.
var timer_display; //Used for setInterval.
var number_of_rounds = 5; //Current round number.
const NUMBER_OF_ROUNDS = 5; //Number of rounds in the trivia game.
const ROUND_TIME = 30; //How long each round lasts.
const END_ROUND_TIME = 3000; //The time in milliseconds between rounds.

//Randomly selects a function. Button functionaliy also defined here.
function generateQuestion() {
    var guess = Math.floor(Math.random() * (presidentList.length - 1)) + 1;
    $(".question").html('<p class="text-center">'+questions[guess]+"</p>");
    generateAnswer(guess);

    $("button").on("click", function () {
        clearInterval(timer_display);
        $("button").attr("disabled", "disabled");
        $("#"+guess).addClass("btn-success");
        if (this.id == guess) {
            score++;
            $(this).addClass("btn-success");
            $(".display_bottom").html('<p class="text-center">Correct!</p>');

        }
        else {
            $(this).addClass("btn-danger");
            score--;
            $(".display_bottom").html('<p class="text-center">Wrong!</p>');

        }
        setTimeout(startRound, END_ROUND_TIME);
    });
    return guess; 
};

//Answer generation.
//The correct answer always corresponds to the question.
//For example, the answer to questions[5] is presidentList[5]
//Along with the correct answer, we also generate 3 unique random numbers for the wrong choices.
function generateAnswer(num) {
    var wrong = []; //Array to hold the answers.
    $(".answer").html(""); //Clears the div so the buttons from the previous round is removed.
    wrong.push(num); //Push the correct answer.
    //Generate a random number. The loop adds numbers to the array only if it is unique.
    while (wrong.length != 4) {
        var temp = Math.floor(Math.random() * (presidentList.length - 1)) + 1;
        for (var i = 0; i < wrong.length; i++) {
            if (wrong[i] == temp) {
                temp = 0;
                break;
            }
        }
        if (temp != 0)
            wrong.push(temp);
    }
    //Randomly sort the answers.
    wrong.sort(function () { return 0.5 - Math.random() });
    //Add the buttons to the answer div.
    wrong.forEach(function (president) {
        var trivia_button = $('<button class="btn btn-primary btn-lg mx-auto">');
        trivia_button.attr("id", president);
        trivia_button.text(presidentList[president]);
        $(".answer").append(trivia_button);
    });
};

//This function starts all rounds, including the first round.
//Also does endgame checks.
function startRound() {
    $(".display_intro").html("");
    if (number_of_rounds == 0) {
        
        $(".display_top").html('<p class="text-center">Game over!</p>');
        $(".question").html("");
        $(".answer").html("");
        $(".display_bottom").html('<p class="text-center">Your score: ' + score + '</p>');
    }
    else {
        //set local timer to const ROUND_TIME defined above.
        //Display the local timer counting down.
        var timer = ROUND_TIME;
        $(".display_top").html('<p class="text-center">Time left: '+ timer + "</p>");
        $(".display_bottom").text("");
        var temp = generateQuestion();
        timer_display = setInterval(function () {
            $(".display_top").html('<p class="text-center">Time left: '+ --timer + "</p>");
            if (timer < 0) {
                $(".display_top").html('<p class="text-center">Time left: Time is up!</p>');
                clearInterval(timer_display);
                $(".display_bottom").text("No answer given!");
                $("button").attr("disabled", "disabled");
                $("#"+temp).addClass("btn-success");
                setTimeout(startRound, END_ROUND_TIME);
            }
        }, 1000);
    }
    number_of_rounds--;
}

//On page load, start with instructions of the game.
$(document).ready(function () {
    $(".display_intro").append("Welcome to Presidential Trivia!<br>");
    $(".display_intro").append("Each correct answer rewards 1 point. Each wrong answer deducts 1 point.<br>");
    $(".display_intro").append("Each unanswered question is worth 0 points.<br><br>");
    $(".display_intro").append($('<button class="btn btn-primary btn-lg" onclick="startRound()">Click me to start the game!</button>'));

});