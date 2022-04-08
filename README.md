# Landing Page project

## Table of contenet

* Description
* fanctionality
* list of software and technologies
* project code explaination

## Description

Landing page project have some information it has navigation bar created dynamically. whenever you click on we get to that section of information


## functionality

navigation bar is build dynamically using javascipt, Navigation menu tab generated at top as number of section increases.
when you click on the navigation menu tab, page scroll to the particular section.
when the section is in view it is highlighted
when the section is in view its class set to your-active-class

## list of software and technologies

following is the list of software and technology used
* VS code
* HTML
* CSS
* Javascript

## project code explaination.

To build navigation we used for loop to iterate through each section.
in for loop for each section we create a element li add innerHTML and for functionality of scrolling to particular section we add event listener on each li element.
After element is created we append it to parent ul element using append child method.

to add class 'your-active-class' we again used a event listener so whenever user scroll function runs a loop continuously for each section. getBoundingClientRect function gives size of an element(section) and its position relative to the viewport.we used top so its give element top position relative to the viewport.
so whenver element position inview we add class to section and class removed from rest of the section due to for loop.

in this way we converted static page to dynamic.
