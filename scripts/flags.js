const heading = document.querySelector('.title');
const pic1 = document.querySelector('.UsFlags');
pic1.addEventListener('mouseover', changeTitle);
pic1.addEventListener('mouseout', returnTitle);
pic1.addEventListener('mouseover', changeImg1);
pic1.addEventListener('mouseout', returnImg1);
const pic2 = document.querySelector('.Ethiopia')
pic2.addEventListener('mouseover', changeTitle2);
pic2.addEventListener('mouseout', returnTitle2);
pic2.addEventListener('mouseover', changeImg2);
pic2.addEventListener('mouseout', returnImg2);


function changeTitle(){
    document.querySelector('.title').innerHTML = "United States";
}

function returnTitle(){
    document.querySelector('.title').innerHTML = "Countries and Flags";
}

function changeImg1(){
    document.querySelector('.UsFlags').src ="images/USCountry.webp";
}

function returnImg1(){
    document.querySelector('.UsFlags').src ="images/AmericanFlag.jpg";
}

//for second image

function changeTitle2(){
    document.querySelector('.title').innerHTML = "Ethiopia";
}

function returnTitle2(){
    document.querySelector('.title').innerHTML = "Countries and Flags";
}

function changeImg2(){
    document.querySelector('.Ethiopia').src ="images/Ethiopia.webp";
}

function returnImg2(){
    document.querySelector('.Ethiopia').src ="images/ethiopiaFlag.jpg";
}