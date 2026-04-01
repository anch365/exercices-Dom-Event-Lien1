let btn = document.querySelector('button');
// console.log(btn);

// btn.onclick = function () {
//     document.querySelector("#lastname").value = "";
//     document.querySelector("#firstname").value = "";
//     document.querySelector("#city").value = "";
    
// };

btn.addEventListener("click", handleClickBtn);

function handleClickBtn() {
    document.querySelector("#lastname").value = "";
    document.querySelector("#firstname").value = "";
    document.querySelector("#city").value = "";
};