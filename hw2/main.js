// thisElement.className = "new-class1 new-class2";

Travel_src = [
    "./Photos/Beach.jpeg",
    "./Photos/Mountain.jpg",
    "./Photos/Road.jpg",
    "./Photos/Sunset.jpg",
    "./Photos/River.jpg",
    "./Photos/Tree.jpg"
]

Dog_src = [
    "https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/1._dingo_on_sand_credit_chontelle_burns_nouveau_rise_photography_3.jpeg",
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Golden_Retriever_Carlos_%2810581910556%29.jpg/1200px-Golden_Retriever_Carlos_%2810581910556%29.jpg",
    "http://i.imgur.com/8KNriBK.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/1200px-Taka_Shiba.jpg",
    "https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/01/1515005599-miniature-pinscher.jpg"
]

previewPic = document.getElementsByClassName("prev_img");

console.log(previewPic)

function to_main (e) 
{
    
    var mainImg = document.getElementById("main");
    var main_src = mainImg.src;
    var prev_source = e.children[0].src;
    var selected = document.getElementsByClassName("Border")
    selected[0].classList.remove("Border")

    console.log(main_src)

    mainImg.src = prev_source;
    // e.children[0].src = main_src;
    e.children[0].classList.add("Border")
}

function changeSrc (e)
{
    if (e.textContent === "Pictures From Work")
    {
        alert("Empty Album !")
        return
    }

    album = document.getElementsByClassName("Selected_album")
    album[0].classList.remove("Selected_album")
    img = document.getElementsByClassName("prev_img")
    if (e.textContent === "Dog Pictures")
    {
        for (var i=0; i<Dog_src.length; i++)
        {
            img[i].children[0].src = Dog_src[i];
        }
        document.getElementById("main").src = Dog_src[0]
    }

    else if (e.textContent === "Travel Pics")
    {
        for (var i=0; i<Travel_src.length; i++)
        {
            img[i].children[0].src = Travel_src[i];
        }
        document.getElementById("main").src = Travel_src[0]
    }
    

    title = document.getElementById("Title")
    title.innerHTML = e.textContent
    e.classList.add("Selected_album")
}