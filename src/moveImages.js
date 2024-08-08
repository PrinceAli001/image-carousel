export default function moveImages(postion) {
    let divOne = document.querySelector('#div-one');
    let divTwo = document.querySelector('#div-two');
    let divThree = document.querySelector('#div-three');
    let divFour = document.querySelector('#div-four');
    let divFive = document.querySelector('#div-five');
    let dotOne = document.querySelector('#dot-one');
    let dotTwo = document.querySelector('#dot-two');
    let dotThree = document.querySelector('#dot-three');
    let dotFour = document.querySelector('#dot-four');
    let dotFive = document.querySelector('#dot-five');

    switch (postion) {
        case'zero':
            divOne.setAttribute('style','grid-area: 1/5/2/6; display: block;');
            divTwo.setAttribute('style','grid-area: 1/6/2/7; display: none;');
            divThree.setAttribute('style','grid-area: 1/7/2/8; display: none;');
            divFour.setAttribute('style','grid-area: 1/8/2/9; display: none;');
            divFive.setAttribute('style','grid-area: 1/9/2/10; display: none;');

            dotOne.setAttribute('style','height: 12px; width: 12px; background-color: #ffa500;');
            dotTwo.setAttribute('style','height: 8px; width: 8px;');
            dotThree.setAttribute('style','height: 8px; width: 8px;');
            dotFour.setAttribute('style','height: 8px; width: 8px;');
            dotFive.setAttribute('style','height: 8px; width: 8px;');
            break;
        case'one':
            divOne.setAttribute('style','grid-area: 1/4/2/5; display: none;');
            divTwo.setAttribute('style','grid-area: 1/5/2/6; display: block;');
            divThree.setAttribute('style','grid-area: 1/6/2/7; display: none;');
            divFour.setAttribute('style','grid-area: 1/7/2/8; display: none;');
            divFive.setAttribute('style','grid-area: 1/8/2/9; display: none;');

            dotOne.setAttribute('style','height: 8px; width: 8px; background: none;');
            dotTwo.setAttribute('style','height: 12px; width: 12px; background-color: #ffa500;');
            dotThree.setAttribute('style','height: 8px; width: 8px;');
            dotFour.setAttribute('style','height: 8px; width: 8px;');
            dotFive.setAttribute('style','height: 8px; width: 8px;');
            break;
        case'two':
            divOne.setAttribute('style','grid-area: 1/3/2/4; display: none;');
            divTwo.setAttribute('style','grid-area: 1/4/2/5; display: none;');
            divThree.setAttribute('style','grid-area: 1/5/2/6; display: block;');
            divFour.setAttribute('style','grid-area: 1/6/2/7; display: none;');
            divFive.setAttribute('style','grid-area: 1/7/2/8; display: none;');

            dotOne.setAttribute('style','height: 8px; width: 8px; background: none;');
            dotTwo.setAttribute('style','height: 8px; width: 8px;');
            dotThree.setAttribute('style','height: 12px; width: 12px; background-color: #ffa500;');
            dotFour.setAttribute('style','height: 8px; width: 8px;');
            dotFive.setAttribute('style','height: 8px; width: 8px;');
            break;
        case'three':
            divOne.setAttribute('style','grid-area: 1/2/2/3; display: none;');
            divTwo.setAttribute('style','grid-area: 1/3/2/4; display: none;');
            divThree.setAttribute('style','grid-area: 1/4/2/5; display: none;');
            divFour.setAttribute('style','grid-area: 1/5/2/6; display: block;');
            divFive.setAttribute('style','grid-area: 1/6/2/7; display: none;');

            dotOne.setAttribute('style','height: 8px; width: 8px; background: none;');
            dotTwo.setAttribute('style','height: 8px; width: 8px;');
            dotThree.setAttribute('style','height: 8px; width: 8px;');
            dotFour.setAttribute('style','height: 12px; width: 12px; background-color: #ffa500;');
            dotFive.setAttribute('style','height: 8px; width: 8px;');
            break;
        case'four':
            divOne.setAttribute('style','grid-area: 1/1/2/2; display: none;');
            divTwo.setAttribute('style','grid-area: 1/2/2/3; display: none;');
            divThree.setAttribute('style','grid-area: 1/3/2/4; display: none;');
            divFour.setAttribute('style','grid-area: 1/4/2/5; display: none;');
            divFive.setAttribute('style','grid-area: 1/5/2/6; display: block;');

            dotOne.setAttribute('style','height: 8px; width: 8px; background: none;');
            dotTwo.setAttribute('style','height: 8px; width: 8px;');
            dotThree.setAttribute('style','height: 8px; width: 8px;');
            dotFour.setAttribute('style','height: 8px; width: 8px;');
            dotFive.setAttribute('style','height: 12px; width: 12px; background-color: #ffa500;');
            break;

        default:
            divOne.setAttribute('style','grid-area: 1/5/2/6;');
            divTwo.setAttribute('style','grid-area: 1/6/2/7;');
            divThree.setAttribute('style','grid-area: 1/7/2/8;');
            divFour.setAttribute('style','grid-area: 1/8/2/9;');
            divFive.setAttribute('style','grid-area: 1/9/2/10;');
            break;
    }
}