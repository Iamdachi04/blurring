[ ] Create index.html with basic HTML5 boilerplate.

[ ] Inside the body, create a main element to wrap the entire app.

[ ] Inside main, add the core HTML elements in order: a button for the icon, a div for the image container, and an input  for the slider.

[ ] Inside the image container div, add an img tag for the image and a div> for the percentage text ("0.0%").

[ ] Create and link a style.css file.

[ ] In CSS, use Flexbox on the main element to create the vertical, centered column layout.

[ ] In CSS, apply the correct vertical spacing: 5px margin below the icon, 10px margin below the image container.

[ ] In CSS, style the image with width: 100%, height: auto, and apply a default filter: blur(20px).

[ ] In CSS, use absolute positioning to center the percentage text div perfectly over the image. Style the text to be large and white.

Phase 2: Core Interactivity
The goal is to make the slider control the blur of the image.

[ ] In style.css, add styles to customize the slider's track (::-webkit-slider-runnable-track). Make it a simple gray bar.

[ ] In style.css, add styles to customize the slider's thumb (::-webkit-slider-thumb). Make it a circular blue handle.

[ ] In style.css, add a 1-second transition to the filter and opacity properties on the image and text elements, respectively.

[ ] Create and link a script.js file (use the defer attribute).

[ ] In script.js, create a DOMContentLoaded listener. Inside it, get DOM references for the slider, the image, and the text element.

[ ] In script.js, create a main function updateVisuals(value) that takes a number from 0-100 and updates the image's blur CSS and the text's content/opacity.

[ ] In script.js, add a change event listener to the slider.

[ ] Make sure the change listener's callback function calls updateVisuals() with the slider's current value.

[ ] Make sure to call updateVisuals(0) on initial page load to set the correct starting state.

Phase 3: Performance & User Experience
The goal is to implement the professional "blur-up" loading technique and the live drag preview.

[ ] In index.html, add a second img tag inside the image container for the placeholder image. It should come before the main image.

[ ] In style.css, modify styles to overlay the main image directly on top of the placeholder.

[ ] In style.css, set the main image's initial opacity to 0.

[ ] In script.js, add logic to load the high-resolution image in the background and use a .onload event listener.

[ ] In script.js, when the high-res image is loaded, smoothly fade it in by changing its opacity to 1.

[ ] In script.js, add an input event listener to the slider.

[ ] Make sure the input listener's callback updates the blur ONLY on the fast placeholder image for a real-time preview effect. It should also update the text content.

Phase 4: Advanced Features & Polish
The goal is to add the icon toggle functionality and the slider's active-state visual feedback.

[ ] In script.js, add a click event listener to the icon button.

[ ] In the click handler, implement the toggle logic: if the slider value isn't 100, set it to 100; otherwise, set it to 0.

[ ] Make sure the click handler updates the slider's value directly and then calls updateVisuals() to reflect the change instantly.

[ ] Create an updateIcon() function that checks the current value and sets the icon's appearance. Call this from all other update functions.

[ ] In style.css, add an :active pseudo-class for the slider thumb.

[ ] In the :active rule, apply a transform: scale(1.2) to make the thumb grow.

[ ] In the default thumb style, add a transition for the transform property to make the scaling smooth.

Phase 5: Accessibility
The goal is to ensure the project is fully usable for everyone.

[ ] In index.html, make sure the icon is a button and add aria-label="Toggle blur between 0 and 100 percent".

[ ] In index.html, add aria-label="Image blur slider" to the input.

[ ] In script.js, modify your updateVisuals and live preview functions.

[ ] Make sure that every time a value is updated, the slider's aria-valuetext attribute is also updated with the string: "Blur: [value] percent".

[ ] Add the specified noscript tag to index.html.