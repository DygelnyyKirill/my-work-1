const selectElement = document.querySelector("[data-select]");

selectElement.addEventListener("click", function(event){
    
    if (event.target.hasAttribute("data-select-item")) {
        console.log("click on item");
        const itemTitle = event.target.getAttribute("data-select-item"); 
        console.log(itemTitle)
        event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;
        event.target.closest("[data-select]").querySelector(".header-select-dropdawn").classList.toggle("hidden");
    } else{
        console.log("click on title and around");
        this.querySelector(".header-select-dropdawn").classList.toggle("hidden");
     }  
})
