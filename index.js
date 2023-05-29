let btn = document.querySelector(".control-button span")
let nameSpan = document.querySelector(".info-container span")
let cover = document.querySelector(".control-button")
let gameContainer = document.querySelector(".memory-game-blocks")
let blocks = Array.from(gameContainer.children)
let OrderRange = [...Array(blocks.length).keys()]
let duration = 1000 ;
let min = document.querySelector(".min")
let sec = document.querySelector(".secend")



btn.onclick = function () {
    let nameuser = prompt("what is your name")
    let timemin = prompt("your time width minute")
    let timesec = prompt("your time width secend")
    if (nameuser == null || nameuser === "") {
        nameSpan.innerHTML = "unknown"
    }
    else {
        nameSpan.innerHTML = nameuser ;
    }
    
    min.innerHTML = `${timemin}:${timesec}` ; 
    timereload();
    cover.remove();
    timermin();
    timersec(timesec);
    document.getElementById("short").play();
}

blocks.forEach((block , index) => {
    shafell(OrderRange);
    block.style.order = OrderRange[index] ;
    block.addEventListener("click" , () => {
    flibblock(block);     
    })
})


function flibblock (selectblock) {
    selectblock.classList.add("is-flipped")
    let allfilepped = blocks.filter(flippedblock => flippedblock.classList.contains("is-flipped"));

    if (allfilepped.length === 2) {

        stopclicking();
        cheak(allfilepped[0],allfilepped[1])

    }
}

function cheak (first,second) {
    let tries = document.querySelector(".tries span")
    if (first.dataset.name === second.dataset.name) {
        first.classList.remove("is-flipped")
        second.classList.remove("is-flipped")
        first.classList.add("has-match")
        second.classList.add("has-match")
        document.getElementById("sucess").play();

    } else {
        tries.innerHTML = parseInt(tries.innerHTML)+1; 
        setTimeout(()=> {
        first.classList.remove("is-flipped")
        second.classList.remove("is-flipped")
        },duration)
        document.getElementById("fail").play();
    }
}

function stopclicking () {
    gameContainer.classList.add("no-clicking")

    setTimeout(() => {
        gameContainer.classList.remove("no-clicking")
    },duration)
}


function shafell (array) {
    let current = array.length,
    temp,
    random;

    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--;
        temp = array[current]; 
        array[current] = array[random];
        array[random] = temp;
    }
    return array ;
}


function timereload () {
    setTimeout(()=> {
        window.location.reload();
    },60000)
}








