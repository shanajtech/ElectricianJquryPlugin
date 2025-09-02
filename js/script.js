
// jquryPlagin starty
$(function(){




   // hide code start
    $("#hide").click(function(){
        $(".serviceItm").hide(1000)
    })
    // hide code end
       // show code start
    $("#show").click(function(){
        $(".serviceItm").show(1000)
    })
    // show code end
       // hideshow code start
    $("#hideShow").click(function(){
        $(".serviceItm").toggle(1000)
    })
    // hideshow code end
    // fadeIn code start
        $("#fadeIn").click(function(){
        $(".electricImg").fadeIn(1000)
    })
   // fadeIn code end
    // fadeOut code start
    $("#fadeOut").click(function(){
        $(".electricImg").fadeOut(1000)
    })
    // fadeOut code end
    // fadeInOut code start
    $("#fadeInOut").click(function(){
        $(".fadeinout").fadeToggle(1000)
    })
    // fadeInOut code end
        // slideUp code start
    $("#slideUp").click(function(){
        $(".quality2nd").slideUp(1000)
    })

    $("#slideDown").click(function(){
        $(".quality2nd").slideDown(1000)
    })
 
    $("#slideUpDown").click(function(){
        $(".slideupDown").slideToggle(1000)
    })
    // slideUp code end
      $("#changee").click(function(){
        $(".cap2nd").addClass("capp")
    })
 
    $("#changeHow").click(function(){
        $(".cap2nd").removeClass("capp")
    })

    $("#bowAsoJaw").click(function(){
        $(".fullchange").toggleClass("fulchange")
    })
    // hideshow code end
// menubackground start
  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('stickyheader');
    }
    else {
         $('.navbar').removeClass('stickyheader');
    }
    });
// menubackground end
//  Back-to-top button staRT

    //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

//  Back-to-top button end
      // counter js start
     $('.counter').counterUp({
     delay: 10,
     time: 1000
            });
    // counter js end
// countdown js start
    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());
    // countdown js end

      // venuboxImg js start
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
 // venuboxImg js end
 // venuboxVideo js start
    new VenoBox({
    selector: '.my-video-links',
});
// venuboxVideo js start
// typedjs js start
$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
// typedjs js end
// aos js START
  AOS.init({
    duration:1000,
  });
// aos js end
// slickslider start
$('.bannerimgoverlay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
  });
// slickslider end
















    
})
// jquryPlagin end


	






 



  












