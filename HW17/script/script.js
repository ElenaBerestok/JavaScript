// Timer


let getTime = prompt('sec')
let counter = null;
let isActive = false;

let deadline = (getTime) => {
    const hours = Math.floor( (getTime/60/60) % 24 );
    const minutes = Math.floor( (getTime/60) % 60 );
    const seconds = Math.floor( getTime % 60 );

    if (getTime > 86400) {
        alert('Enter correct data')
        return
    }

    return {
        hours,
        minutes,
        seconds,
    }
}

function initializeTimer(id, endtime){  
        
    const timer = document.getElementById(id);
    const t = endtime; 

    timer.innerHTML = (String(t.hours).length < 2 ? ('0' + t.hours) : t.hours) + ':' + 
    (String(t.minutes).length < 2 ? ('0' + t.minutes) : t.minutes) + ':' +
    (String(t.seconds).length < 2 ? ('0' + t.seconds) : t.seconds)

};

initializeTimer('timer', deadline(getTime));


start = () => {
    isActive = true;
    initializeTimer('timer', deadline(getTime))
    
    return new Promise((resolve) => {
        counter = setInterval(() => {
            getTime--

            if (getTime <= 0) {
                isActive = false;
                clearInterval(counter);
                counter = null;
                resolve()
            }

            initializeTimer('timer', deadline(getTime))

        }, 1000)
    })

    
}

const pause = () => {
    isActive = false;
    clearInterval(counter);
    counter = null;
}

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    if (isActive || !getTime) {
        return
    }

    start().then(() => {
        alert ('Timer end!')
    })
});

const pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', pause)




