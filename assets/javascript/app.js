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

//Starting score is 0.
var score = 0;

function randomNum() {
    setInterval(function () {
        var num = Math.floor(Math.random() * (presidentList.length - 1)) + 1;
        $(".test").append(presidentList[num] + ": " + num + "<br>");
    }, 10);
};

function generateQuestion() {
    $(".display").html("");
    var guess = Math.floor(Math.random() * (presidentList.length - 1)) + 1;
    $(".question").html(questions[guess]);
    generateAnswer(guess);

    $("button").on("click", function () {
        console.log("button clicked");
        console.log(this);
        if (this.id == guess) {
            score++;
            alert("Correct!");
        }
        else {
            score--;
            alert("WRONG");
        }
    });

    return guess;

};

function generateAnswer(num) {
    var wrong = [];
    $(".answer").html("");
    wrong.push(num);
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
    wrong.sort(function () { return 0.5 - Math.random() });
    wrong.forEach(function (president) {
        var trivia_button = $("<button>");
        trivia_button.attr("id", president);
        trivia_button.text(presidentList[president]);
        console.log(trivia_button);
        $(".answer").append(trivia_button);
    });
};

function startGame() {
    var answer = generateQuestion();
    
    setInterval(function () {
        generateQuestion();
        
    }, 10000);

};



$(document).ready(function () {
    $(".display").text("Welcome to Presidential Trivia! Click the button to start.");
    $(".display").append($('<button onclick="startGame()">Start game!</button>'));
    $("button").on("click", function () {
        console.log("button clicked");
        console.log(this);
        if (this.id == answer) {
            score++;
            alert("Correct!");
        }
        else {
            score--;
            alert("WRONG");
        }
    });
});