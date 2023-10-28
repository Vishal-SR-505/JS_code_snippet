// Event Bubbling:
// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

// stopPropagation:
// This is the default behavior of events on elements unless you stop the propagation

// The standard DOM Events describes 3 phases of event propagation:
// Capturing phase – the event goes down to the element.
// Target phase – the event reached the target element.
// Bubbling phase – the event bubbles up from the element.



const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]
const pTag = document.getElementsByTagName("p")[0]
body.addEventListener('click', () => {
    console.log("body was clicked")
  })
  
  div.addEventListener('click', () => {
    console.log("div was clicked")
  })
  
  span.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("span was clicked and it will stop propagation")
  })
  pTag.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log("p was clicked")
  })
  button.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log("button was clicked")
  })