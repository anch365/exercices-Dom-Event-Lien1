let imgs = document.querySelectorAll("img");
// console.log(imgs);

imgs.forEach(function(img){
    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("mouseleave", handleMouseEnter);
});

function handleMouseEnter(event) {
    let img = event.target;
    
    if (event.type === "mouseenter" ) {
        img.src = img.src.replace(".jpg", "_2.jpg")
    } else if (event.type === "mouseleave") {
        img.src = img.src.replace("_2.jpg", ".jpg")
    };
};

