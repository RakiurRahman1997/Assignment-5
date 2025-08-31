


# Q. no. 1. getElementById vs getElementsByClassName vs querySelector vs querySelectorAll:

-> getElementById("id") finds one element by its unique id.

-> getElementsByClassName("class") finds all elements with that class and returns a live HTMLCollection that updates automatically if the DOM changes.

-> querySelector("selector") finds the first element that matches any CSS selector such as id, class, tag, or attribute.

-> querySelectorAll("selector") finds all matching elements and returns a static NodeList that does not update if the DOM changes.

# Q. no. 2. Creating and Adding Elements to the DOM:

Example in JavaScript--

```js

// Step 1: Create a new element
const div = document.createElement("div");

// Step 2: Add text and attributes
div.textContent = "Hello World!";
div.classList.add("box");

// Step 3: Insert it into the page
document.body.appendChild(div);
```

* appendChild adds the element at the end of a parent.

# Q. no. 3. Event Bubbling:

-> When an event happens on an element, it starts on that element and then travels upward through its parent elements until it reaches the document. For example, clicking a button inside a div first triggers the button’s event, then the div, then the body, and then the document. This is the default behavior in JavaScript events.

# Q. no. 4. Event Delegation:

-> Event delegation means adding one event listener to a parent element to handle events for all of its child elements. For example, instead of adding separate click listeners to many list items, you can add one click listener to the ul element and check which li was clicked.

# Q. no. 5. preventDefault vs stopPropagation:

* preventDefault -> preventDefault stops the browser’s default action such as following a link or submitting a form.

* stopPropagation -> stopPropagation stops the event from bubbling up to parent elements.


