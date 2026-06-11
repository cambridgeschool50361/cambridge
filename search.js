const searchInput = document.getElementById("searchInput");
const facultyCards = document.querySelectorAll(".faculty-card");

searchInput.addEventListener("keyup", function(){

    const filter = searchInput.value.toLowerCase();

    facultyCards.forEach(card => {

        const name = card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});
