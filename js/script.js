let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchform.classList.toggle('active');
}


function totalClick(click) {

const totalclicks = document.getElementById('totalClicks');
const sumvalue = parseInt(totalclicks.innerText) + click;

console.log(sumvalue + click);

  totalclicks.innerText = sumvalue;

if(sumvalue < 0) {

  totalclicks.innerText = 0;

}

}

function totalClicks(click) {

  const totalclickss = document.getElementById('totalClickss');
  const sumvalue = parseInt(totalclickss.innerText) + click;
  
  console.log(sumvalue + click);
  
    totalclickss.innerText = sumvalue;
  
  if(sumvalue < 0) {
  
    totalclickss.innerText = 0;
  
  }
  
  }


  // const stars = document.querySelectorAll(".stars i");
  // stars.forEach((star, index1) => {
  //   star.addEventListener("click", () => {
  //     stars.forEach((star, index2) => {
  //       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");




