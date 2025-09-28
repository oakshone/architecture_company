import { reviews } from "../data/reviews.js";
console.log(reviews)

const myTarget = document.querySelector("#cards");
for (let x = 0; x < reviews.length; x++) {

    // section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].customer_name

    const myStar = document.createElement('p')
    myStar.textContent = reviews[x].star_rating

    const myComment = document.createElement('p')
    myComment.textContent = reviews[x].comment

      // name of customer
    mySection.appendChild(myName);
    
    mySection.appendChild(myStar)
  
    
    // comment of each customer
    mySection.appendChild(myComment);
    // add a new card to a page
    myTarget.appendChild(mySection);

}

const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})



// current year in footer
const theTime = new Date();
document.querySelector('#year').textContent = theTime.getFullYear();
