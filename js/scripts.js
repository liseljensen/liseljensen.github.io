/* ================================================
 TABLE OF CONTENTS
 ------------------------------------------------
     1. flexslider
     2. Preloader
     3. Parallax
     4. mixITUp init
     5. Magnific popup call
     6. ANIMATION
     7. Menu button
     8. Portfolio popup content
     9. slide toggle read more
     10. Counter


 ================================================  */

$(document).ready(function(){
	"use strict";
	
	//comments slider
	  $('.com_inner').flexslider({
	   pauseOnAction: true, // default setting
	after: function(slider) {
    /* auto-restart player if paused after action */
    if (!slider.playing) {
      slider.play();
    }
	$.waypoints('refresh');
  },
    animation: "slide",
	directionNav: false,
	
	controlsContainer: ".com_slider_bul"
  });
    

	//########### Preloader ##############
	
	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("fast");


	
	//############### Parallax ##################
	
	$('.counter, .comments').parallax("50%", 0.1);
	$('.top').parallax("50%", 0.4);
	
	// ############# mixITUp init ######################
	
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").on("click",function() {
		$(this).removeClass("active");
		$(this).addClass("active");
	});
//########### POPUP Plugin magnificPopup ###########

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
        mainClass: 'mfp-fade',
		midClick: true
	});
	// ################ ANIMATION ##############
	
	$(".top_text h1").addClass("fadeInDown animated");
	$(".top_text p").addClass("fadeInUp animated");
	
	$('.left .timeline_item').waypoint(function() {
		$(this).addClass('animation');
		$(this).addClass('slideInLeft');
	}, { offset: '100%' });
	$('.right .timeline_item').waypoint(function() {
		$(this).addClass('animation');
		$(this).addClass('slideInRight');
	}, { offset: '100%' });
	$('.animation1').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
	
	function heightDetect() {
		$(".top").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	//########### Menu button ####################
	
	$(".toggle_mnu").on("click",function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").on("click",function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").on("click",function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
    //########### Portfolio popup content ####################
	$(".portfolio_item").each(function(i) {
		$(this).find("a.link").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a, .top_text a.btn").mPageScroll2id();

	
	//########### slide toggle read more ####################
	
	$(".stoggle").on("click",function() {
  $(".hide_more").animate({ opacity: 1.0 },200).slideToggle(500, function() {
    $(".stoggle").text($(this).is(':visible') ? "Show less" : "Read more");
  });
});
$(".ttoggle").on("click",function() {
  $(".hide_tm").animate({ opacity: 1.0 },200).slideToggle(500, function() {
    $(".ttoggle").text($(this).is(':visible') ? "Show less" : "Read more");
  });
});
//########### Counter ####################
$('.counter_number').counterUp({
                delay: 10,
                time: 1000
            });
})





// ############### GOOGLE MAP #################	
var amsterdam=new google.maps.LatLng(52.395715,4.888916);	
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: amsterdam, //// Location
          zoom: 8,
		  scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
		  
        }
		
        var map = new google.maps.Map(mapCanvas, mapOptions)
		map.set('styles', [
  {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]);
var marker=new google.maps.Marker({
  position:amsterdam,
  icon:'images/location_icon.png'
  });

marker.setMap(map);

      }
	  
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
 google.maps.event.trigger(map, "resize");
 map.setCenter(amsterdam); 
});