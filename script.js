document.addEventListener("DOMContentLoaded", function() {
    var plus1 = document.getElementById("plus1");
    var plus2 = document.getElementById("plus2");
    var plus3 = document.getElementById("plus3");
    var plus4 = document.getElementById("plus4");
    var minus1 = document.getElementById("minus1");
    var minus2 = document.getElementById("minus2");
    var minus3 = document.getElementById("minus3");
    var minus4 = document.getElementById("minus4");

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    plus1.addEventListener("click", function() {
        minus1.style.display = "block";
        plus1.style.display = "none";
        p1.style.display = "block";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display= "none";
        
        plus2.style.display = "block";
        plus3.style.display = "block";
        plus4.style.display = "block";

        minus2.style.display = "none";
        minus3.style.display = "none";
        minus4.style.display = "none";
    })

    minus1.addEventListener("click", function() {
        plus1.style.display = "block";
        minus1.style.display= "none";
        p1.style.display = "none";
    })

    plus2.addEventListener("click", function() {
        minus2.style.display = "block";
        plus2.style.display = "none";
        p2.style.display = "block";
        p1.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";

        plus1.style.display = "block";
        plus3.style.display = "block";
        plus4.style.display = "block";

        minus1.style.display = "none";
        minus3.style.display = "none";
        minus4.style.display = "none";
    })

    minus2.addEventListener("click", function() {
        plus2.style.display = "block";
        minus2.style.display = "none";
        p2.style.display = "none";
    })

    plus3.addEventListener("click", function() {
        minus3.style.display = "block";
        plus3.style.display = "none";
        p3.style.display = "block";
        p1.style.display = "none";
        p2.style.display = "none";
        p4.style.display = "none";

        plus1.style.display = "block";
        plus2.style.display = "block";
        plus4.style.display = "block";

        minus1.style.display = "none";
        minus2.style.display = "none";
        minus4.style.display = "none";
    })

    minus3.addEventListener("click", function() {
        plus3.style.display = "block";
        minus3.style.display = "none";
        p3.style.display = "none";
    })

    plus4.addEventListener("click", function() {
        minus4.style.display = "block";
        plus4.style.display = "none";
        p4.style.display = "block";
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";

        plus1.style.display = "block";
        plus2.style.display = "block";
        plus3.style.display = "block";

        minus1.style.display = "none";
        minus2.style.display = "none";
        minus3.style.display = "none";
    })

    minus4.addEventListener("click", function() {
        plus4.style.display = "block";
        minus4.style.display = "none";
        p4.style.display = "none";
    })

});