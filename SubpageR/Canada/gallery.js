function openImage(img) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = img.src;
  imgText.innerHTML = img.alt;
  document.getElementById("expandedContainer").style.display = "block";
}

function closeImage() {
  document.getElementById("expandedContainer").style.display = "none";
}
