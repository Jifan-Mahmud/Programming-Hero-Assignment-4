1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-These are used to find elements from the DOM.But there are some important differences between them.
    *getElementById-Finds the element according to a specific id.
    *getElementsByClassName-Finds all elements according to a specific class.
    *querySelector-Finds the first matching element using CSS selector.
    *querySelectorAll-Finds all matching elements using CSS selectors.

2. How do you create and insert a new element into the DOM?

Ans:-JavaScript is used to create and insert new elements into the DOM. The steps are explained below-
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hello World";
    newDiv.innerHTML = "<b>Hello World</b>";

3. What is Event Bubbling? And how does it work?

Ans:-Event Bubbling is an event propagation method in JavaScript where when an event occurs in a child element, that event is passed up step by step from its parent → grandparent → document.
It work-
   Code:
        <div id="parent">
            <button id="child">Click Me</button>
        </div>
      *First, the button's click event will be fired.
      *Then that event will go to the parent <div>
      *Then it will go up to body → html → document

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:-Event Delegation in JavaScript is a pattern where we add an event listener to a parent element, and when an event occurs on a child element of that parent element, it is handled by the parent. That is, there is no need to provide a separate listener on the child element.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:- preventDefault() - This prevents the default behavior of the event.
      stopPropagation()-This stops bubbling or capturing of events.
