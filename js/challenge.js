const counter = document.getElementById('counter')
let seconds = 0
let enabled = true
function incrementSeconds(){
    if (enabled === true){
        seconds += 1
        counter.innerText = seconds
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
        counter.innerText = seconds
    }
})
const minus = document.getElementById('minus')
minus.addEventListener('click', function(){
    if (enabled === true){
        seconds -= 1
        counter.innerText = seconds
    }
})
const likes = document.getElementsByClassName('likes')[0]
const heart = document.getElementById('heart')
const likeCount = {}
heart.addEventListener('click', function(){
    if (enabled === true){
        if (likeCount[seconds]){
            const likeTag = document.querySelector(`[data-number='${seconds}']`)
            likeCount[seconds]++
            numOfLikes = likeCount[seconds]
            likeTag.textContent = `${seconds} has been liked ${numOfLikes} times.`
        } else {
            likeCount[seconds] = 1
            const likeTag = document.createElement('p')
            likeTag.dataset.number = seconds
            likeTag.textContent = `${seconds} has been liked 1 time.`
            likes.appendChild(likeTag)
        }
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