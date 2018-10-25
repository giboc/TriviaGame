var presidentList = [ "",
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




function randomNum(){
    setInterval(function(){
        var num = Math.floor(Math.random()*(presidentList.length-1))+1;
        $(".test").append(presidentList[num]+": " + num + "<br>");
    },10);
}

function generateAnswer(num){
    var wrong = [];
    $(".answer").html("");
    wrong.push(num);
    while(wrong.length!=4){
        var temp = Math.floor(Math.random()*(presidentList.length-1))+1;
        for(var i=0; i<wrong.length; i++){
            if(wrong[i]==temp){
                temp = 0;
                break; 
            }
        }
        if (temp!=0)
            wrong.push(temp);


    }

    wrong.sort(function(){return 0.5 - Math.random()});
    
    wrong.forEach(function(president){
        
        var trivia_button = $("<button>");
        trivia_button.attr("id",president);
        trivia_button.text(presidentList[president]);
        console.log(trivia_button);
        $(".answer").append(trivia_button); 
    });

    

}

$(document).ready(function(){
    setInterval(function(){     
        var guess = Math.floor(Math.random()*(presidentList.length-1))+1;
        $(".question").html("Who was the "+ guess+ " president?<br>");
        generateAnswer(guess);
        $("button").on("click",function(){
        if (this.id == guess){
            alert("Correct!");
           // generateAnswer(Math.floor(Math.random()*(presidentList.length-1))+1);
           continue;
        }
        
        else{
            alert("WRONG");
            //generateAnswer(Math.floor(Math.random()*(presidentList.length-1))+1);
            continue;
        }
        });
    },10000);

});