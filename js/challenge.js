// get buttons n shit
const counter = document.getElementById('counter')
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let heart = document.getElementById("heart")
let pause = document.getElementById("pause")
let submit = document.getElementById("submit")
const body = document.querySelector("body")
const likesUl = document.getElementsByClassName("likes")

// counter Functions
let isPaused = true
const countUp = () => {
    if (isPaused){
        counter.innerText++
    }
};

const countDown = () => {counter.innerText--};
let createCounter = setInterval(countUp, 1000);

// like functions
const createLikes = targetObject => {
    console.dir(targetObject)
    if (targetObject.dataset.time){
        targetObject.data.likes = parseInt(targetObject.data.likes)+1
    } else{
        let li = document.createElement("li")
        li.setAttribute("data-time", counter.innerText)
        li.setAttribute("data-likes", "1")
        likesUl[0].append(li)
    }
};

// create a li
// must have the time when liked
// if the time is already there increment the likes




// body event listener for click
body.addEventListener("click", function(event){
    switch (event.target.id) {
        case "minus":
            countDown();
            break;
        case "plus":
            countUp();
            break;
        case "heart":
            createLikes(event.target);
            break;
        case "pause":
            if(pause.innerText === "pause"){
                // clearInterval(createCounter)
                minus.disabled = true
                plus.disabled = true
                heart.disabled = true
                pause.id = "resume"
                pause.innerText = "resume"
                isPaused = false
                break;
            } else {
                // createCounter = setInterval(countUp, 1000)
                isPaused = true
                minus.disabled = false
                plus.disabled = false
                heart.disabled = false
                pause.id = "pause"
                pause.innerText = "pause"
                break;
            }
        case "submit":
            event.preventDefault();
            createComment();
            break;
        default:
            break;
    }
})