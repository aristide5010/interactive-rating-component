var submitButton = document.getElementById("bouton");
var tyCard = document.getElementById("ty-card");

submitButton.onclick = function () {
    var rateCard = document.getElementById("rate-card");
    var rating = document.getElementById("rating");
    var checked = document.querySelector('input[type="radio"]:checked').value;

    rateCard.style.display = "none";   
    tyCard.style.display = "block";
    rating.innerHTML = `You selected ${checked} out of 5`;
}

tyCard.style.display = "none";