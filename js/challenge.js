window.addEventListener("DOMContentLoaded", function() {

    window.setInterval(incrementer, 1000);

    function incrementer() {
        let counter = document.getElementById('counter');
        let counterNum = parseInt(counter.innerText, 10);
        counterNum++;
        counter.innerText = counterNum;
    }
    function decrementer() {
        let counter = document.getElementById('counter');
        let counterNum = parseInt(counter.innerText, 10);
        counterNum--;
        counter.innerText = counterNum;
    }

    const plus = document.getElementById('plus');

    plus.addEventListener('click', function() {
        incrementer();
    });

    const minus = document.getElementById('minus');

    minus.addEventListener('click', function() {
        let counter = document.getElementById('counter');
        let counterNum = parseInt(counter.innerText, 10);
        if (counterNum > 0) { decrementer() }
        else {console.log("likes cannot go below 0")} 
    });

    const like = document.getElementById('heart');

    like.addEventListener('click', function() {
        const ul = document.querySelector('ul'); 
        let counter = document.getElementById('counter');
        let counterNum = parseInt(counter.innerText, 10);
        let collection = [];
        if (ul.childNodes.length > 0) {
            Array.from(ul.children).forEach(function (li) {
                    if (li.counter == counterNum) {
                        li.numLikes++; 
                        li.innerText = `${counterNum} has been liked ${li.numLikes} times`;        
                    } else if (li.counter == collection.forEach(num)
                    ) {

                    } else { const li = document.createElement('li')
                    li.counter = counterNum;
                    li.numLikes = 1;
                    li.innerText = `${counterNum} has been liked ${li.numLikes} times`;
                    collection.push(counterNum);
                    ul.appendChild(li);
                    }
            })    
        } else {
            const li = document.createElement('li');
            li.counter = counterNum;
            li.numLikes = 1;
            li.innerText = `${counterNum} has been liked ${li.numLikes} times`;
            collection.push(counterNum);
            ul.appendChild(li);
        }
    })












})