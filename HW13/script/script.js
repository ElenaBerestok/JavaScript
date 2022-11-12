const imgArr = [...document.querySelectorAll('.img')]
console.log(imgArr);

const prevButton = document.getElementById('prev');

let i = 0;

const handlerButtonPrev = () => {
    imgArr[i].style.display = 'none';
    console.log(imgArr[i])
    i --;

    if(i == "-1"){
        i = imgArr.length -1;
    } 

    imgArr[i].style.display = 'block'
} 

prevButton.addEventListener('click', handlerButtonPrev)


const nextButton = document.getElementById('next');
console.log(nextButton)



const handlerButtonNext = () => {
    
    imgArr[i].style.display = 'none';
    console.log(imgArr[i])

    i++;

    if (i == imgArr.length){
        i = 0;
    }

    imgArr[i].style.display = 'block'
}

nextButton.addEventListener('click', handlerButtonNext)