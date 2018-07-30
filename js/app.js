const card= document.querySelector(".whatUp");
const myPara = document.createElement('p');

$(".oneButton").on("click",function() {
  card.innerHTML ="The <strong>Greatest</strong> Ice Cream Flavors";
})

//Adding element and content that doesnt exist
// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

$(".buttonTwo").on("click",function() {
myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);
})


//
// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     Existing text/HTML content
//     <!-- beforeend -->
// </p>
// <!-- afterend -->
//method has to be called with two arguments:
//the location of the HTML
//the HTML text that is going to be inserted
//demo

const mainHeadingTwo = document.querySelector('.testThree');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';
$(".buttonThree").on("click",function() {
mainHeadingTwo.insertAdjacentHTML('afterend', htmlTextToAdd);;
})
;



const removeHeadings = document.querySelector('h1');
$(".buttonFour").on("click",function() {
  removeHeadings.remove();
})


const mainHeadingThree = document.querySelector('h4');

$(".buttonFive").on("click",function() {
  mainHeading.style.color = 'red';
})

const cssStyles = document.querySelector('body');
$(".buttonSix").on("click",function() {
cssStyles.style.cssText = 'color: white; background-color: red; font-size: 3.5em';
})
