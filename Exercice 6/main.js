let images = document.querySelectorAll("img");
// console.log(images);

images.forEach(function(img) {
    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseEnter(event) {
    let img = event.target;  

    if (event.type === "mouseenter") {
        img.src = img.src.replace(".jpg", "_2.jpg") 
    };
};

function handleMouseLeave(event) {
    let img = event.target;  

    if (event.type === "mouseleave") {
        img.src = img.src.replace("_2.jpg",".jpg")
    };
};