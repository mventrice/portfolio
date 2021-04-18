console.log("Modal javascript running")

var modal1 = document.getElementById("persona-1-modal")
var image1 = document.getElementById("persona-1")
var modalImage1 = document.getElementById("persona-1-modal-content")
var KEY = {
    ESCAPE: 27,
    TAB: 9
  }
/*Defining functions*/

function openModal(){
    modal1.style.display = "block";
    modalImage1.src = image1.src;
}

function closeModal(){
    modal1.style.display = "none"
}

/*Running Functions*/
if (window.innerWidth > 991){
image1.onclick = function() {openModal()};
document.getElementById("close-1").onclick = function() {closeModal()}


window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
}}

window.onkeydown = function(event){
    modal1.style.display = "none"
}

}
