    
    



    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,

    });

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);

    var button1 = document.getElementById('sendMessageButton');

    button1.onclick = function() {
       
        alert("Not Working!");

    }

    $("input,textarea").on({
        mouseenter: function(){
            $(this).css("background-color" , "black");
        },

        mouseleave: function(){
            $(this).css("background-color" , "white");
        },

    });

    
    $("#hide").click(function(){
        $("footer").hide( 300 );
    });
    

$.ajax({
    type:"GET",
    url:"https://api.meetup.com/2/cities",
    success: function(data) {
        $('#text').text(JSON.stringify(data.results[0].city));
    },
    dataType: 'jsonp',
});


var fashionDesign = ['Gucci', 'Adidas', 'Nike'];
        console.log(fashionDesign);
        console.log(fashionDesign[0]);

        
        console.log(fashionDesign[fashionDesign.length -1]);

        //Array functions

        fashionDesign.push('Puma');

        console.log(fashionDesign);

        fashionDesign.pop();

        console.log(fashionDesign);

        fashionDesign.unshift('Hugo Boss');

        console.log(fashionDesign);

        fashionDesign.shift();

        console.log(fashionDesign);


        fashionDesign.splice(0, 0, "Nike Fallc");

        console.log(fashionDesign);
        

        console.log(Math.random());

        console.log(Math.random()*10);

        

        console.log(Math.floor(1.5));

        console.log(Math.floor(Math.random()*10));




var button = document.getElementById('btn1');
        
        var p11 = document.getElementById('p1');

        button.onclick = function(){
        
            text1.style.cssText = "color: red; background-color: lightgrey; text-align: center; font-size: 100px;"

        }
        button.onclick = function(){
            p11.setAttribute("class", "test");
        }
          var myVar = setInterval(myTimer, 1000);
























