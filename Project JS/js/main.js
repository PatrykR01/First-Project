const arrowIcon = document.querySelector(".fas");
const btn = document.querySelector(".arrow");
const pic = document.querySelector(".item1");

function turnPic() {
  pic.classList.toggle("show");

  if (pic.classList.contains("show")) {
    console.log(`OK`);
  } else {
    console.log(`NIE OK`);
  }

  if (pic.classList.contains("show")) {
    arrowIcon.style.transform = 'rotate(180deg)'
  } else {
    arrowIcon.style.transform = 'rotate(0deg)'
  }
}

btn.addEventListener("click", turnPic);
