// create 3-4 wide boxes with bootstrap columns or grid
// use server side API from github to display projects
// create clickable links with the data to open new window with project of that container
// change color and style
// fix resizing problem!

// Select the button
const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
});