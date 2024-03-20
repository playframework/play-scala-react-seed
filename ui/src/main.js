
(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            imJs.swiperActivation();
            imJs.vedioActivation();
            imJs.counterUp();
            imJs.salActive();
            imJs.progressAvtivation();
            imJs.stickyHeader();
            imJs.backToTopInit();
            imJs.typeJS();
            imJs.menuActive();
            imJs.metismenu();
            imJs.preloader();
            imJs.smoothScroll();
            imJs.onePageNav();
            imJs.marqueActivation();
            imJs.wowActive();
            imJs.mouseActive();
            imJs.DarkLightActive();
        },
        // done
        swiperActivation: function (){
          $(document).ready(function() {
            var swiper = new Swiper(".testimonial-1", {
              slidesPerView: 2.5,
              spaceBetween: 24,
              slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 2.5,
                },
                1300: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 3,

                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                  navigation: false,
                }
              },
            });
            $(document).ready(function() {
              var swiper = new Swiper(".mySwiperBanner-three", {
                  loop: false,
                  loopedSlides: 50,
                  grabCursor: true,
                  autoHeight: true,
                  shortSwipes: false,
                  longSwipes: false,
                  effect: 'fade',
                  speed:500,
                  autoplay: {
                      delay: 4000,
                  },
                });
            });
            $(document).ready(function() {
              var swiper = new Swiper(".mySwiperBanner-five", {
                  loop: false,
                  grabCursor: true,
                  loopedSlides: 50,
                  autoHeight: true,
                  shortSwipes: false,
                  longSwipes: false,
                  effect: 'fade',
                  speed:500,
                  // loop: true,
                  loopFillGroupWithBlank: true,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  autoplay: {
                      delay: 4000,
                  },
                });
            });
            $(document).ready(function() {
              var swiper = new Swiper(".testimonials-h5", {
                  loop: false,
                  loopedSlides: 50,
                  autoHeight: true,
                  shortSwipes: false,
                  longSwipes: false,
                  // effect: 'fade',
                  speed:500,
                  // loop: true,
                  loopFillGroupWithBlank: true,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  autoplay: {
                      delay: 4000,
                  },
                });
            });
            var swiper = new Swiper(".brand-1", {
              slidesPerView: 2.5,
              spaceBetween: 100,
              slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 5,
                },
                1300: {
                  slidesPerView: 5,
                },
                991: {
                  slidesPerView: 5,

                },
                767: {
                  slidesPerView: 4,
                },
                575: {
                  slidesPerView: 3,
                },
                400: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                }
              },
            });
            var swiper = new Swiper(".team-one-swiper", {
              slidesPerView: 2.5,
              spaceBetween: 40,
              slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 3,

                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
            var swiper = new Swiper(".project-h2-slider", {
              slidesPerView: 2.5,
              spaceBetween: 24,
              slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: true,
              centeredSlides: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 4.2,
                },
                1300: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 3,

                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
            var swiper = new Swiper(".testimonials-h2", {
              slidesPerView: 2,
              spaceBetween: 24,
              slidesPerGroup: 1,
              loop: true,
              loopFillGroupWithBlank: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                1500: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 2,

                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
            var swiper = new Swiper(".swiper-container-h", {
              direction: "horizontal",
              effect: "slide",
              autoplay: true,
              parallax: true,
              speed: 1600,
              rtl: true,
              loop: true,
              loopFillGroupWithBlank: !0,

              mousewheel: {
                eventsTarged: ".swiper-slide",
                sensitivity: 1
              },
              keyboard: {
                enabled: true,
                onlyInViewport: true
              },
              scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            });
          });

        },
        vedioActivation: function (e) {
          $(document).ready(function(){
            $('.fancybox').fancybox({
              padding: 0,
              maxHeight: 444,
              afterLoad: function() {
                $('<div>')
                  .attr('class', 'prefooter-btn')
                  .data('ct-checkout', 'vidalife.kiba-camera')
                  .appendTo(this.wrap[0]);
              }
            });

          });
        },
        // done
        counterUp: function (e) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
              });
              $('.counter').addClass('animated fadeInDownBig');
              $('h3').addClass('animated fadeIn');
        },
        // done
        salActive: function () {
          sal({
              threshold: 0.1,
              once: true,
          });
        },
        progressAvtivation: function(){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
              var bars = document.querySelectorAll('.meter > span');
              console.clear();
              setInterval(function(){
                bars.forEach(function(bar){
                  var getWidth = parseFloat(bar.dataset.progress);
                  for(var i = 0; i < getWidth; i++) {
                    bar.style.width = i + '%';
                  }
                });
              }, 100);
            }
          })
        },
        // done
        stickyHeader: function (e) {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                  $('.header--sticky').addClass('sticky')
              } else {
                  $('.header--sticky').removeClass('sticky')
              }
          })
        },
        // done
        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";

          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })


        });

        },
        typeJS: function () {
          jQuery(document).ready(function($) {
            //set animation timing
            var animationDelay = 2500,
              //loading bar effect
              barAnimationDelay = 3800,
              barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
              //letters effect
              lettersDelay = 50,
              //type effect
              typeLettersDelay = 150,
              selectionDuration = 1500,
              typeAnimationDelay = selectionDuration + 800,
              //clip effect
              revealDuration = 1000,
              revealAnimationDelay = 1500;

            initHeadline();


            function initHeadline() {
              //insert <i> element for each letter of a changing word
              singleLetters($('.cd-headline.letters').find('b'));
              //initialise headline animation
              animateHeadline($('.cd-headline'));
            }

            function singleLetters($words) {
              $words.each(function() {
                var word = $(this),
                  letters = word.text().split(''),
                  selected = word.hasClass('is-visible');
                for (i in letters) {
                  if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                  letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
                }
                var newLetters = letters.join('');
                word.html(newLetters).css('opacity', 1);
              });
            }

            function animateHeadline($headlines) {
              var duration = animationDelay;
              $headlines.each(function() {
                var headline = $(this);

                if (headline.hasClass('loading-bar')) {
                  duration = barAnimationDelay;
                  setTimeout(function() {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                  }, barWaiting);
                } else if (headline.hasClass('clip')) {
                  var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                  spanWrapper.css('width', newWidth);
                } else if (!headline.hasClass('type')) {
                  //assign to .cd-words-wrapper the width of its longest word
                  var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                  words.each(function() {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                  });
                  headline.find('.cd-words-wrapper').css('width', width);
                };

                //trigger animation
                setTimeout(function() {
                  hideWord(headline.find('.is-visible').eq(0))
                }, duration);
              });
            }

            function hideWord($word) {
              var nextWord = takeNext($word);

              if ($word.parents('.cd-headline').hasClass('type')) {
                var parentSpan = $word.parent('.cd-words-wrapper');
                parentSpan.addClass('selected').removeClass('waiting');
                setTimeout(function() {
                  parentSpan.removeClass('selected');
                  $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                }, selectionDuration);
                setTimeout(function() {
                  showWord(nextWord, typeLettersDelay)
                }, typeAnimationDelay);

              } else if ($word.parents('.cd-headline').hasClass('letters')) {
                var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

              } else if ($word.parents('.cd-headline').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({
                  width: '2px'
                }, revealDuration, function() {
                  switchWord($word, nextWord);
                  showWord(nextWord);
                });

              } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
                $word.parents('.cd-words-wrapper').removeClass('is-loading');
                switchWord($word, nextWord);
                setTimeout(function() {
                  hideWord(nextWord)
                }, barAnimationDelay);
                setTimeout(function() {
                  $word.parents('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting);

              } else {
                switchWord($word, nextWord);
                setTimeout(function() {
                  hideWord(nextWord)
                }, animationDelay);
              }
            }

            function showWord($word, $duration) {
              if ($word.parents('.cd-headline').hasClass('type')) {
                showLetter($word.find('i').eq(0), $word, false, $duration);
                $word.addClass('is-visible').removeClass('is-hidden');

              } else if ($word.parents('.cd-headline').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({
                  'width': $word.width() + 10
                }, revealDuration, function() {
                  setTimeout(function() {
                    hideWord($word)
                  }, revealAnimationDelay);
                });
              }
            }

            function hideLetter($letter, $word, $bool, $duration) {
              $letter.removeClass('in').addClass('out');

              if (!$letter.is(':last-child')) {
                setTimeout(function() {
                  hideLetter($letter.next(), $word, $bool, $duration);
                }, $duration);
              } else if ($bool) {
                setTimeout(function() {
                  hideWord(takeNext($word))
                }, animationDelay);
              }

              if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                var nextWord = takeNext($word);
                switchWord($word, nextWord);
              }
            }

            function showLetter($letter, $word, $bool, $duration) {
              $letter.addClass('in').removeClass('out');

              if (!$letter.is(':last-child')) {
                setTimeout(function() {
                  showLetter($letter.next(), $word, $bool, $duration);
                }, $duration);
              } else {
                if ($word.parents('.cd-headline').hasClass('type')) {
                  setTimeout(function() {
                    $word.parents('.cd-words-wrapper').addClass('waiting');
                  }, 200);
                }
                if (!$bool) {
                  setTimeout(function() {
                    hideWord($word)
                  }, animationDelay)
                }
              }
            }

            function takeNext($word) {
              return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
            }

            function takePrev($word) {
              return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
            }

            function switchWord($oldWord, $newWord) {
              $oldWord.removeClass('is-visible').addClass('is-hidden');
              $newWord.removeClass('is-hidden').addClass('is-visible');
            }
          });
        },
        // done
        menuActive:function(){
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });

        },
        // done
        metismenu:function(){
          $('#mobile-menu-active').metisMenu();
        },
        // done
        preloader:function(){
          window.addEventListener('load',function(){
            document.querySelector('body').classList.add("loaded")
          });
        },

        smoothScroll: function (e) {
          $(document).on('click', '.onepage a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 2000);
          });
        },

        onePageNav: function (e) {
          $(document).ready(function() {
            var nav = $('#nav');
            if(nav.length){
              $('#nav').onePageNav();
            }
          });
        },

        marqueActivation: function (e) {
          if('.marquee_text'.length){
            $('.marquee_text').marquee({
              direction: 'left',
              duration: 50000,
              gap: 50,
              delayBeforeStart: 0,
              duplicated: true,
              startVisible: true,
            });
          }
        },

        wowActive: function () {
          new WOW().init();
        },

        mouseActive:function(){

          $('.li1').mousemove(function(e) {
            $('span', this).css({
              left: e.pageX - 200,
              top: e.pageY - 4340
            });
          });
        },

        DarkLightActive:function(){
          //Dark & Light jQuery
          var rts_go_dark = $('.rts-go-dark');
          if (rts_go_dark.length) {
            let rtstheme = localStorage.getItem('rtstheme');
            const godarkrts = document.querySelector('.rts-go-dark')
            const golightrts = document.querySelector('.rts-go-light')

            const darkTheme = function () {
              document.documentElement.classList.add('rts-dark');
              localStorage.setItem('rtstheme', 'rts-dark');
            }
            const lightTheme = function () {
              document.documentElement.classList.remove('rts-dark');
              localStorage.setItem('rtstheme', 'light');
            }
            document.addEventListener('DOMContentLoaded', function () {
              localStorage.getItem('rtstheme');
              if (localStorage.rtstheme === 'rts-light') {
                lightTheme();
              } else if (localStorage.rtstheme === 'rts-dark') {
                darkTheme();
              }
            });
            godarkrts.addEventListener('click', function () {
              darkTheme();
            });
            golightrts.addEventListener('click', function () {
              lightTheme();
            });

          }
      },

    }

    imJs.m();
  })(jQuery, window)




