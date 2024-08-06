import './style.css';
import Bishop from '../Images/bishop.jpg';
import Douche from '../Images/douchebag.png';
import Duck from '../Images/duckess.webp';
import Girl from '../Images/girl.webp';
import Logo from '../Images/logo.png';
import Left from '../Images/left-arrow.png';
import Right from '../Images/right-arrow.png';

display();

function display() {
    let divOne = document.querySelector('#div-one');
    let divTwo = document.querySelector('#div-two');
    let divThree = document.querySelector('#div-three');
    let divFour = document.querySelector('#div-four');
    let divFive = document.querySelector('#div-five');
    let leftArrow = document.querySelector('#left-arrow');
    let rightArrow = document.querySelector('#right-arrow');
    let imgOne = document.createElement('img');
    let imgTwo = document.createElement('img');
    let imgThree = document.createElement('img');
    let imgFour = document.createElement('img');
    let imgFive = document.createElement('img');
    let imgSix = document.createElement('img');
    let imgSeven = document.createElement('img');

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
}