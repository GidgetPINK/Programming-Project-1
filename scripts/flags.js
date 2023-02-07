const heading = document.querySelector('.title');
const pics = document.querySelector('.UsFlags');
pics.addEventListener('mouseover', changeTitle);
pics.addEventListener('mouseout', returnTitle);
pics.addEventListener('mouseover', changeImg);
pics.addEventListener('mouseout', returnImg);


function changeTitle(){
    document.querySelector('.title').innerHTML = "United States";
}

function returnTitle(){
    document.querySelector('.title').innerHTML = "Countries and Flags";
}

function changeImg(){
    document.querySelector('.UsFlags').src ="images/USCountry.webp";
}

function returnImg(){
    document.querySelector('.UsFlags').src ="images/AmericanFlag.jpg";
}