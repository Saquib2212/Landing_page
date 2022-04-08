/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// taking nav tag's unordered list tag and storing in variable to append li child to it
const navU=document.getElementById("navbar__list")

//taking section tag element in sectionTag variable,
const sectionTag=document.getElementsByTagName("section")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav



/*using a loop we will iterate through all section, and depending on number of section we will
  add li element to ul tag so as to make navigation bar dynamically
  */
for (let i = 0; i < sectionTag.length; i++) {
    const element = sectionTag[i];
    let navLi=document.createElement('li');
    // in HTML data attribute is already added so we will use this as a data to be displayed on navigation bar
    let sectionName=element.dataset.nav;

    //writing a HTML and adding this into each li element using innerHTML
    navLi.innerHTML=`<a class="menu__link">${sectionName}</a></li>`

    // for each li we will be adding event listener so that whenever a user click on the navigation element(li)
    // it will scroll to the that particular section
    navLi.addEventListener('click',function(evt){
        evt.preventDefault();
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    })

    navU.appendChild(navLi)   //append each li element to to ul tag


}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// for adding scroll effect, adding event listener to listen scroll
//iterating through a section so that whichever section in view its class will set to'your-active-class'
let navLink=document.querySelectorAll('li')
window.addEventListener('scroll',function(evt){
    evt.preventDefault();
    
    for (let i = 0; i < sectionTag.length; i++) {
        const element = sectionTag[i];
        const Bounding=element.getBoundingClientRect().top // it will give relative position from top of element

        // loop will run for each section and whichever section's relative position in between the Bounding class is added
        // to that element(section) and class removed from rest of the element(section) 
        //used ternary operator
        Bounding>=-150 && Bounding<=200 ? element.classList.add('your-active-class'):element.classList.remove('your-active-class')
        
    }
    

})

//this for loop used to highlight the section in navigation bar
// we are listening to event when click on section of navbar adding class to the navbar 'Activate'.
for (let k = 0; k < navLink.length; k++) {
    const li1 = navLink[k];

    li1.addEventListener('click',function(evt){
        evt.preventDefault(evt);
        navLink.forEach(elem=>{
            //removing class from each li element 
            elem.classList.remove('Activate')

        // adding a class to li element when clicked
        li1.classList.add('Activate');
        })
    
    })
}

