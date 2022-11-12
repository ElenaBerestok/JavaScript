const greeting = () => {
    const title = document.createElement('h1');
    title.innerText = 'Добро пожаловать';

    document.body.append(title)
}

const subtitle = (N) => {
    const text = document.createElement('h2');
    text.innerText = `Вы заходили раз: ${N}`

    document.body.append(text)
}


const visitFunction = () => {

    const visitingSite = localStorage.getItem("amount")
    console.log(visitingSite)
    localStorage.setItem("amount", Number(visitingSite)+1)


    if (Number(visitingSite) > 0){
        greeting();
        subtitle(Number(visitingSite) + 1)
    } else {
        greeting()
    }

    return visitingSite
} 

const visitCount = visitFunction()
console.log(visitCount)
