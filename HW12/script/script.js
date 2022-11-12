const createTooltip = (elem, textTooltip) => {
    const tooltip = document.createElement('div');
    console.log(tooltip)

    // tip bottom - Стрелка диалогового окна
    tooltip.className = `tooltip tip bottom`;

    tooltip.style.cssText = `
        position: absolute;
        width: 246px;
        height: 43px;
        line-height: 43px;
        color: white;
        background-color: hotpink;
        width: 150px;
        border-radius: 10px;
        text-align: center;
    `;

    button.append(tooltip)

    let elemCoords = elem.getBoundingClientRect();
    
    tooltip.style.left = elemCoords.left + (0.15*(elemCoords.left)) + 'px';
    tooltip.style.top = elemCoords.top - tooltip.offsetHeight - (0.3*(tooltip.offsetHeight)) + 'px';

    document.body.append(tooltip)

    tooltip.innerText = textTooltip;

    return tooltip;

};

const button = document.querySelector('.button')

createTooltip (button, 'It`s a tooltip')


