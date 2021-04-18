// console.log("Modal javascript running")

// var modal1 = document.getElementById("persona-1-modal")
// var image1 = document.getElementById("persona-1")
// var modalImage1 = document.getElementById("persona-1-modal-content")
// var close1 = document.getElementById("close-1")
// /*Defining functions*/

// function openModal(){
//     modal1.style.display = "block";
//     modalImage1.src = image1.src;
// }

// function closeModal(){
//     modal1.style.display = "none"
// }

// /*Running Functions*/
// if (window.innerWidth > 991){
// image1.onclick = function() {openModal()};
// close1.onclick = function() {closeModal()}


// window.onclick = function(event) {
//     if (event.target == modal1) {
//       modal1.style.display = "none";
// }}

// window.onkeydown = function(event){
//     modal1.style.display = "none"
// }

// }

var modals = document.querySelectorAll(".modal")
var images = document.querySelectorAll(".persona-image")
var modalImages = document.querySelectorAll(".persona-modal-content")
var closeButtons = document.querySelectorAll(".close")
console.log(images)

images.forEach(function (item, index) {
    item.addEventListener('click', function() {
        openModal(index)
    });
    item.addEventListener('keydown', function(e) {
        console.log(e.keyCode)
        if (e.keyCode == 13) {
            openModal(index)
            }
    });
    item.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            closeModal(index)
        }
    });
    // item.addEventListener('click', function(e) {
    //     if (e.target == modals[index]) {
    //     console.log("Click modal")
    //     closeModal(index)
    //     }
    // });
});


modals.forEach(function (item, index) {
   item.addEventListener("click", function () {
    closeModal(index)
   });
//    item.addEventListener('keydown', function(e) {
//         console.log(e.keyCode)
//         if (e.keyCode == 27) {
//          closeModal(index)
//         }
//     });
});

// modals.forEach(function (event, index){
//     event.addEventListener('click', function() {
//     if (event.target == modals[index]) {
//         modals[index].style.display = "none";
//     }
// });

// });

// item.onclick = function(event) {
//     if (event.target == modal[index]) {
//       modal[index].style.display = "none";
// }}

// window.onkeydown = function(){
//     modals.style.display = "none"
// }

function openModal(index) {
    // modal1.style.display = "block";
    //     modalImage1.src = image1.src;
    console.log(modals[index])
    modals[index].style.display = "block";
    modalImages[index].src = images[index].src
    modalImages[index].alt = images[index].alt
 }

function closeModal(index) {
    modals[index].style.display = "none"
}
