$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav");
    var z = document.getElementById("hamburguer");
    if (x.style.display === "grid") {
      x.style.display = "none";
      y.style.height = "40px";
      y.style.width = "40px";
      z.style.bottom = "12px";
    } else {
      x.style.display = "grid";
      x.style.lineHeight = "2.5";
      y.style.height = "200px";
      y.style.width = "100vw";
      z.style.bottom = "50%";
    }
  }