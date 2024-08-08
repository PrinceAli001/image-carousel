import './style.css';
import Bishop from '../Images/bishop.jpg';
import Douche from '../Images/douchebag.png';
import Duck from '../Images/duckess.webp';
import Girl from '../Images/girl.webp';
import Logo from '../Images/logo.png';
import Left from '../Images/left-arrow.png';
import Right from '../Images/right-arrow.png';
import moveImages from './moveImages';

display();

function display() {
    let divOne = document.querySelector('#div-one');
    let divTwo = document.querySelector('#div-two');
    let divThree = document.querySelector('#div-three');
    let divFour = document.querySelector('#div-four');
    let divFive = document.querySelector('#div-five');
    let leftArrow = document.querySelector('#left-arrow');
    let rightArrow = document.querySelector('#right-arrow');
    let dotOne = document.querySelector('#dot-one');
    let dotTwo = document.querySelector('#dot-two');
    let dotThree = document.querySelector('#dot-three');
    let dotFour = document.querySelector('#dot-four');
    let dotFive = document.querySelector('#dot-five');
    let imgOne = document.createElement('img');
    let imgTwo = document.createElement('img');
    let imgThree = document.createElement('img');
    let imgFour = document.createElement('img');
    let imgFive = document.createElement('img');
    let imgSix = document.createElement('img');
    let imgSeven = document.createElement('img');
    let arr = ['zero','one','two','three','four'];
    let changedNumber = 0;
    let currentPosition;
    let interval;
    

    imgOne.src = Bishop;
    imgTwo.src = Douche;
    imgThree.src = Duck;
    imgFour.src = Logo;
    imgFive.src = Girl;
    imgSix.src = Left;
    imgSeven.src = Right;

    divOne.appendChild(imgOne);
    divTwo.appendChild(imgTwo);
    divThree.appendChild(imgThree);
    divFour.appendChild(imgFour);
    divFive.appendChild(imgFive);
    leftArrow.appendChild(imgSix);
    rightArrow.appendChild(imgSeven);


    function startInterval() {
        interval = setInterval(next, 5000);
    };
    function previous() {
        changedNumber-= 1;
        if (changedNumber < 0) {
            changedNumber = 0
        };
        currentPosition = arr[changedNumber];
        moveImages(currentPosition);
    };
    function next() {
        changedNumber+= 1;
        if (changedNumber > 4) {
            changedNumber = 0
        };
        currentPosition = arr[changedNumber];
        moveImages(currentPosition);
    };



    dotOne.addEventListener('click', () => {
        moveImages('zero');
        changedNumber = 0;
    });
    dotTwo.addEventListener('click', () => {
        moveImages('one');
        changedNumber = 1;
    });
    dotThree.addEventListener('click', () => {
        moveImages('two');
        changedNumber = 2;
    });
    dotFour.addEventListener('click', () => {
        moveImages('three');
        changedNumber = 3;
    });
    dotFive.addEventListener('click', () => {
        moveImages('four');
        changedNumber = 4;
    });
    leftArrow.addEventListener('click', previous);
    rightArrow.addEventListener('click', next);

    startInterval();
}