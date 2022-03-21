// Get the modal
let modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelector("#image");
let modalImg = document.querySelector("#img01");
let captionText = document.querySelector("#caption");

//Calculate the surrounding div's width according to the containing image's width
let imgWidth = img.width + "px";
let imgDiv = document.querySelector("#img-div");
imgDiv.style.setProperty('max-width', `calc(${imgWidth} + 2.2rem)`);

//Display modal when image is clicked
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

const modalDisplay = () => modal.style.display = "none";

// When the user clicks on <span> (x) or the modal image, close the modal
span.onclick = modalDisplay;
modalImg.onclick = modalDisplay