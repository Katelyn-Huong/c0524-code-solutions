# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  element on which event it occurs.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling event.
- What DOM element property tells you what type of element it is?
  tag name property
- What does the `element.closest()` method take as its argument and what does it return?
  takes a CSS selector and returns closest ancestors
- How can you remove an element from the DOM?
  remove method on the object
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add event to the parent, parent delegation

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
