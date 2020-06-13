const selectElement = document.querySelector("[data-select]");

selectElement.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);
})