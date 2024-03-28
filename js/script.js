// banner auto slide
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex == n));
// }

// function showDivs(n) {
//   var i;
//   var imgList = document.getElementsByClassName("img-content");
//   if (n > imgList.length) slideIndex = 1;
//   else if (n < 1) slideIndex = imgList.length;

//   for (i = 0; i < imgList.length; i++) {
//     imgList[i].style.display = "none";
//   }

//   imgList[slideIndex - 1].style.display = 'block';

// }

// setInterval(() => {
//     plusDivs(1)
// }, 1000) ;
//   console.log(showDivs)

let indexSlide = 1; //{0, 1, 2}
showSlide(1);

function nextSlide(n) {
  showSlide((indexSlide += n));
}

function showSlide(n) {
  let listImage = document.getElementsByClassName("img-autoSlide");
  if (n > listImage.length) indexSlide = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }
  listImage[indexSlide - 1].style.display = "block";
  console.log("jumlah gambar " + listImage.length);
  console.log(indexSlide);
}

  setInterval(() => {
    nextSlide(1);
  }, 3000);
