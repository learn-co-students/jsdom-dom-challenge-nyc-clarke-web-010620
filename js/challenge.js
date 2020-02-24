function add_li(ul, content) {
    let li = document.createElement('li')
    li.innerHTML = content 
    ul.append(li)
}


let counter = document.getElementById("counter") // 
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let likeButton = document.getElementById("heart")
let pauseButton = document.getElementById("pause")
let form = document.getElementById("comment-form")
let comments = document.getElementById("list")
let ul = document.createElement("ul")
let body = document.body
comments.append(ul)
let likesUl = document.getElementsByClassName('likes')[0]
let hash = {}




const increment = function(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1
    }

setInterval(increment, 1000)

document.addEventListener("click", function(event){
    // counter for numbers 
    let counterNumber = counter.innerHTML
    if (event.target === plusButton) {
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    }
    if (event.target === minusButton) {
        counter.innerHTML = parseInt(counter.innerHTML) - 1
    }
    if (event.target === likeButton){
        if (hash[counterNumber] === undefined) {
            hash[counterNumber] = 1
        } else {
            
            hash[counterNumber] += 1
        }
        let phrase = `${counterNumber} has been liked ${hash[counterNumber]} times`
        add_li(likesUl, phrase) 
    }
    
})

form.addEventListener("submit", function(event){
    let commentInput = document.getElementById("comment-input")
    event.preventDefault()
    add_li(ul, commentInput.value)
    commentInput.value = ""
    // console.log(li)
    // let li = document.createElement('li')
    // li.innerHTML = commentInput.value
    // ul.append(li)
})
