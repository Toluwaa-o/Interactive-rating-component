document.querySelector("button").addEventListener("click", change);

function change(){
    document.getElementsByClassName
    ("thanks")[0].style.visibility="visible";
    document.getElementsByClassName("rating")[0].style.visibility="hidden";
}

for(var i=0; i<5; i++){
    document.querySelectorAll("li")[i].addEventListener("click", function(){
        var ourRating = this.innerHTML;
        returnRating(ourRating);
        addHighlight(ourRating);
    });
}

function returnRating(rating){
        document.getElementById("selected").innerHTML = "You selected " + rating + " out of 5 ";
}

function addHighlight(buttonPressed){
    var theButton = document.querySelector(".list" + buttonPressed);
    theButton.classList.add("pressed");

    setTimeout(function() {
        theButton.classList.remove("pressed");
    }, 5000);
}

