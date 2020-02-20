const counter = document.getElementById('counter')
let seconds = 0
let enabled = true
function incrementSeconds(){
    if (enabled === true){
        seconds += 1
        counter.innerText = seconds
        numOfLikes = 0
    }
}
const count = setInterval(incrementSeconds, 1000)
counter.addEventListener("DOMContentLoaded", function(){
    count
})
const plus = document.getElementById('plus')
plus.addEventListener('click', function(){
    if (enabled === true){
        seconds += 1
    }
})
const minus = document.getElementById('minus')
minus.addEventListener('click', function(){
    if (enabled === true){
        seconds -= 1
    }
})
const likes = document.getElementsByClassName('likes')[0]
const heart = document.getElementById('heart')
let numOfLikes = 0
heart.addEventListener('click', function(){
    if (enabled === true){
        numOfLikes += 1
        const likeTag = document.createElement('p')
        likeTag.textContent = `${seconds} has been liked ${numOfLikes} times.`
        likes.appendChild(likeTag)
    }
})
const pause = document.getElementById('pause')
const resume = document.createElement('button')
resume.innerText = 'resume'
pause.addEventListener('click', function(){
    enabled = false
    document.body.replaceChild(resume, pause)
})
resume.addEventListener('click', function(){
    enabled = true
    document.body.replaceChild(pause, resume)
})
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const commentTag = document.createElement('p')
    commentTag.textContent = e.target.querySelector('#comment-input').value
    comments.appendChild(commentTag)
})