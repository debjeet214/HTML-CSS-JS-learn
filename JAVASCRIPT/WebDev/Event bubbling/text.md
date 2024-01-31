Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

This is the default behavior of events on elements unless you stop the propagation 

Using the stopPropagation() function The button's parents and ancestors do not receive the click event as it doesn't bubble up from the button.
