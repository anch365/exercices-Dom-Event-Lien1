let image = document.querySelector('#image1');


image.addEventListener("mouseenter", handleMouseEnter);

function handleMouseEnter() {
    image.src = "assets/image1_2.jpg"
}
 
image.addEventListener("mouseleave", handleMouseLeave)

function handleMouseLeave() {
    image.src = "assets/image1.jpg"

}
