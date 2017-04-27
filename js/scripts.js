$(document).ready(function() {
      $("form").submit(function(event) {
        var a = parseInt($("input#sidea").val());
        var b = parseInt($("input#sideb").val());
        var c = parseInt($("input#sidec").val());
        var results="";



      if(c> a+b || b>a+c || a>b+c){
        results = "Not a Triangle";
      }else {
        if(a===b && a===c){
          results = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          results = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             results = "Scalene";
          }
        }
      }
      }
        setImageSource(results);
        $(".output").text(results);

        event.preventDefault();
      });

      function setImageSource(results) {
      var imageSrc="";
      if (results === "Equilateral") {
         imageSrc="img/Equilateral.jpg";
      }else if (results === "Isosceles") {
         imageSrc="img/Isosceles.jpg";
      }else if (results === "Scalene") {
         imageSrc="img/Scalene.jpg";
      }else {
        imageSrc="img/not-a-triangle.jpg";
      }

        $('#tri').attr('src', imageSrc);
      
      }
    });
