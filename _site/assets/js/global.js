/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-svg-setclasses !*/
!function(e,n,s){function o(e,n){return typeof e===n}function a(){var e,n,s,a,t,l,r;for(var c in i)if(i.hasOwnProperty(c)){if(e=[],n=i[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)l=e[t],r=l.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),f.push((a?"":"no-")+r.join("-"))}}function t(e){var n=r.className,s=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),c?r.className.baseVal=n:r.className=n)}var i=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){i.push({name:e,fn:n,options:s})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f=[],r=n.documentElement,c="svg"===r.nodeName.toLowerCase();Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),a(),t(f),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,document);
$(document).ready(function(){

/* Preload
========================================================================== */

      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow': 'visible'});


/* Affix Nav
========================================================================== */

  $(window).scroll(function () {//Au scroll dans la fenetre on déclenche la fonction
      if ($(this).scrollTop() > 50) { //si on a défilé de plus de 300px du haut vers le bas
          $('#navfix, #navfix-bottom').addClass("affix"); //on ajoute la classe "fixNavigation" à <div id="navigation">
        } else {
      $('#navfix, #navfix-bottom').removeClass("affix");//sinon on retire la classe "fixNavigation" à <div id="navigation">
    }
  });


/* Affix Nav
========================================================================== */

        $("a#video").fancybox({
          'titleShow' : false, // Legende presente ou non
          'titlePosition' : 'over', // Position de la legende
          'transitionIn' : 'fade', // Type de transition a l'ouverture
          'transitionOut' : 'fade', // Type de transition apres fermeture
          'speedIn' : 600, // Duree de l'ouverture
          'speedOut' : 200, // Duree de la fermeture
          'overlayShow' : true // apparition du voile noire ou non
        });

        $("a.ligne3").fancybox({
          'titlePosition' : 'over',
          'transitionIn' : 'fade',
          'transitionOut' : 'fade',
          'speedIn' : 600,
          'speedOut' : 200,
          'overlayShow' : true // voile noir ou non
        });

/* Link Down
========================================================================== */


    $('.link-down, .link-up').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });

/* FancyBox
========================================================================== */

  $("[data-fancybox]").fancybox({
    buttons : [
        'slideShow',
        'fullScreen',
        'thumbs',
        'close'
    ],
    //animationEffect : "zoom",
    transitionEffect : "slide",
    transitionDuration : 366
  });


/* Mobile Nav
========================================================================== */

$('#burger').click(function(e){
  e.preventDefault();
  $('body').toggleClass('navOpen');
});


/* Parralaxe
========================================================================== */

$('#wrap').parallax("center", 0.6, 0.5, true);
$('#section-2').parallax("center", 0.7, 2, true);
    //$('#section-3').parallax("center", -0.7, 0.8, true);
    $('#section-4').parallax("center", 0.9, 0.1, true);



/* Masonry
========================================================================== 

$('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      //columnWidth: 200,
      gutter: 15
    });
*/
/* Isotope
   ========================================================================== */


    // cache container
    var $container = $('.grid-masonry');
    // initialize isotope
    $container.isotope({
      masonry: {
        itemSelector: '.grid-item',
        //columnWidth: 200,
        gutter: 15
      }
    });
    
    // filter items when filter link is clicked
    $('#filters li').click(function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });

/* Fade Gallery Actu 
========================================================================== */


$('.fade-effect')//#section-2 .grid-item main

.fadeTo(100, 0.6)

.mouseenter(function() {

  $(this).fadeTo('slow', 1);

})

.mouseleave(function() {

  $(this).fadeTo('slow', 0.7);

});


/* Modal
========================================================================== */



  //$('.modal h2').hide();
 // $('.modal p').hide();
 $('.modal').hide();


 $('.news, .info-date').each (function() {
  $(this).click(function(){
    $modal = $(this).find('.modal');
    $modal.show();
      //$(".modal h2").delay(500).fadeIn(200, function(){
        //$(".modal p").fadeIn(200);
      //});

    });  

});  
      $('.modal').click(function(){
            $('.modal').fadeOut();
          });


/* Accordeon
========================================================================== */


var titre = $('#accordeon-jquery li.titre');
var contenu = $('#accordeon-jquery li.contenu');

//titre.first().addClass('active').next().slideDown('normal');


//titre.on('click', function(){
  titre.click(function(){
    if ($(this).attr('class') != 'titre active') {
      contenu.slideUp(1000, "easeOutBack");
      $(this).next().stop(true,true).slideDown(1000, "easeOutBack");
      titre.removeClass('active');
      $(this).addClass('active');
    }else {
      $(this).next().stop(true,true).slideUp(1000, "easeOutBack");
      $(this).removeClass('active');
    }
  });

});