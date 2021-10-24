const images = 
[
    "./images/pikachu.jpeg",
    "./images/charmander.png",
    "./images/squirtle.png",
    "./images/psyduck.png",
];

let currentImgIdx = 0;

let displayImg = document.getElementById("display"),
    prevButton = document.getElementById("previous"),
    nextButton = document.getElementById("next");

function checkIndex()
{
    if (currentImgIdx===0)
    {
        prevButton.classList.add("disabled");
    }
    else if (currentImgIdx === images.length - 1)
    {
        nextButton.classList.add("disabled");
    }
    else
    {
        prevButton.classList.remove("disabled");
        nextButton.classList.remove("disabled");
    }
}

function setImgSrc(index)
{
    checkIndex();
    displayImg.src = images[index];
}

setImgSrc(currentImgIdx);

function prevImg() 
{
    if (currentImgIdx >0) setImgSrc(--currentImgIdx);
}

function nextImg() 
{
    if (currentImgIdx < images.length -1) setImgSrc(++currentImgIdx);
}

