// thisElement.className = "new-class1 new-class2";

previewPic = document.getElementsByClassName("prev_img");

console.log(previewPic)

function to_main (e) 
{
    
    var mainImg = document.getElementsByClassName("Main_pic");
    var main_src = mainImg[0].children[0].src;
    var prev_source = e.children[0].src;

    console.log(main_src)

    mainImg[0].children[0].src = prev_source;
    e.children[0].src = main_src;
}