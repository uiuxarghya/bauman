jQuery(function($) {

    $(document).ready(function() {

        "use strict";

        PageLoad();
        FirstLoad();
        HoverLists();
        Sliders();
        Showcase();
        ShowcaseCarousel();
        if ((typeof ClapatBaumanThemeOptions != 'undefined') && (ClapatBaumanThemeOptions.enable_ajax == "1")) {
            AjaxLoad();
        } else {
            PageLoadNoAjax();
        }
        Portfolio();
        Blog();
        Shortcodes();
        JustifiedGrid();
        Lightbox();
        PlayVideo();
        InitContactMap();
    });

    /*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

    function PageLoad() {

        if ($('#page-content').hasClass("light-content")) {
            $('.preloader-wrap').addClass('light-content');
        }

        $('body').removeClass('hidden');
        TweenMax.to($("#header-container"), 0.5, {
            force3D: true,
            opacity: 1,
            delay: 0,
            ease: Power2.easeOut
        });
        //modified time
        var width = 100
          , perfData = window.performance.timing
          , EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
          , time = ((EstimatedTime / 100) % 50) * 10

        // Loadbar Animation
        $(".loadbar").animate({
            width: width + "%"
        }, time * 5);

        // Percentage Increment Animation
        var PercentageID = $("#precent")
          , start = 0
          , end = 100
          , durataion = time + 0;
        animateValue(PercentageID, start, end, durataion);

        function animateValue(id, start, end, duration) {

            var range = end - start
              , current = start
              , increment = end > start ? 1 : -1
              , stepTime = Math.abs(Math.floor(duration / range))
              , obj = $(id);

            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current);
                //obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        // Fading Out Loadbar on Finised
        setTimeout(function() {
            $('.loadbar').append('<span class="hold-progress-bar"></span>');

            TweenMax.to($('.hold-progress-bar'), 0.5, {
                force3D: true,
                width: '0',
                delay: 1,
                ease: Power2.easeOut,
                onComplete: function() {
                    //modified time
                    TweenMax.set($(".trackbar"), {
                        visibility: 'hidden',
                        opacity: 0
                    });
                    $('body').waitForImages({
                        finished: function() {

                            TweenMax.to($(".percentage"), 0.5, {
                                force3D: true,
                                opacity: 0,
                                y: -30,
                                delay: 0,
                                ease: Power1.easeInOut
                            });
                            TweenMax.to($(".headphones, .headphones-text"), 0.3, {
                                force3D: true,
                                opacity: 0,
                                y: -50,
                                delay: 0.2,
                                ease: Power2.easeOut
                            });
                            TweenMax.to($(".preloader-wrap"), 0.7, {
                                force3D: true,
                                yPercent: -101,
                                delay: 0.6,
                                ease: Power2.easeInOut
                            });
                            TweenMax.set($(".preloader-wrap"), {
                                visibility: 'hidden',
                                delay: 1.4,
                                opacity: 0
                            });

                            setTimeout(function() {

                                $('body').waitForImages({
                                    finished: function() {
                                        TweenMax.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), 1, {
                                            force3D: true,
                                            opacity: 1,
                                            delay: 0,
                                            ease: Power2.easeOut
                                        });
                                        //modified time
                                        $('body').removeClass('hidden-ball');
                                    },
                                    waitForAll: true
                                });

                                if ($('.hero-video-wrapper').length > 0) {
                                    $('#hero-bg-wrapper').find('video').each(function() {
                                        $(this).get(0).play();
                                    });
                                }

                                TweenMax.to($("#main"), 0, {
                                    force3D: true,
                                    opacity: 1,
                                    delay: 0,
                                    ease: Power2.easeOut
                                });
                                //modified time
                                if ($('#hero').hasClass("has-image")) {
                                    TweenMax.to($("#hero-bg-image"), 1, {
                                        force3D: true,
                                        scale: 1.05,
                                        opacity: 1,
                                        delay: 0.2,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($(".hero-title"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 0.9,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($(".hero-subtitle"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 0.95,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($(".hb-left"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1.1,
                                        ease: Power2.easeOut,
                                        onComplete: function() {
                                            $('.hb-left').addClass('enable');
                                        }
                                    });
                                    TweenMax.to($(".hb-right"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 1.2,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($("#main-page-content"), 0.4, {
                                        force3D: true,
                                        opacity: 1,
                                        y: 0,
                                        delay: 1.15,
                                        ease: Power2.easeOut
                                    });
                                } else {
                                    TweenMax.to($(".hero-title"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 0.9,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($(".hero-subtitle"), 0.4, {
                                        force3D: true,
                                        y: 0,
                                        opacity: 1,
                                        delay: 0.95,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($("#main-page-content"), 0.4, {
                                        force3D: true,
                                        opacity: 1,
                                        y: 0,
                                        delay: 1,
                                        ease: Power2.easeOut
                                    });
                                    TweenMax.to($("#show-filters"), 0.4, {
                                        force3D: true,
                                        opacity: 1,
                                        delay: 1.1,
                                        ease: Power2.easeOut
                                    });
                                }

                                //Blog Appear
                                TweenMax.to($("#blog-content"), 0.4, {
                                    force3D: true,
                                    opacity: 1,
                                    y: 0,
                                    delay: 1.05,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to($(".post-article-wrap"), 0.4, {
                                    force3D: true,
                                    y: 0,
                                    opacity: 1,
                                    delay: 0.7,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to($("#post-content, #post .post-image, .post-meta-data, .post-navigation, .post-comments, .post-form"), 0.4, {
                                    force3D: true,
                                    opacity: 1,
                                    y: 0,
                                    delay: 0.75,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to($("#blog-navigation, #sidebar"), 1, {
                                    force3D: true,
                                    opacity: 1,
                                    ease: Power2.easeOut
                                });

                                if ($('#hero-bg-image').hasClass("light-content")) {
                                    $('#hero-caption').addClass('light-content');
                                    setTimeout(function() {
                                        $('#magic-cursor').addClass('light-content');
                                    }, 700);
                                    setTimeout(function() {
                                        $('#header-container').addClass('light-content');
                                    }, 600);
                                }

                                // Fading In Showcase elements on Finised
                                TweenMax.set($("#showcase-holder"), {
                                    opacity: 0,
                                    scale: 1.05
                                });
                                TweenMax.to($("#showcase-holder"), 0.4, {
                                    force3D: true,
                                    opacity: 1,
                                    scale: 1,
                                    delay: 0.8,
                                    ease: Power2.easeOut
                                });

                                TweenMax.to($('.swiper-slide-active').find('.title'), 0.8, {
                                    force3D: true,
                                    y: 0,
                                    delay: 0.8,
                                    ease: Power2.easeOut
                                });
                                TweenMax.to($('.swiper-slide-active').find('.subtitle'), 0.7, {
                                    force3D: true,
                                    y: 0,
                                    delay: 0.9,
                                    ease: Power2.easeOut
                                });

                                // Fading In Small Carousel elements on Finised
                                var tlCarousel = new TimelineLite();
                                tlCarousel.set($("#showcase-carousel-slider .swiper-slide"), {
                                    x: 300,
                                    opacity: 0
                                });
                                $("#showcase-carousel-slider .swiper-slide").each(function(index, element) {
                                    tlCarousel.to(element, 1.4, {
                                        x: 0,
                                        opacity: 1,
                                        delay: 0.9,
                                        ease: Power3.easeOut
                                    }, index * 0.1)
                                });
                                // Fading In Large Carousel elements on Finised
                                var tlCarousel = new TimelineLite();
                                tlCarousel.set($("#large-showcase-carousel .swiper-slide"), {
                                    x: 300,
                                    opacity: 0
                                });
                                $("#large-showcase-carousel .swiper-slide").each(function(index, element) {
                                    tlCarousel.to(element, 1.4, {
                                        x: 0,
                                        opacity: 1,
                                        delay: 0.9,
                                        ease: Power3.easeOut
                                    }, index * 0.1)
                                });
                                TweenMax.set($(".swiper-scrollbar"), {
                                    scaleX: 0,
                                });
                                TweenMax.to($(".swiper-scrollbar"), 1.2, {
                                    force3D: true,
                                    scaleX: 1,
                                    delay: 0.9,
                                    ease: Power2.easeOut
                                });

                                setTimeout(function() {
                                    $('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
                                }, 600);

                                setTimeout(function() {
                                    $('body').removeClass("load-next-project");
                                    $('body').addClass("header-visible");
                                    $('#showcase-holder').removeClass("disabled");
                                }, 1600);

                                setTimeout(function() {
                                    $('body').removeClass("show-loader")
                                }, 800);

                            }, 100);
                        },
                        waitForAll: true
                    });

                }
            });

        }, time);

    }
    // End Page Load

    /*--------------------------------------------------
Function First Load
---------------------------------------------------*/

    function FirstLoad() {

        if ($("body").hasClass("smooth-scroll")) {
            const ScrollArea = document.querySelector('#content-scroll');
            var scrollbar = window.Scrollbar;
            // Use plugins
            // import { ScrollbarPlugin } from 'smooth-scrollbar';
            var __extends = (this && this.__extends) || (function() {
                var extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }
                ) || function(d, b) {
                    for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p];
                }
                ;
                return function(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype,
                    new __());
                }
                ;
            }
            )();
            var EdgeEasingPlugin = /** @class */
            (function(_super) {
                __extends(EdgeEasingPlugin, _super);
                function EdgeEasingPlugin() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._remainMomentum = {
                        x: 0,
                        y: 0
                    };
                    return _this;
                }
                EdgeEasingPlugin.prototype.transformDelta = function(delta) {
                    var _a = this.scrollbar
                      , limit = _a.limit
                      , offset = _a.offset;
                    var x = this._remainMomentum.x + delta.x;
                    var y = this._remainMomentum.y + delta.y;
                    // clamps momentum within [-offset, limit - offset]
                    this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
                    return {
                        x: 0,
                        y: 0
                    };
                }
                ;
                EdgeEasingPlugin.prototype.onRender = function(remainMomentum) {
                    Object.assign(this._remainMomentum, remainMomentum);
                }
                ;
                EdgeEasingPlugin.pluginName = 'edgeEasing';
                return EdgeEasingPlugin;
            }(Scrollbar.ScrollbarPlugin));
            Scrollbar.use(EdgeEasingPlugin);
            // Config
            var ScrollbarOptions = {
                damping: 0.05,
                renderByPixel: true,
                continuousScrolling: true
            };

            // Initialise
            var scrollbar = Scrollbar.init(ScrollArea, ScrollbarOptions);

        }

        if ($('#project-nav').length > 0) {

            if ($("body").hasClass("smooth-scroll")) {
                TweenMax.to(scrollbar, 1.5, {
                    scrollTo: 120,
                    delay: 0.3,
                    ease: Power4.easeInOut
                });
            } else {
                TweenMax.to(window, 1.5, {
                    scrollTo: 120,
                    delay: 0.3,
                    ease: Power4.easeInOut
                });
            }
        }

        $("html,body").animate({
            scrollTop: 0
        }, 1);

        if ($("#page-content").hasClass("light-content")) {
            $("main, nav, #main-content").css('background-color', '#141414');
            $('#magic-cursor').addClass('light-content');
            if ($('#hero').length > 0) {
                if ($('#hero').hasClass("has-image")) {
                    $("header").css('background-color', 'transparent');
                } else {
                    if ($('#post').length > 0) {
                        $("header").css('background-color', '#141414');
                    } else {
                        $("header").css('background-color', 'transparent');
                    }
                }
            } else {
                $("header").css('background-color', 'transparent');
            }
        } else {
            $("main").css('background-color', '#fff');
            $("nav").css('background-color', '#141414');
            $("#main-content").css('background-color', '#fff');
            $('#magic-cursor').removeClass('light-content');
            if ($('#hero').length > 0) {
                if ($('#hero').hasClass("has-image")) {
                    $("header").css('background-color', 'transparent');
                } else {
                    if ($('#post').length > 0) {
                        $("header").css('background-color', '#fff');
                    } else {
                        $("header").css('background-color', 'transparent');
                    }
                }
            } else {
                $("header").css('background-color', 'transparent');
            }
        }

        $('.section-image').each(function() {
            var image = $(this).data('src');
            $(this).css({
                'background-image': 'url(' + image + ')'
            });
        });

        $('.item').each(function() {
            var image = $(this).find('.item-image').data('src');
            $(this).find('.item-image').css({
                'background-image': 'url(' + image + ')'
            });
        });

        $('.move-section').each(function() {
            var image = $(this).find('.move-bg-img').data('src');
            $(this).find('.move-bg-img').css({
                'background-image': 'url(' + image + ')'
            });
        });

        $('.thumb-page').each(function() {
            var image = $(this).data('src');
            $(this).css({
                'background-image': 'url(' + image + ')'
            });
        });

        $('.video-cover').each(function() {
            var image = $(this).data('src');
            $(this).css({
                'background-image': 'url(' + image + ')'
            });
        });

        //Load Default Page
        $('a.ajax-link').on('click', function() {
            $("body").addClass("show-loader");
            $(".flexnav").removeClass("flexnav-show");
            $('#menu-burger').removeClass("open");
            $('header').removeClass('white-header');
            var tlMenu = new TimelineLite();
            $(".fullscreen-menu .menu-timeline").each(function(index, element) {
                tlMenu.to(element, 0.25, {
                    y: -30,
                    opacity: 0,
                    ease: Power2.easeIn
                }, index * 0.03)
            });
            TweenMax.to('#ball', 0.3, {
                borderWidth: "4px",
                scale: 0.5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            });
            if ($('#showcase-holder').length > 0) {
                TweenMax.to($(".showcase-captions-wrap"), 0.4, {
                    force3D: true,
                    opacity: 0,
                    ease: Power2.easeOut
                });
                TweenMax.to($("#main, #hero-bg-wrapper, #project-nav, .next-project-image"), 0.3, {
                    opacity: 0,
                    delay: 0.2,
                    ease: Power0.ease
                });
            } else {
                TweenMax.to($("#main, #hero-bg-wrapper, #project-nav, .next-project-image, #blog, #hero, #image-slider"), 0.3, {
                    opacity: 0,
                    delay: 0.1,
                    ease: Power0.ease
                });
            }
            TweenMax.to($("#footer-container, .header-middle"), 0.3, {
                opacity: 0,
                ease: Power0.ease
            });

            TweenMax.to($("#showcase-carousel-slider .swiper-slide-active"), 0.4, {
                force3D: true,
                x: -250,
                opacity: 0,
                delay: 0.05,
                ease: Power3.easeIn
            });
            TweenMax.to($("#showcase-carousel-slider .swiper-slide-active").next(), 0.4, {
                force3D: true,
                x: -250,
                opacity: 0,
                delay: 0.1,
                ease: Power3.easeIn
            });
            TweenMax.to($("#showcase-carousel-slider .swiper-slide-active").next().next(), 0.4, {
                force3D: true,
                x: -250,
                opacity: 0,
                delay: 0.15,
                ease: Power3.easeIn
            });
            TweenMax.to($("#showcase-carousel-slider"), 0.5, {
                force3D: true,
                opacity: 0,
                delay: 0.1,
                ease: Power1.easeInOut
            });
        });

        //Load Project from Showcase
        $('#showcase-slider a.title').on('click', function() {
            $('#showcase-tilt').addClass('disabled');
            $('header').removeClass('white-header');
            TweenMax.to($(".showcase-captions-wrap.stroked, .header-middle"), 0.3, {
                force3D: true,
                opacity: 0,
                delay: 0,
                ease: Power2.easeOut
            });
            TweenMax.to($(".arrows-wrap"), 0.2, {
                force3D: true,
                opacity: 0,
                delay: 0,
                ease: Power2.easeOut
            });
            TweenMax.to($(".showcase-counter, .counter"), 0.2, {
                force3D: true,
                opacity: 0,
                delay: 0.1,
                ease: Power2.easeOut
            });
            TweenMax.to($(".socials-wrap"), 0.2, {
                force3D: true,
                opacity: 0,
                delay: 0.15,
                ease: Power2.easeOut
            });
            TweenMax.to('#ball', 0.3, {
                borderWidth: "4px",
                scale: 0.5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            });
            $("body").addClass("load-project-page").addClass("show-loader");
        });

        //Load Project from Showcase Carousel
        $('#showcase-carousel-slider a.title').on('click', function() {
            $('#showcase-tilt').addClass('disabled');
            TweenMax.to($("#showcase-carousel-slider .section-image"), 0.7, {
                force3D: true,
                scale: 1,
                maxWidth: '100%',
                height: "100%",
                top: 0,
                delay: 0,
                ease: Power2.easeInOut
            });
            TweenMax.to($("#showcase-carousel-slider .img-mask"), 0.7, {
                force3D: true,
                padding: 0,
                delay: 0,
                ease: Power2.easeInOut
            });
            TweenMax.to($("#showcase-carousel-slider .title span"), 0.4, {
                force3D: true,
                opacity: 0,
                delay: 0,
                ease: Power2.easeOut
            });
            TweenMax.to($(".arrows-wrap"), 0.2, {
                force3D: true,
                opacity: 0,
                delay: 0,
                ease: Power2.easeOut
            });
            TweenMax.to($(".socials-wrap"), 0.2, {
                force3D: true,
                opacity: 0,
                delay: 0.15,
                ease: Power2.easeOut
            });
            TweenMax.to('#ball', 0.3, {
                borderWidth: "4px",
                scale: 0.5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            });
            $("body").addClass("load-project-page-carousel").addClass("show-loader");
        });

        //Load Page From Menu
        $('nav .ajax-link').on('click', function() {
            var tl = new TimelineLite();
            $(".menu-timeline").each(function(index, element) {
                tl.to(element, 0.25, {
                    y: -80,
                    opacity: 0,
                    ease: Power1.easeIn
                }, index * 0.05)
            });
            $('header').removeClass('white-header');
        });

        $('#burger-wrapper, .menu .button-text').on('click', function() {
            $('#menu-burger, nav').toggleClass('open');
            setTimeout(function() {
                if ($('#menu-burger').hasClass("open")) {
                    $('header').addClass('over-sidebar').addClass('over-white-section');
                    if (!$('#page-content').hasClass("light-content")) {
                        $('#magic-cursor').addClass('light-content');
                        $('#header-container').addClass('light-content');
                    }
                    //Fade In Navigation Lists
                    var tlMenu = new TimelineLite();
                    tlMenu.set($(".menu-timeline"), {
                        y: 80,
                        opacity: 0
                    });
                    $(".menu-timeline").each(function(index, element) {
                        tlMenu.to(element, 0.5, {
                            y: 0,
                            opacity: 1,
                            delay: 0.4,
                            ease: Power2.easeOut
                        }, index * 0.1)
                    });

                } else {
                    //Fade Out Navigation Lists					
                    var tlMenu = new TimelineLite();
                    $(".menu-timeline").each(function(index, element) {
                        tlMenu.to(element, 0.25, {
                            y: -80,
                            opacity: 0,
                            ease: Power2.easeIn
                        }, index * 0.05)
                    });
                    if (!$('#page-content').hasClass("light-content")) {
                        setTimeout(function() {
                            $('#magic-cursor').removeClass('light-content');
                            $('#header-container').removeClass('light-content');
                        }, 500);
                    }
                    setTimeout(function() {
                        $(".touch-button.active").trigger("click");
                        $('header').removeClass('over-sidebar').removeClass('over-white-section');
                    }, 500);
                }
            }, 20);
        });

        // Page  Navigation Events
        $('.next-ajax-link-page').on('click', function() {
            $("body").addClass("load-next-page");
            $("body").addClass("show-loader");
            $('header').removeClass('white-header');
            var pageheight = $(".scroll-content").height()
            if ($("body").hasClass("smooth-scroll")) {
                TweenMax.to(scrollbar, 0.5, {
                    scrollTop: pageheight,
                    ease: Power4.easeIn
                });
            } else {
                TweenMax.to(window, 0.5, {
                    scrollTo: $("footer").offset().top,
                    ease: Power4.easeIn
                });
            }
            TweenMax.to('#ball', 0.3, {
                borderWidth: "4px",
                scale: 0.5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            });
            if ($('#project-nav').hasClass("light-content")) {
                setTimeout(function() {
                    $('body').addClass('light-content');
                }, 300);
            }
            if ($("body").hasClass("smooth-scroll")) {
                var navmove = $("#content-scroll").height() - $("#hero").height() - $("footer").height()
            } else {
                var navmove = window.innerHeight - $("#hero").height() - $("footer").height()
            }

            TweenMax.to($(".subtitle-info"), 0.3, {
                force3D: true,
                opacity: 0,
                delay: 0,
                y: -20,
                ease: Power2.easeOut
            });
            TweenMax.to($(".subtitle-name"), 0.3, {
                force3D: true,
                opacity: 1,
                y: 0,
                delay: 0.15,
                ease: Power2.easeOut
            });

            TweenMax.to($("#main-page-content, #hero"), 0.3, {
                opacity: 0
            });
            TweenMax.to($("#page-nav"), 0.5, {
                y: -navmove,
                delay: 0.2,
                ease: Power2.easeInOut
            });
            TweenMax.to($("footer"), 0.3, {
                opacity: 0,
                delay: 0.2,
                ease: Power2.easeInOut
            });
        });

        // Project Navigation Events
        $('.next-ajax-link-project').on('click', function() {
            $("body").addClass("load-next-project").addClass("show-loader");
            $('header').removeClass('white-header');
            var pageheight = $(".scroll-content").height()
            if ($("body").hasClass("smooth-scroll")) {
                TweenMax.to(scrollbar, 0.5, {
                    scrollTop: pageheight,
                    ease: Power4.easeIn
                });
            } else {
                TweenMax.to(window, 0.5, {
                    scrollTo: $("footer").offset().top,
                    ease: Power4.easeIn
                });
            }
            TweenMax.to('#ball', 0.3, {
                borderWidth: "4px",
                scale: 0.5,
                backgroundColor: "rgba(0, 0, 0, 0)",
                opacity: 1
            });
            if ($('#project-nav').hasClass("light-content")) {
                setTimeout(function() {
                    $('body').addClass('light-content');
                }, 300);
            }

            TweenMax.to($(".next-title"), 0.4, {
                force3D: true,
                opacity: 0,
                delay: 0,
                y: -20,
                ease: Power2.easeOut
            });
            TweenMax.to($(".next-subtitle-name"), 0.4, {
                force3D: true,
                opacity: 1,
                y: 0,
                delay: 0.2,
                ease: Power2.easeOut
            });

            TweenMax.to($("#main-page-content"), 0.3, {
                opacity: 0
            });
            TweenMax.to($(".next-project-image"), 0.6, {
                scale: 1,
                opacity: 1,
                ease: Power1.easeOut
            });
            TweenMax.to($("footer"), 0.3, {
                opacity: 0,
                ease: Power2.easeInOut
            });

        });

        if ($('#project-nav').length > 0) {
            $('#main-page-content').addClass('project-page');
        }

        if ($('.portfolio').length > 0) {
            $('#main-page-content').addClass('portfolio-page');
        }

        // Slider Center on click
        $('.slider').on('click', function() {
            var $window = $(window)
              , $element = $(this)
              , elementTop = $element.offset().top
              , elementHeight = $element.height()
              , viewportHeight = $window.height()
              , scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
            if ($("body").hasClass("smooth-scroll")) {
                var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height / 2);
                TweenLite.to(scrollbar, 0.8, {
                    scrollTo: scrollOffset + elementHeight / 2,
                    ease: Power4.easeInOut
                });
            } else {
                $("html, body").animate({
                    scrollTop: scrollIt
                }, 350);
            }
        });

        // Carousel Center on click
        $('.carousel').on('click', function() {
            var $window = $(window)
              , $element = $(this)
              , elementTop = $element.offset().top
              , elementHeight = $element.height()
              , viewportHeight = $window.height()
              , scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
            if ($("body").hasClass("smooth-scroll")) {
                var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height / 2);
                TweenLite.to(scrollbar, 0.8, {
                    scrollTo: scrollOffset + elementHeight / 2,
                    ease: Power4.easeInOut
                });
            } else {
                $("html, body").animate({
                    scrollTop: scrollIt
                }, 350);
            }
        });

        $('.item').on('click', function() {
            var $window = $(window)
              , $element = $(this)
              , elementTop = $element.offset().top
              , elementHeight = $element.height()
              , viewportHeight = $window.height()
              , scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
            if ($("body").hasClass("smooth-scroll")) {
                if (!$(this).hasClass("floating")) {
                    var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height / 2);
                    TweenLite.to(scrollbar, 0.8, {
                        scrollTo: scrollOffset + elementHeight / 2,
                        ease: Power4.easeInOut
                    });
                }
            } else {
                if (!$(this).hasClass("floating")) {
                    $("html, body").animate({
                        scrollTop: scrollIt
                    }, 350);
                }
            }
        });

        // Video Center on click
        $('.video-wrapper').on('click', function() {
            var $window = $(window)
              , $element = $(this)
              , elementTop = $element.offset().top
              , elementHeight = $element.height()
              , viewportHeight = $window.height()
              , scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
            if ($("body").hasClass("smooth-scroll")) {
                var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height / 2);
                TweenLite.to(scrollbar, 0.8, {
                    scrollTo: scrollOffset + elementHeight / 2,
                    ease: Power4.easeInOut
                });
            } else {
                $("html, body").animate({
                    scrollTop: scrollIt
                }, 350);
            }
        });

        var viewportWidth = $(window).width();
        if (viewportWidth < 1024) {
            $('.hero-video-wrapper').remove();
        }

        $('#backtotop').on('click', function() {
            if ($("body").hasClass("smooth-scroll")) {
                TweenLite.to(scrollbar, 1.5, {
                    scrollTop: 0,
                    delay: 0.1,
                    ease: Power4.easeInOut
                });
                TweenMax.to('#ball', 0.3, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999',
                    delay: 0.15
                });
            } else {
                $("html,body").animate({
                    scrollTop: 0
                }, 800);
                TweenMax.to('#ball', 0.3, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999',
                    delay: 0.15
                });
            }
        });

        $('#scrolldown').on('click', function() {
            var heroheight = $("#hero").height();
            if ($("body").hasClass("smooth-scroll")) {
                TweenLite.to(scrollbar, 1.5, {
                    scrollTop: heroheight,
                    ease: Power4.easeInOut
                });
            } else {
                $("html,body").animate({
                    scrollTop: heroheight
                }, 800);
            }
        });

        // Tilt Showcase Wrapper
        if ($('#hero').hasClass("has-image")) {
            var timeout;
            $(window).resize(changePersective);
            changePersective();
            function changePersective() {
                TweenMax.set('#hero-bg-wrapper', {
                    perspective: $('body').width()
                });
            }
            $('#hero').mousemove(function(e) {
                if (timeout)
                    clearTimeout(timeout);
                setTimeout(callParallaxHero.bind(null, e));
            });
            function callParallaxHero(e) {
                parallaxItHero(e, '#hero-bg-image', 0);
                //5
                moveItHero(e, '#hero-bg-image', -30);
                //80
            }
            function parallaxItHero(e, target, movement) {
                var $this = $('#hero-bg-wrapper');
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;
                TweenMax.to(target, 1, {
                    rotationY: (relX - $this.width() / 1.5) / $this.width() * movement,
                    rotationX: (relY - $this.height() / 2) / $this.height() * movement,
                })
            }
            function moveItHero(e, target, movement) {
                var $this = $('#hero-bg-wrapper');
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;
                TweenMax.to(target, 1, {
                    x: (relX - $this.width() / 2) / $this.width() * movement,
                    y: (relY - $this.height() / 2) / $this.height() * movement,
                })
            }
        }

        var heroparallax = TweenMax.to('#hero-image-parallax', 1, {
            top: "20%",
            scale: 1.1,
            opacity: 0,
            ease: Linear.easeNone
        });
        var captionParallax = TweenMax.to('#hero-caption', 0.5, {
            yPercent: -15,
            opacity: 0,
            ease: Linear.easeNone
        });
        var bottomParallax = TweenMax.to('.hero-bottom', 0.5, {
            opacity: 0,
            ease: Linear.easeNone
        });

        var bottomheroparallax = TweenMax.to('.next-project-image', 1, {
            top: "0",
            scale: 1.05,
            opacity: 0.8,
            ease: Linear.easeNone
        });
        var bottomcaptionParallax = TweenMax.to('.next-project-title', 0.5, {
            top: "0",
            scale: 1,
            opacity: 1,
            ease: Linear.easeNone
        });

        var controller = new ScrollMagic.Controller();

        var heroScene = new ScrollMagic.Scene({
            triggerElement: '#hero',
            triggerHook: 0,
            duration: '120%'
        }).setTween(heroparallax).addTo(controller);

        var captionScene = new ScrollMagic.Scene({
            triggerElement: '#hero',
            triggerHook: 0,
            duration: '50%'
        }).setTween(captionParallax).addTo(controller);

        var bottomScene = new ScrollMagic.Scene({
            triggerElement: '#hero',
            triggerHook: 0,
            duration: '20%'
        }).setTween(bottomParallax).addTo(controller);

        var bottomheroScene = new ScrollMagic.Scene({
            triggerElement: '#project-nav',
            triggerHook: 1,
            duration: '100%'
        }).setTween(bottomheroparallax).addTo(controller);

        var bottomcaptionScene = new ScrollMagic.Scene({
            triggerElement: '#project-nav',
            triggerHook: 1,
            duration: '100%'
        }).setTween(bottomcaptionParallax).addTo(controller);

        if ($("body").hasClass("smooth-scroll")) {
            scrollbar.addListener(()=>{
                heroScene.refresh()
                captionScene.refresh()
                bottomScene.refresh()
                bottomheroScene.refresh()
                bottomcaptionScene.refresh()
            }
            );
        }

        // 	parallax image 
        $(".has-parallax").each(function() {
            var $this = $(this);
            var $thisHeight = $(this).height();
            var bg = $this.find("img");

            // Add tweenmax for backgroundParallax
            var parallax = TweenMax.fromTo(bg, 1, {
                y: '-30%'
            }, {
                y: '-10%',
                delay: 0.1,
                ease: Power2.easeOut
            });

            // Create scrollmagic scene
            var parallaxScene = new ScrollMagic.Scene({
                triggerElement: this,
                // <-- Use this to select current element
                triggerHook: 1,
                duration: '300%'
            }).setTween(parallax).addTo(controller);

            if ($("body").hasClass("smooth-scroll")) {
                scrollbar.addListener(()=>{
                    parallaxScene.refresh()
                }
                );
            }

        });

        // animate each
        $('.has-animation').each(function() {
            var $this = $(this);
            var $thisHeight = $(this).height();

            var scene = new ScrollMagic.Scene({
                triggerElement: $this[0],
                duration: $thisHeight
            }).addTo(controller);

            scene.triggerHook(1)

            scene.on('enter', function() {
                $this.delay($this.attr('data-delay')).queue(function(next) {
                    TweenMax.to($this, 0.6, {
                        force3D: true,
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        delay: 0.2,
                        ease: Power2.easeOut
                    });
                    next();
                });
            });

            scene.on('leave', function(event) {
                $this.removeClass('active');
            });

            if ($("body").hasClass("smooth-scroll")) {
                scrollbar.addListener(()=>{
                    scene.refresh()
                }
                );
            }
        })

        $("body").find(".has-scale").each(function(i) {
            $(this).wrap("<div class='figure-wrapper'></div>");
        });

        $('.has-mask').each(function() {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

        $('.has-mask span').each(function() {
            var words = $(this).text().split(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

        $('.has-mask').each(function() {
            var $this = $(this);
            var $thisHeight = $(this).height();

            var scene = new ScrollMagic.Scene({
                triggerElement: $this[0],
                duration: $thisHeight
            }).addTo(controller);

            scene.triggerHook(1)

            scene.on('enter', function() {

                var tl = new TimelineLite();

                $this.find('span > span').each(function(index, element) {
                    tl.to(element, 0.6, {
                        y: 0,
                        opacity: 1,
                        delay: 0.3,
                        ease: Power2.easeOut
                    }, index * 0.03)
                });

            });

            scene.on('leave', function(event) {
                $this.removeClass('active');
            });

            if ($("body").hasClass("smooth-scroll")) {
                scrollbar.addListener(()=>{
                    scene.refresh()
                }
                );
            }
        })

        $('.portfolio .item').each(function() {
            var $this = $(this);
            var $thisHeight = $(this).height();

            var scene = new ScrollMagic.Scene({
                triggerElement: $this[0],
                duration: $thisHeight
            }).addTo(controller);

            scene.triggerHook(0.9)

            scene.on('enter', function() {
                $this.addClass('active');
            });

            if ($("body").hasClass("smooth-scroll")) {
                scrollbar.addListener(()=>{
                    scene.refresh()
                }
                );
            }
        })

        $("body").find(".white-section").each(function(i) {
            $(this).wrap("<div class='white-section-wrapper'><div class='white-section-container'></div></div>");
            $("body").find(".white-section-wrapper").each(function(i) {
                $(this).css('background-color', function() {
                    return $(this).children().children().css('background-color')
                });
            });
        });

        $("body").find(".dark-section").each(function(i) {
            $(this).wrap("<div class='dark-section-wrapper'><div class='dark-section-container'></div></div>");
            $("body").find(".dark-section-wrapper").each(function(i) {
                $(this).css('background-color', function() {
                    return $(this).children().children().css('background-color')
                });
            });
        });

        if ($("body").hasClass("smooth-scroll")) {

            setTimeout(function() {

                $('.white-section').each(function() {
                    var $this = $(this);
                    var $thisHeight = $(this).outerHeight();

                    var whiteScene = new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: $thisHeight
                    }).addTo(controller);

                    whiteScene.triggerHook(0.08)

                    whiteScene.on('enter', function() {
                        $('header').addClass('white-header');
                    });

                    whiteScene.on('leave', function() {
                        $('header').removeClass('white-header');
                    });

                    if ($("body").hasClass("smooth-scroll")) {
                        scrollbar.addListener(()=>{
                            whiteScene.refresh()
                        }
                        );
                    }
                })

            }, 1000);

        } else {
            setTimeout(function() {
                $('.white-section').each(function() {

                    var $this = $(this);
                    var $thisHeight = $(this).outerHeight();

                    var whiteScene = new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: $thisHeight
                    }).setClassToggle("header", "white-header")// add class toggle
                    .addTo(controller);

                    whiteScene.triggerHook(0.08)

                })
            }, 1000);
        }

        $('header').removeClass('white-header');

        $('.article-wrap').each(function() {
            var $this = $(this);
            var $thisHeight = $(this).height();

            var scene = new ScrollMagic.Scene({
                triggerElement: $this[0],
                duration: $thisHeight
            }).addTo(controller);

            scene.triggerHook(1)

            scene.on('enter', function() {
                $this.addClass('active');
            });

            if ($("body").hasClass("smooth-scroll")) {
                scrollbar.addListener(()=>{
                    scene.refresh()
                }
                );
            }
        })

        // add a label element to CF7 input elements for the underline highlight effect
        $('.wpcf7-form-control-wrap').each(function() {

            if ($(this).has('label').length <= 0) {
                $(this).append('<label class="input_label"></label>');
            }
        });

        $('.page-numbers li a').each(function() {
            $(this).addClass("link")
        });

        setTimeout(function() {
            $('#hover-projects').each(function() {
                var $this = $(this);
                var $thisHeight = $(this).outerHeight();

                var scene = new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    duration: $thisHeight
                }).addTo(controller)

                scene.triggerHook(0.36)

                scene.on('enter', function() {
                    TweenMax.to($("#image-slider"), 0.3, {
                        opacity: 1,
                        delay: 0,
                        ease: Power2.easeOut
                    });
                });

                scene.on('leave', function() {
                    TweenMax.to($("#image-slider"), 0.15, {
                        opacity: 0,
                        delay: 0,
                        ease: Power2.easeOut
                    });
                });

                if ($("body").hasClass("smooth-scroll")) {
                    scrollbar.addListener(()=>{
                        scene.refresh()
                    }
                    );
                }
            })

            $('#hover-projects li a').each(function() {
                var $this = $(this);
                var $thisHeight = $(this).height();

                var scene = new ScrollMagic.Scene({
                    triggerElement: $this[0],
                    duration: $thisHeight
                }).addTo(controller);

                scene.triggerHook(0.9)

                scene.on('enter', function() {
                    $this.addClass('active');
                });

                if ($("body").hasClass("smooth-scroll")) {
                    scrollbar.addListener(()=>{
                        scene.refresh()
                    }
                    );
                }
            })
        }, 300);

    }
    // End First Load

    /*--------------------------------------------------
Function Hover Lists
---------------------------------------------------*/

    function HoverLists() {

        if ($("#hover-projects").length > 0) {

            $("#main-content").addClass("transparent");

            $('.slider-img').each(function() {
                var image = $(this).data('src');
                $(this).css({
                    'background-image': 'url(' + image + ')'
                });
            });

            $('.video-cover').each(function() {
                var image = $(this).data('src');
                $(this).css({
                    'background-image': 'url(' + image + ')'
                });
            });

            //Load Image Changer
            $('.slider-img:nth-child(1)').addClass('active');
            $('.slider-img:nth-child(1)').find('video').each(function() {
                $(this).get(0).play();
            });
            $('#hover-projects li').on('mouseenter touchstart', function() {
                if (!$(this).hasClass("active")) {
                    $('.slider-img').find('video').each(function() {
                        $(this).get(0).pause();
                    });
                    $('#hover-projects li').removeClass('active');
                    $(this).addClass('active');
                    var slide = $(this).data('slide')
                      , preview = $('.slider-img[data-slide="' + slide + '"]');
                    $('#image-slider').find('.slider-img').removeClass('active');
                    preview.addClass('active');
                    preview.find('video').each(function() {
                        $(this).get(0).play();
                    });
                }

            })

            $('#hover-projects li a').on('click', function() {
                $(this).parents('#hover-projects li').addClass('above');
                $("body").addClass("load-project-hover").addClass("show-loader");
                TweenMax.to($("#hero, #page-nav, footer"), 0.3, {
                    force3D: true,
                    opacity: 0,
                    delay: 0,
                    ease: Power2.easeOut
                });
                var tlProjects = new TimelineLite();
                $("#hover-projects li .hl-timeline").each(function(index, element) {
                    tlProjects.to(element, 0.25, {
                        y: -40,
                        opacity: 0,
                        ease: Power2.easeIn
                    }, index * 0.03)
                });
                TweenMax.to('#ball', 0.3, {
                    borderWidth: '2px',
                    delay: 0.3,
                    scale: 1,
                    opacity: 1
                });

            });

        }

    }
    // End HoverLists	

    /*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

    function LazyLoad() {

        $('body').waitForImages({
            finished: function() {
                $('body').removeClass('loading')
                setTimeout(function() {
                    $('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
                }, 1500);
            },
            waitForAll: true
        });

        $('body').waitForImages({
            finished: function() {
                TweenMax.to($("#header-container, .header-middle"), 1, {
                    force3D: true,
                    opacity: 1,
                    ease: Power2.easeOut
                });
            },
            waitForAll: true
        });

        TweenMax.to($("#main"), 0.2, {
            force3D: true,
            opacity: 1,
            delay: 0.1,
            ease: Power2.easeOut
        });

        if ($('#hero').hasClass("has-image")) {
            if ($('body').hasClass("load-project-thumb")) {
                TweenMax.to($("#hero-bg-image"), 0, {
                    force3D: true,
                    scale: 1.05,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut
                });

                TweenMax.to($(".hero-title"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.7,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hero-subtitle"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.6,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hb-left"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.8,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        $('.hb-left').addClass('enable');
                    }
                });
                TweenMax.to($(".hb-right"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.9,
                    ease: Power2.easeOut
                });
            } else if ($('body').hasClass("load-project-hover")) {
                TweenMax.to($("#hero-bg-image"), 0, {
                    force3D: true,
                    scale: 1.05,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut
                });

                TweenMax.to($(".hero-title"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.7,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hero-subtitle"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.6,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hb-left"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.8,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        $('.hb-left').addClass('enable');
                    }
                });
                TweenMax.to($(".hb-right"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.9,
                    ease: Power2.easeOut
                });
            } else {
                TweenMax.to($("#hero-bg-image"), 0, {
                    force3D: true,
                    scale: 1.05,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hero-title"), 0, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hero-subtitle"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut
                });
                TweenMax.to($(".hb-left"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        $('.hb-left').addClass('enable');
                    }
                });
                TweenMax.to($(".hb-right"), 0.4, {
                    force3D: true,
                    y: 0,
                    opacity: 1,
                    delay: 0.1,
                    ease: Power2.easeOut
                });
            }
            TweenMax.to($(".scroll-down-wrap"), 0.4, {
                force3D: true,
                y: 0,
                opacity: 1,
                delay: 0.85,
                ease: Power2.easeOut
            });
            TweenMax.to($("#main-page-content"), 0.4, {
                force3D: true,
                opacity: 1,
                y: 0,
                delay: 0.95,
                ease: Power2.easeOut
            });
        } else {
            TweenMax.to($(".hero-title"), 0.4, {
                force3D: true,
                y: 0,
                opacity: 1,
                delay: 0.1,
                ease: Power2.easeOut
            });
            TweenMax.to($(".hero-subtitle"), 0.4, {
                force3D: true,
                y: 0,
                opacity: 1,
                delay: 0.15,
                ease: Power2.easeOut
            });
            TweenMax.to($(".post-article-wrap"), 0.4, {
                force3D: true,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut
            });
            TweenMax.to($("#main-page-content"), 0.4, {
                force3D: true,
                opacity: 1,
                y: 0,
                delay: 0.15,
                ease: Power2.easeOut
            });
            TweenMax.to($("#show-filters"), 0.4, {
                force3D: true,
                opacity: 1,
                delay: 0.3,
                ease: Power2.easeOut
            });
        }

        if ($('#hero-bg-image').hasClass("light-content")) {
            $('#hero-caption').addClass('light-content');
            setTimeout(function() {
                $('#header-container').addClass('light-content');
            }, 600);
        }

        TweenMax.to($("#showcase-holder"), 0.4, {
            force3D: true,
            opacity: 1,
            scale: 1,
            delay: 0.2,
            ease: Power2.easeOut
        });
        //modified time

        // Fading In Small Carousel elements on Finised
        var tlCarousel = new TimelineLite();
        tlCarousel.set($("#showcase-carousel-slider .swiper-slide"), {
            x: 300,
            opacity: 0
        });
        $("#showcase-carousel-slider .swiper-slide").each(function(index, element) {
            tlCarousel.to(element, 1.4, {
                x: 0,
                opacity: 1,
                delay: 0.7,
                ease: Power3.easeOut
            }, index * 0.1)
        });

        // Blog Load
        TweenMax.to($("#post-content, #post .post-image, .post-meta-data, .post-navigation, .post-comments, .post-form"), 0.4, {
            force3D: true,
            opacity: 1,
            y: 0,
            delay: 0.1,
            ease: Power2.easeOut
        });
        TweenMax.to($("#blog-navigation, #sidebar"), 1, {
            force3D: true,
            opacity: 1,
            ease: Power2.easeOut
        });
        TweenMax.to($("#blog-content"), 0.4, {
            force3D: true,
            opacity: 1,
            y: 0,
            delay: 0.15,
            ease: Power2.easeOut
        });

        TweenMax.to($("#footer-container"), 1, {
            force3D: true,
            opacity: 1,
            delay: 0.4,
            ease: Power2.easeOut
        });

        if ($('.load-project-thumb').length > 0) {
            setTimeout(function() {
                $('#hero-bg-wrapper').find('video').each(function() {
                    $(this).get(0).play();
                });
                $('.thumb-container').remove();
            }, 200);
        } else {
            $('#hero-bg-wrapper').find('video').each(function() {
                $(this).get(0).play();
            });
        }

        setTimeout(function() {
            $('header').removeClass('white-header');
            $('body').removeClass("load-project-thumb").removeClass("load-project-page").removeClass("load-project-page-carousel").removeClass("load-next-project").removeClass("show-loader").removeClass("load-next-page").removeClass("load-project-hover");
        }, 800);

        setTimeout(function() {
            $('#showcase-holder').removeClass("disabled");
        }, 1900);

    }
    // End Lazy Load		

    /*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
    function Showcase() {

        if ($('#showcase-slider').length > 0) {

            var titles = [];
            var subtitle = [];
            var counter = [];
            $('#showcase-slider .swiper-slide').each(function(i) {
                titles.push($(this).data('title'));
                subtitle.push($(this).data('subtitle'))
                counter.push($(this).data('number'))
            });

            var interleaveOffset = 0.4;

            var swiperOptions = {
                direction: "horizontal",
                loop: false,
                grabCursor: true,
                resistance: true,
                resistanceRatio: 0.5,
                slidesPerView: 1,
                allowTouchMove: true,
                speed: 900,
                autoplay: false,
                mousewheel: true,
                pagination: {
                    el: '.showcase-captions',
                    clickable: true,
                    renderBullet: function(index, className) {
                        return '<div class="outer ' + className + '">' + '<div class="inner">' + '<div class="subtitle">' + subtitle[index] + '</div>' + '<div class="title">' + titles[index] + '</div>' + '<div class="counter-wrap">' + '<div class="counter">' + counter[index] + '</div>' + '</div>' + '</div>' + '</div>';

                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    progress: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.height * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
                        }

                    },
                    touchStart: function() {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },
                    setTransition: function(speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
                        }
                    },
                    init: function() {
                        $('.swiper-slide-active').find('video').each(function() {
                            $(this).get(0).play();
                        });
                    },
                    slideNextTransitionStart: function() {

                        var prevslidecaption = new TimelineLite();
                        prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {
                            y: -60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        })
                        var prevslidetitle = new TimelineLite();
                        prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {
                            y: -60,
                            opacity: 0,
                            delay: 0.1,
                            ease: Power2.easeInOut
                        })

                        var activeslidecaption = new TimelineLite();
                        activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            delay: 0.5,
                            ease: Power2.easeOut
                        })
                        var activeslidetitle = new TimelineLite();
                        activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title'), 0.5, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            delay: 0.6,
                            ease: Power2.easeOut
                        })

                        var nextslidecaption = new TimelineLite();
                        nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {
                            y: 60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        })
                        var nextslidetitle = new TimelineLite();
                        nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {
                            y: 60,
                            opacity: 0,
                            ease: Power2.easeInOut
                        })

                        var tl = new TimelineLite();

                        $('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
                            tl.to(element, 0.3, {
                                scale: 1,
                                y: -20,
                                opacity: 0,
                                ease: Power2.easeIn
                            }, index * 0.01)
                        });

                        $('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
                            tl.to(element, 0.4, {
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                delay: 0.3,
                                ease: Power2.easeOut
                            }, index * 0.01)
                        });

                        $('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
                            tl.to(element, 0.3, {
                                scale: 1,
                                y: 20,
                                opacity: 0,
                                ease: Power2.easeIn
                            }, index * 0.01)
                        });

                    },
                    slidePrevTransitionStart: function() {

                        var prevslidecaption = new TimelineLite();
                        prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {
                            y: -60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        })
                        var prevslidetitle = new TimelineLite();
                        prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {
                            y: -60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        })

                        var activeslidecaption = new TimelineLite();
                        activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            delay: 0.5,
                            ease: Power2.easeOut
                        })
                        var activeslidetitle = new TimelineLite();
                        activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title'), 0.5, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            delay: 0.4,
                            ease: Power2.easeOut
                        })

                        var nextslidecaption = new TimelineLite();
                        nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {
                            y: 60,
                            opacity: 0,
                            delay: 0.1,
                            ease: Power2.easeIn
                        })
                        var nextslidetitle = new TimelineLite();
                        nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {
                            y: 60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        })

                        var tl = new TimelineLite();

                        $('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
                            tl.to(element, 0.3, {
                                scale: 1,
                                y: -20,
                                opacity: 0,
                                delay: 0.1,
                                ease: Power2.easeIn
                            }, index * 0.01)
                        });

                        $('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
                            tl.to(element, 0.4, {
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                delay: 0.45,
                                ease: Power2.easeOut
                            }, index * 0.01)
                        });

                        $('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
                            tl.to(element, 0.3, {
                                scale: 1,
                                y: 20,
                                opacity: 0,
                                delay: 0.1,
                                ease: Power2.easeIn
                            }, index * 0.01)
                        });

                    },
                    slideChangeTransitionStart: function() {

                        $('.swiper-button-white').addClass('disable-click');

                        $('.swiper-slide-active').find('video').each(function() {
                            $(this).get(0).play();
                        });

                    },
                    slideChangeTransitionEnd: function() {

                        $('.swiper-button-white').removeClass('disable-click');

                        $('.swiper-slide-prev').find('video').each(function() {
                            $(this).get(0).pause();
                        });

                        $('.swiper-slide-next').find('video').each(function() {
                            $(this).get(0).pause();
                        });

                        var prevslidecaption = new TimelineLite();
                        prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {
                            y: -60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeIn
                        })
                        var prevslidetitle = new TimelineLite();
                        prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {
                            y: -60,
                            opacity: 0,
                            delay: 0.1,
                            ease: Power2.easeInOut
                        })

                        var nextslidecaption = new TimelineLite();
                        nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {
                            y: 60,
                            opacity: 0,
                            delay: 0.1,
                            ease: Power2.easeIn
                        })
                        var nextslidetitle = new TimelineLite();
                        nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {
                            y: 60,
                            opacity: 0,
                            delay: 0,
                            ease: Power2.easeInOut
                        })

                    }
                },
            };

            var swiper = new Swiper(".swiper-container",swiperOptions);

            $("#showcase-slider .swiper-slide").find(".title").each(function(i) {
                $(this).wrap("<div class='outer'><div class='inner'></div></div>");
            });

            $("footer").addClass("showcase-footer")

            // Tilt Showcase Wrapper
            var maxTilt = 1.5;
            var mouseX, mouseY;
            $(document).on("mousemove", function(event) {
                mouseX = event.pageX;
                mouseY = event.pageY;
            });
            $('#showcase-tilt').each(function() {
                var thisWidth = $(this).width();
                var thisHeight = $(this).height();
                var thisOffset = $(this).offset();
                $(document).mousemove(function() {
                    var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
                    var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;
                    TweenMax.to('#showcase-tilt', 1, {
                        rotationY: horTilt,
                        rotationX: verTilt,
                        scale: 1.05,
                        ease: Power1.easeOut
                    });
                });
            });

            if ($(window).width() >= 1024) {

                $('.swiper-slide a').on('mousedown', function(event) {
                    return false;
                });

                $('#showcase-slider').on('mousedown touchstart', function() {
                    $('body').addClass('scale-up');
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        borderColor: '#999',
                        scale: 1
                    });

                });
                $('#showcase-slider').on('mouseup touchend', function() {
                    $('body').removeClass('scale-up');
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999'
                    });
                });

                $('body').on('mouseup touchend', function() {
                    $('body').removeClass('scale-up');

                });

            }

            TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter"), 1, {
                force3D: true,
                opacity: 1,
                delay: 0.4,
                ease: Power2.easeOut
            });

            $('#showcase-slider .outer .title').on('mouseenter', function() {
                $("body").find(".swiper-pagination-bullet .title").each(function(i) {
                    $(this).addClass('hovered');
                });
            }).on('mouseleave', function() {
                $("body").find(".swiper-pagination-bullet .title").each(function(i) {
                    $(this).removeClass('hovered');
                });
            });

            $("body").find(".has-scale").each(function(i) {
                $(this).wrap("<div class='figure-wrapper'></div>");
            });

        }

    }
    //End Showcase

    /*--------------------------------------------------
Function ShowcaseCarousel
---------------------------------------------------*/

    function ShowcaseCarousel() {

        if ($('#showcase-carousel-slider').length > 0) {

            $("footer").addClass("showcase-footer");

            $("#showcase-carousel-slider .img-mask").wrap("<div class='img-mask-wrap'></div>");

            var swiperOptions = {
                direction: "horizontal",
                loop: false,
                grabCursor: true,
                resistance: true,
                resistanceRatio: 0.5,
                slidesPerView: 4,
                breakpoints: {
                    1466: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    479: {
                        slidesPerView: 1,
                    }
                },
                allowTouchMove: true,
                speed: 500,
                autoplay: false,
                effect: "slide",
                mousewheel: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            };

            var swiper = new Swiper(".swiper-container",swiperOptions);

            if ($('.high-columns').length > 0) {

                if ($(window).width() >= 1466) {
                    var highSwiper = document.querySelector('.swiper-container').swiper;
                    highSwiper.params.slidesPerView = 3;
                    highSwiper.update();
                }

                $('#showcase-carousel-slider.high-columns .carousel-caption').on('click', function() {
                    $(this).parents('.swiper-slide').find('.section-image').trigger('click');
                });

                $(".thumb-no-ajax #showcase-carousel-slider.high-columns a").mouseenter(function(e) {
                    $(this).parents('.swiper-slide').find('.carousel-caption').addClass('hovered');
                });

                $(".thumb-no-ajax #showcase-carousel-slider.high-columns a").mouseleave(function(e) {
                    $('.swiper-slide').find('.carousel-caption').removeClass('hovered');
                });

            }

            if (!$("#showcase-carousel-slider").hasClass("high-columns")) {

                $(".swiper-slide").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.3, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff'
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>');
                    $(this).find('video').each(function() {
                        $(this).get(0).play();
                    });
                });

                $(".swiper-slide").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999'
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon");
                    $('#ball i').remove();
                    $('body').removeClass('scale-up');
                    $(this).find('video').each(function() {
                        $(this).get(0).pause();
                    });
                });

                $('.swiper-slide').on('mousedown', function(event) {
                    return false;
                });
            }

            $(".swiper-slide").mouseenter(function(e) {
                $(this).find('video').each(function() {
                    $(this).get(0).play();
                });
            });

            $(".swiper-slide").mouseleave(function(e) {
                $(this).find('video').each(function() {
                    $(this).get(0).pause();
                });
            });

            $('#showcase-carousel-slider').on('mousedown touchstart', function() {
                $('body').addClass('scale-up');
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '2px',
                    borderColor: '#999',
                    scale: 1
                });

            });
            $('#showcase-carousel-slider').on('mouseup touchend', function() {
                $('body').removeClass('scale-up');
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999'
                });
            });

            $('body').on('mouseup touchend', function() {
                $('body').removeClass('scale-up');

            });

            FitSlideScreen();

        }

    }
    //End ShowcaseCarousel

    /*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/

    function Portfolio() {

        if ($('.portfolio-wrap').length > 0) {

            $('.portfolio .floating').eq(0).addClass('first');

            if ($("body").hasClass("smooth-scroll")) {
                var elem = document.querySelector("#content-scroll");
                var scrollbar = Scrollbar.init(elem, {
                    renderByPixels: true,
                    damping: 0.05
                });
            }

            var $container = $('.portfolio');

            $container.isotope({
                layoutMode: 'packery',
                itemSelector: '.item',
                gutter: 0,
                transitionDuration: "0.5s"
            });

            $('#filters a').on('click', function() {
                $('#filters a').removeClass('active');
                $(this).addClass('active');
                $('.item').addClass('item-margins');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                }, function($changedItems, instance) {
                    instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
                    instance.$filteredAtoms.addClass('is-filtered');
                });
                return false;
            });

            $("#all").trigger('click');

            $('.item').each(function() {
                var image = $(this).find('.item-image').data('src');
                $(this).find('.item-image').css({
                    'background-image': 'url(' + image + ')'
                });
            });

            $(".item-wrap-image").mouseenter(function(e) {
                TweenMax.to('#ball', 0.3, {
                    borderWidth: '2px',
                    scale: 1,
                    borderColor: '#fff'
                });
                TweenMax.to('#ball-loader', 0.2, {
                    borderWidth: '2px',
                    top: 2,
                    left: 2
                });
                $("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>');
                $(this).find('video').each(function() {
                    $(this).get(0).play();
                });
            });

            $(".item-wrap-image").mouseleave(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999'
                });
                TweenMax.to('#ball-loader', 0.2, {
                    borderWidth: '4px',
                    top: 0,
                    left: 0
                });
                $("#ball").removeClass("with-icon");
                $('#ball i').remove();
                $(this).find('video').each(function() {
                    $(this).get(0).pause();
                });
            });

            //Show Filters On overlay
            $('#show-filters, #close-filters').on('click', function() {
                $('#filters-overlay').toggleClass('active');

                setTimeout(function() {
                    if ($('#filters-overlay').hasClass("active")) {

                        TweenMax.to($("#main"), 0.6, {
                            force3D: true,
                            scale: 1,
                            opacity: 0.3,
                            delay: 0,
                            ease: Power2.easeInOut
                        });
                        TweenMax.to($(".active .item-caption"), 0.3, {
                            opacity: 0,
                            ease: Power2.easeOut
                        });

                        //Fade In Navigation Lists						
                        var tlMenu = new TimelineLite();
                        tlMenu.set($(".filters-timeline"), {
                            y: 60,
                            opacity: 0
                        });
                        $(".filters-timeline").each(function(index, element) {
                            tlMenu.to(element, 0.5, {
                                y: 0,
                                opacity: 1,
                                delay: 1.2,
                                ease: Power3.easeOut
                            }, index * 0.1)
                        });

                        var heroheight = $("#hero").height();
                        if ($("body").hasClass("smooth-scroll")) {
                            TweenLite.to(scrollbar, 1.5, {
                                scrollTop: heroheight + 80,
                                ease: Power4.easeInOut
                            });
                        } else {
                            $("html,body").animate({
                                scrollTop: heroheight + 80
                            }, 800);
                        }

                    } else {

                        TweenMax.to($("#main"), 0.6, {
                            force3D: true,
                            scale: 1,
                            opacity: 1,
                            delay: 0.3,
                            ease: Power2.easeInOut
                        });
                        TweenMax.to($(".active .item-caption"), 0.5, {
                            opacity: 1,
                            delay: 0.5,
                            ease: Power2.easeOut
                        });

                        //Fade Out Navigation Lists

                        var tlMenu = new TimelineLite();
                        $(".filters-timeline").each(function(index, element) {
                            tlMenu.to(element, 0.25, {
                                opacity: 0,
                                y: -60,
                                delay: 0.1,
                                ease: Power1.easeIn
                            }, index * 0.1)
                        });

                        TweenMax.to('#ball', 0.1, {
                            borderWidth: '4px',
                            scale: 0.5,
                        });
                        $("#ball").removeClass("close-icon");
                        $('#ball i').remove();

                    }
                }, 20);
            });

            $("#close-filters").mouseenter(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '2px',
                    scale: 1,
                    borderColor: '#fff',
                });
                TweenMax.to('#ball-loader', 0.2, {
                    borderWidth: '2px',
                    top: 2,
                    left: 2
                });
                $("#ball").addClass("close-icon").append('<i class="fa fa-times"></i>');
            });

            $("#close-filters").mouseleave(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999',
                });
                TweenMax.to('#ball-loader', 0.2, {
                    borderWidth: '4px',
                    top: 0,
                    left: 0
                });
                $("#ball").removeClass("close-icon");
                $('#ball i').remove();
            });

            //Floating Items
            $(document).mousemove(function(e) {
                $('.floating .item-image').offset({
                    left: e.pageX + 20,
                    top: e.pageY + 20
                });
            });

            $(".floating .item-caption").wrap("<div class='item-caption-wrap'></div>");

            $('.floating .item-appear').on('mouseenter', function() {
                $(this).parents('.item').addClass('show-image');
                $('.floating').addClass('disable');
                $(this).parents('.floating').removeClass('disable');
                $(this).parents('.item').find('video').each(function() {
                    $(this).get(0).play();
                });
            }).on('mouseleave', function() {
                $(this).parents('.item').removeClass('show-image');
                $('.floating').removeClass('disable');
                $(this).parents('.item').find('video').each(function() {
                    $(this).get(0).pause();
                });
            });

            $("body").find(".item-wrap-image").each(function(i) {
                $(this).wrap("<div class='spaced-wrap-image'></div>");
            });

            if ((typeof ClapatBaumanThemeOptions != 'undefined') && (ClapatBaumanThemeOptions.enable_ajax == "1")) {

                //Fit Thumb Screen
                FitThumbScreen();
            }

        }

    }
    //End Portfolio

    /*--------------------------------------------------
Function Blog
---------------------------------------------------*/

    function Blog() {

        //Floating Items
        if ($('#blog').hasClass("blog-minimal-lists")) {
            setTimeout(function() {
                $('#blog').mousemove(function(e) {
                    $('.article-wrap .article-img').offset({
                        left: e.pageX + 20,
                        top: e.pageY + 20
                    });
                });
            }, 100);

            $('.article-wrap .post-title ').on('mouseenter', function() {
                $(this).parents('article').addClass('show-image');
                $('article').addClass('disable');
                $(this).parents('article').removeClass('disable');

            }).on('mouseleave', function() {
                $(this).parents('article').removeClass('show-image');
                $('article').removeClass('disable');
            });
        }

        if ($('#blog').hasClass("blog-thumbnails-grid")) {
            $('article').on('mouseenter', function() {
                $(this).addClass('show-image');
                $('article').addClass('disable');
                $(this).removeClass('disable');

            }).on('mouseleave', function() {
                $(this).removeClass('show-image');
                $('article').removeClass('disable');
            });
        }

        $('#open-sidebar, #open-sidebar-nav, #black-fade').on('click', function() {
            $('#open-sidebar').toggleClass('open');
            $('#sidebar').toggleClass('open');
            $('#black-fade').toggleClass('fade-in');
        });

        $("#black-fade").mouseenter(function(e) {
            TweenMax.to('#ball', 0.2, {
                borderWidth: '2px',
                scale: 1,
                borderColor: '#fff',
            });
            $("#ball").addClass("with-icon").append('<i class="fa fa-times"></i>');
        });

        $("#black-fade").mouseleave(function(e) {
            TweenMax.to('#ball', 0.2, {
                borderWidth: '4px',
                scale: 0.5,
                borderColor: '#999999',
            });
            $("#ball").removeClass("with-icon");
            $('#ball i').remove();
        });

        $("#black-fade").on('click', function() {
            TweenMax.to('#ball', 0.2, {
                borderWidth: '4px',
                scale: 0.5,
                borderColor: '#999999',
            });
            $("#ball").removeClass("with-icon");
            $('#ball i').remove();
        });

        $("select").wrap("<div class='select hide-ball'></div>");

    }
    //End Blog			

    /*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/

    function Shortcodes() {

        // Accordion	  

        $('dd.accordion-content').slideUp(1).addClass('hide');
        $('dl.accordion').on('click', 'dt', function() {
            $(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');
        });
        $('dl.accordion').on('click', 'dt.accordion-active', function() {
            $(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
        });

        $(".flexnav").flexNav({
            'animationSpeed': 250
        });

    }
    //End Shortcodes

    /*--------------------------------------------------
Function Sliders
---------------------------------------------------*/

    function Sliders() {

        if ($('.slider').length > 0) {

            $('.slider').owlCarousel({
                loop: true,
                margin: 500,
                center: true,
                autoHeight: false,
                nav: true,
                navSpeed: 500,
                items: 1,
            });

            $(".slider .owl-prev").removeClass("parallax-wrap");
            $(".slider .owl-next").removeClass("parallax-wrap");

            if ($('.slider').hasClass("dark-controls")) {

                $(".owl-prev").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").addClass("dark-icon").append('<i class="fa fa-chevron-left"></i>');
                });

                $(".owl-prev").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon").removeClass("dark-icon");
                    $('#ball i').remove();
                });

                $(".owl-next").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").addClass("dark-icon").append('<i class="fa fa-chevron-right"></i>');
                });

                $(".owl-next").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon").removeClass("dark-icon");
                    $('#ball i').remove();
                });

            } else {

                $(".owl-prev").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").append('<i class="fa fa-chevron-left"></i>');
                });

                $(".owl-prev").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon");
                    $('#ball i').remove();
                });

                $(".owl-next").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").append('<i class="fa fa-chevron-right"></i>');
                });

                $(".owl-next").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon");
                    $('#ball i').remove();
                });

            }

        }

        if ($('.carousel').length > 0) {

            $('.carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoHeight: false,
                navSpeed: 600,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    479: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1466: {
                        items: 3
                    }
                }
            });

            $(".carousel").mouseenter(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '2px',
                    scale: 1,
                    borderColor: '#fff',
                });
                $("body").addClass("scale-up");
            });

            $(".carousel").mouseleave(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999',
                });
                $("body").removeClass("scale-up");
            });

        }

        if ($('.carousel-auto').length > 0) {

            $('.carousel-auto').owlCarousel({
                loop: true,
                margin: 20,
                autoWidth: true,
                navSpeed: 600,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    479: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1466: {
                        items: 3
                    }
                }
            });

            setTimeout(function() {
                $(".carousel-auto .owl-prev").removeClass("parallax-wrap");
                $(".carousel-auto .owl-next").removeClass("parallax-wrap");
            }, 100);

            setTimeout(function() {

                $(".owl-prev").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").append('<i class="fa fa-chevron-left"></i>');
                });

                $(".owl-prev").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon");
                    $('#ball i').remove();
                });

                $(".owl-next").mouseenter(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '2px',
                        scale: 1,
                        borderColor: '#fff',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '2px',
                        top: 2,
                        left: 2
                    });
                    $("#ball").addClass("with-icon").append('<i class="fa fa-chevron-right"></i>');
                });

                $(".owl-next").mouseleave(function(e) {
                    TweenMax.to('#ball', 0.2, {
                        borderWidth: '4px',
                        scale: 0.5,
                        borderColor: '#999999',
                    });
                    TweenMax.to('#ball-loader', 0.2, {
                        borderWidth: '4px',
                        top: 0,
                        left: 0
                    });
                    $("#ball").removeClass("with-icon");
                    $('#ball i').remove();
                });

            }, 200);

        }

        if ($('.text-carousel').length > 0) {
            $(".text-carousel").owlCarousel({
                loop: true,
                dots: false,
                items: 1,
                autoplay: false,
                smartSpeed: 750,
                autoHeight: true,
                autoplayHoverPause: true,
                nav: true,
                navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>", "<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
            });
        }

    }
    //End Sliders	

    /*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/

    function JustifiedGrid() {

        if ($('#justified-grid').length > 0) {

            $('#justified-grid').justifiedGallery({
                rowHeight: 300,
                lastRow: 'nojustify',
                margins: 10
            });

        }

    }
    //End Justified Grid	

    /*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/

    function Lightbox() {

        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

        $(".image-link").mouseenter(function(e) {
            TweenMax.to('#ball', 0.2, {
                borderWidth: '2px',
                scale: 1,
                borderColor: '#fff',
            });
            TweenMax.to('#ball-loader', 0.2, {
                borderWidth: '2px',
                top: 2,
                left: 2
            });
            $("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>');
        });

        $(".image-link").mouseleave(function(e) {
            TweenMax.to('#ball', 0.2, {
                borderWidth: '4px',
                scale: 0.5,
                borderColor: '#999999',
            });
            TweenMax.to('#ball-loader', 0.2, {
                borderWidth: '4px',
                top: 0,
                left: 0
            });
            $("#ball").removeClass("with-icon");
            $('#ball i').remove();
        });

    }
    //End Lightbox	

    /*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/

    function PlayVideo() {

        if ($('.video-wrapper').length > 0) {

            $(".video-wrapper").mouseenter(function(e) {
                if ($(this).hasClass("play")) {
                    $("#ball").addClass("pause-movie")
                }
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '2px',
                    scale: 1,
                    borderColor: '#fff',
                });
                $("#ball").addClass("over-movie").append('<i class="fa fa-play"></i><i class="fa fa-pause"></i>');
            });

            $(".video-wrapper").mouseleave(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '4px',
                    scale: 0.5,
                    borderColor: '#999999',
                });
                $("#ball").removeClass("over-movie").removeClass("pause-movie");
                $('#ball i').remove();
            });

            $(".video-wrapper .control").mouseenter(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '20px',
                    scale: 0
                });
            });

            $(".video-wrapper .control").mouseleave(function(e) {
                TweenMax.to('#ball', 0.2, {
                    borderWidth: '2px',
                    scale: 1,
                    borderColor: '#fff',
                });
            });

            var videocenter = ($(window).height() - $('.video-cover').height()) / 2

            ////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
            // plays or pause the video function of its current state
            var playpause = function(videoObj) {

                if (videoObj[0] != null) {
                    if (videoObj[0].paused || videoObj[0].ended) {

                        videoObj.parent().addClass('play');
                        videoObj[0].play();
                    } else {

                        videoObj.parent().removeClass('play');
                        videoObj[0].pause();
                    }
                }
            };

            //Time format converter - 00:00
            var timeFormat = function(seconds) {
                var m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60);
                var s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
                return m + ":" + s;
            };

            // Events
            // click to video cover - will start the video
            $('.video-wrapper').on('click', function() {

                $('html,body').animate({
                    scrollTop: $(this).offset().top - videocenter
                }, 390);
                // hide the video cover in order to start playing
                $(this).find('.video-cover').addClass('hidden');

                $("#ball").toggleClass("pause-movie");

                // pause first the other videos
                var current_wrapper = $(this);
                $('#main-page-content').find('.video-wrapper').each(function() {

                    if (!current_wrapper.is($(this))) {

                        $(this).removeClass('play');
                        $(this).find('video').each(function() {

                            if (!$(this).get(0).paused && !$(this).get(0).ended) {

                                $(this).get(0).pause();
                            }
                        });
                    }

                });

                // trigger the click for the inner video
                $(this).find('video').each(function() {

                    playpause($(this));
                });

            });

            //fullscreen button clicked
            $('.btnFS').on('click', function(e) {

                var parent_wrapper = $(this).closest('.video-wrapper');
                var video_object = parent_wrapper.find('video');

                if ($.isFunction(video_object[0].webkitEnterFullscreen)) {
                    video_object[0].webkitEnterFullscreen();
                } else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
                    video_object[0].mozRequestFullScreen();
                } else {
                    alert('Your browsers doesn\'t support fullscreen');
                }

                // prevent video wrapper div responding the event
                e.stopPropagation();

            });

            //sound button clicked
            $('.sound').on('click', function(e) {

                var parent_wrapper = $(this).closest('.video-wrapper');
                var video_object = parent_wrapper.find('video');

                video_object[0].muted = !video_object[0].muted;
                $(this).toggleClass('muted');
                if (video_object[0].muted) {
                    parent_wrapper.find('.volumeBar').css('width', 0);
                } else {
                    parent_wrapper.find('.volumeBar').css('width', video_object[0].volume * 100 + '%');
                }

                // prevent video wrapper div responding the event
                e.stopPropagation();
            });

            //progress bar (video timebar) clicked
            $('.progress').on('click', function(e) {

                var parent_wrapper = $(this).closest('.video-wrapper');
                var video_object = parent_wrapper.find('video');

                // calculate click position
                // and update video current time
                // as well as progress bar
                var maxduration = video_object[0].duration;
                var position = e.pageX - $(this).offset().left;
                var percentage = 100 * position / $(this).width();
                if (percentage > 100) {

                    percentage = 100;
                }
                if (percentage < 0) {

                    percentage = 0;
                }
                $('.timeBar').css('width', percentage + '%');
                video_object[0].currentTime = maxduration * percentage / 100;

                // prevent video wrapper div responding the event
                e.stopPropagation();
            });

            $('#main-page-content').find('video').each(function() {

                var video = $(this);
                var video_wrapper = $(this).parent();

                //remove default control when JS loaded
                video[0].removeAttribute("controls");
                video_wrapper.find('.control').fadeIn(500);
                video_wrapper.find('.caption').fadeIn(500);

                //before everything get started and we have the info about the video such as duration
                video.on('loadedmetadata', function() {

                    var video_object = $(this);
                    var parent_wrapper = $(this).parent();
                    //set video properties
                    parent_wrapper.find('.current').text(timeFormat(0));
                    parent_wrapper.find('.duration').text(timeFormat(video[0].duration));

                });

                //display current video buffered progress
                video.on('progress', function() {

                    var video_object = $(this);
                    var parent_wrapper = $(this).parent();
                    var maxduration = video_object[0].duration;

                    if (maxduration > 0) {
                        for (var i = 0; i < video_object[0].buffered.length; i++) {
                            if (video_object[0].buffered.start(video_object[0].buffered.length - 1 - i) < video_object[0].currentTime) {
                                var perc = (video_object[0].buffered.end(video_object[0].buffered.length - 1 - i) / maxduration) * 100 + "%";
                                parent_wrapper.find('.bufferBar').css('width', perc + '%');
                                break;
                            }
                        }
                    }

                });

                //display current video play time
                video.on('timeupdate', function() {

                    var parent_wrapper = $(this).parent();
                    var currentPos = $(this).get(0).currentTime;
                    var maxduration = $(this).get(0).duration;
                    var perc = 100 * currentPos / maxduration;
                    parent_wrapper.find('.timeBar').css('width', perc + '%');
                    parent_wrapper.find('.current').text(timeFormat(currentPos));
                });

                //video screen and play button clicked
                video.on('click', function() {

                    playpause($(this));
                });

                //video canplay event
                video.on('canplay', function() {

                    var parent_wrapper = $(this).parent();
                    parent_wrapper.find('.loading').fadeOut(100);
                    //?
                });

                //video canplaythrough event
                //solve Chrome cache issue
                var completeloaded = false;
                video.on('canplaythrough', function() {

                    completeloaded = true;
                });

                //video ended event
                video.on('ended', function() {

                    $(this).get(0).pause();
                    $(this).parent().removeClass("play");
                    $("#ball").toggleClass("pause-movie");
                });

                //video seeking event
                video.on('seeking', function() {

                    //if video fully loaded, ignore loading screen
                    if (!completeloaded) {
                        var parent_wrapper = $(this).parent();
                        parent_wrapper.find('.loading').fadeIn(200);
                        //?
                    }
                });

                //video seeked event
                video.on('seeked', function() {});

                //video waiting for more data event
                video.on('waiting', function() {

                    var parent_wrapper = $(this).parent();
                    parent_wrapper.find('.loading').fadeIn(200);
                    //?
                });

            });

        }

    }
    // End PlayVideo					

    /*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/

    function LoadViaAjax() {

        FirstLoad();
        HoverLists();
        LazyLoad();
        Portfolio();
        Blog();
        Showcase();
        ShowcaseCarousel();
        Shortcodes();
        Sliders();
        JustifiedGrid();
        Lightbox();
        PlayVideo();
        InitContactMap();

    }
    //End Load Via Ajax

    /*--------------------------------------------------
Function AjaxLoad
---------------------------------------------------*/
    function AjaxLoad() {

        var mouse = {
            x: 0,
            y: 0
        }
          , pos = {
            x: 0,
            y: 0
        }
          , ratio = .65
          , active = !1
          , ball = document.getElementById("ball")
          , ballloader = document.getElementById("ball-loader")
          , offsetX = 40;

        function mouseMove(e) {
            var a = window.pageYOffset || document.documentElement.scrollTop;
            mouse.x = e.pageX,
            mouse.y = e.pageY - a
        }

        function updatePosition() {
            active || (pos.x += (mouse.x - pos.x) * ratio,
            pos.y += (mouse.y - pos.y) * ratio,
            TweenLite.to(ball, .4, {
                x: pos.x,
                y: pos.y
            }))
        }

        function callParallax(e, a) {
            parallaxIt(e, a, a.querySelector(".parallax-element"), 20)
        }

        function parallaxIt(e, a, o, t) {
            var n = a.getBoundingClientRect()
              , l = e.pageX - n.left
              , r = e.pageY - n.top
              , i = window.pageYOffset || document.documentElement.scrollTop;
            TweenMax.to(o, .3, {
                x: (l - n.width / 2) / n.width * t,
                y: (r - n.height / 2 - i) / n.height * t,
                ease: Power2.easeOut
            })
        }

        function parallaxCursor(e, a, o) {
            var t = a.getBoundingClientRect()
              , n = e.pageX - t.left
              , l = e.pageY - t.top
              , r = window.pageYOffset || document.documentElement.scrollTop;
            pos.x = t.left + t.width / 2 + (n - t.width / 2) / o,
            pos.y = t.top + t.height / 2 + (l - t.height / 2 - r) / o,
            TweenMax.to(ball, .3, {
                x: pos.x,
                y: pos.y
            })
        }
        TweenLite.set(ball, {
            xPercent: -50,
            yPercent: -50,
            scale: .5,
            borderWidth: "4px"
        }),
        document.addEventListener("mousemove", mouseMove),
        TweenLite.ticker.addEventListener("tick", updatePosition),
        $(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(this, .3, {
                scale: 2
            }),
            TweenMax.to(ball, .3, {
                scale: .9,
                borderWidth: "2px",
                opacity: 1
            }),
            TweenMax.to($(this).children(), .3, {
                scale: .5
            }),
            active = !0
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                scale: .7,
                borderWidth: "6px",
                opacity: .6,
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                scale: 1.35,
                borderWidth: "2px",
                opacity: 1
            })
        }),
        $(".parallax-wrap").mouseleave(function(e) {
            TweenMax.to(this, .3, {
                scale: 1
            }),
            TweenMax.to(ball, .3, {
                scale: .5,
                borderWidth: "4px",
                opacity: 1,
                borderColor: "#999999"
            }),
            TweenMax.to($(this).children(), .3, {
                scale: 1,
                x: 0,
                y: 0
            }),
            active = !1
        }),
        $("#magic-cursor").hasClass("light-content") ? ($(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#fff"
            })
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        })) : ($(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#000"
            })
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        })),
        $(".parallax-wrap").mousemove(function(e) {
            parallaxCursor(e, this, 2),
            callParallax(e, this)
        }),
        $(".hide-ball").mouseenter(function(e) {
            TweenMax.to("#ball", .2, {
                borderWidth: "1px",
                scale: 1,
                opacity: 0
            })
        }),
        $(".hide-ball").mouseleave(function(e) {
            TweenMax.to("#ball", .3, {
                borderWidth: "4px",
                scale: .5,
                opacity: 1
            })
        }),
        $(".link, p a, .widget a, .cancel-reply").mouseenter(function(e) {
            TweenMax.to("#ball", .2, {
                borderWidth: "0px",
                scale: 1.5,
                backgroundColor: "rgba(153, 153, 153, 1)",
                opacity: .15
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: "2px",
                top: 4,
                left: 4
            })
        }),
        $(".link, p a, .widget a, .cancel-reply").mouseleave(function(e) {
            TweenMax.to("#ball", .3, {
                borderWidth: "4px",
                scale: .5,
                backgroundColor: "rgba(153, 153, 153, 0)",
                opacity: 1
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: "4px",
                top: 0,
                left: 0
            })
        }),
        jQuery(document).ready(function() {
            var r = !1
              , o = "";

            function t(e, a) {
                r = !0,
                $("body").addClass("page-is-changing"),
                $(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    n(e, a),
                    o = e,
                    $(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")
                }),
                i() || (n(e, a),
                o = e)
            }

            function n(t, n) {
                t = "" == t ? "index.html" : t;
                var l = $('<div class="cd-main-content "></div>');
                l.load(t + " .cd-main-content > *", function(e) {
                    $("main").html(l);
                    var a = e.match(/<title[^>]*>([^<]+)<\/title>/)[1];
                    $("head title").html(a),
                    $("html, body").scrollTop(0);
                    var o = i() ? 30 : 0;
                    setTimeout(function() {
                        $("body").removeClass("page-is-changing"),
                        $(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                            r = !1,
                            $(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")
                        }),
                        LoadViaAjax(),
                        $(".parallax-wrap").mouseenter(function(e) {
                            TweenMax.to(this, .3, {
                                scale: 2
                            }),
                            TweenMax.to(ball, .3, {
                                scale: .9,
                                borderWidth: "2px",
                                opacity: 1
                            }),
                            TweenMax.to($(this).children(), .3, {
                                scale: .5
                            }),
                            active = !0
                        }),
                        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                scale: .7,
                                borderWidth: "6px",
                                opacity: .6,
                                borderColor: "#999"
                            })
                        }),
                        $(".parallax-wrap.bigger").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                scale: 1.35,
                                borderWidth: "2px",
                                opacity: 1
                            })
                        }),
                        $(".parallax-wrap").mouseleave(function(e) {
                            TweenMax.to(this, .3, {
                                scale: 1
                            }),
                            TweenMax.to(ball, .3, {
                                scale: .5,
                                borderWidth: "4px",
                                opacity: 1,
                                borderColor: "#999999"
                            }),
                            TweenMax.to($(this).children(), .3, {
                                scale: 1,
                                x: 0,
                                y: 0
                            }),
                            active = !1
                        }),
                        $("#magic-cursor").hasClass("light-content") ? ($(".parallax-wrap").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#999"
                            })
                        }),
                        $(".parallax-wrap.bigger").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#fff"
                            })
                        }),
                        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#999"
                            })
                        })) : ($(".parallax-wrap").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#999"
                            })
                        }),
                        $(".parallax-wrap.bigger").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#000"
                            })
                        }),
                        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
                            TweenMax.to(ball, .3, {
                                borderColor: "#999"
                            })
                        })),
                        $(".parallax-wrap").mousemove(function(e) {
                            var a, o, t, n, l, r, i;
                            a = e,
                            o = 2,
                            t = this.getBoundingClientRect(),
                            n = a.pageX - t.left,
                            l = a.pageY - t.top,
                            r = window.pageYOffset || document.documentElement.scrollTop,
                            pos.x = t.left + t.width / 2 + (n - t.width / 2) / o,
                            pos.y = t.top + t.height / 2 + (l - t.height / 2 - r) / o,
                            TweenMax.to(ball, .3, {
                                x: pos.x,
                                y: pos.y
                            }),
                            function(e, a, o, t) {
                                var n = a.getBoundingClientRect()
                                  , l = e.pageX - n.left
                                  , r = e.pageY - n.top
                                  , i = window.pageYOffset || document.documentElement.scrollTop;
                                TweenMax.to(o, .3, {
                                    x: (l - n.width / 2) / n.width * t,
                                    y: (r - n.height / 2 - i) / n.height * t,
                                    ease: Power2.easeOut
                                })
                            }(e, i = this, i.querySelector(".parallax-element"), 20)
                        }),
                        $(".hide-ball").mouseenter(function(e) {
                            TweenMax.to("#ball", .2, {
                                borderWidth: "1px",
                                scale: 1,
                                opacity: 0
                            })
                        }),
                        $(".hide-ball").mouseleave(function(e) {
                            TweenMax.to("#ball", .3, {
                                borderWidth: "4px",
                                scale: .5,
                                opacity: 1
                            })
                        }),
                        $(".link, p a, .widget a, .cancel-reply").mouseenter(function(e) {
                            TweenMax.to("#ball", .2, {
                                borderWidth: "0px",
                                scale: 1.5,
                                backgroundColor: "rgba(153, 153, 153, 1)",
                                opacity: .15
                            }),
                            TweenMax.to("#ball-loader", .2, {
                                borderWidth: "2px",
                                top: 4,
                                left: 4
                            })
                        }),
                        $(".link, p a, .widget a, .cancel-reply").mouseleave(function(e) {
                            TweenMax.to("#ball", .3, {
                                borderWidth: "4px",
                                scale: .5,
                                backgroundColor: "rgba(153, 153, 153, 0)",
                                opacity: 1
                            }),
                            TweenMax.to("#ball-loader", .2, {
                                borderWidth: "4px",
                                top: 0,
                                left: 0
                            })
                        }),
                        i() || (r = !1)
                    }, o),
                    t != window.location && n && window.history.pushState({
                        path: t
                    }, "", t)
                })
            }

            function i() {
                return $("html").hasClass("csstransitions")
            }
            firstLoad = !1,
            $("main").on("click", '[data-type="page-transition"]', function(e) {
                e.preventDefault();
                var a = $(this).attr("href");
                r || t(a, !0),
                firstLoad = !0
            }),
            $(window).on("popstate", function() {
                if (firstLoad) {
                    var e = location.href;
                    r || o == e || t(e, !1)
                }
                firstLoad = !0
            })
        });

    }

    /*--------------------------------------------------
Function Page Load No Ajax
---------------------------------------------------*/
    function PageLoadNoAjax() {

        var mouse = {
            x: 0,
            y: 0
        }
          , pos = {
            x: 0,
            y: 0
        }
          , ratio = .65
          , active = !1
          , ball = document.getElementById("ball")
          , ballloader = document.getElementById("ball-loader")
          , offsetX = 40;

        function mouseMove(e) {
            var a = window.pageYOffset || document.documentElement.scrollTop;
            mouse.x = e.pageX,
            mouse.y = e.pageY - a
        }

        function updatePosition() {
            active || (pos.x += (mouse.x - pos.x) * ratio,
            pos.y += (mouse.y - pos.y) * ratio,
            TweenLite.to(ball, .4, {
                x: pos.x,
                y: pos.y
            }))
        }

        function callParallax(e, a) {
            parallaxIt(e, a, a.querySelector(".parallax-element"), 20)
        }

        function parallaxIt(e, a, o, t) {
            var l = a.getBoundingClientRect()
              , r = e.pageX - l.left
              , n = e.pageY - l.top
              , i = window.pageYOffset || document.documentElement.scrollTop;
            TweenMax.to(o, .3, {
                x: (r - l.width / 2) / l.width * t,
                y: (n - l.height / 2 - i) / l.height * t,
                ease: Power2.easeOut
            })
        }

        function parallaxCursor(e, a, o) {
            var t = a.getBoundingClientRect()
              , l = e.pageX - t.left
              , r = e.pageY - t.top
              , n = window.pageYOffset || document.documentElement.scrollTop;
            pos.x = t.left + t.width / 2 + (l - t.width / 2) / o,
            pos.y = t.top + t.height / 2 + (r - t.height / 2 - n) / o,
            TweenMax.to(ball, .3, {
                x: pos.x,
                y: pos.y
            })
        }
        TweenLite.set(ball, {
            xPercent: -50,
            yPercent: -50,
            scale: .5,
            borderWidth: "4px"
        }),
        document.addEventListener("mousemove", mouseMove),
        TweenLite.ticker.addEventListener("tick", updatePosition),
        $(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(this, .3, {
                scale: 2
            }),
            TweenMax.to(ball, .3, {
                scale: .9,
                borderWidth: "2px",
                opacity: 1
            }),
            TweenMax.to($(this).children(), .3, {
                scale: .5
            }),
            active = !0
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                scale: .7,
                borderWidth: "6px",
                opacity: .6,
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                scale: 1.35,
                borderWidth: "2px",
                opacity: 1
            })
        }),
        $(".parallax-wrap").mouseleave(function(e) {
            TweenMax.to(this, .3, {
                scale: 1
            }),
            TweenMax.to(ball, .3, {
                scale: .5,
                borderWidth: "4px",
                opacity: 1,
                borderColor: "#999999"
            }),
            TweenMax.to($(this).children(), .3, {
                scale: 1,
                x: 0,
                y: 0
            }),
            active = !1
        }),
        $("#magic-cursor").hasClass("light-content") ? ($(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#fff"
            })
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        })) : ($(".parallax-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        }),
        $(".parallax-wrap.bigger").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#000"
            })
        }),
        $("#main .parallax-wrap.icon-wrap").mouseenter(function(e) {
            TweenMax.to(ball, .3, {
                borderColor: "#999"
            })
        })),
        $(".parallax-wrap").mousemove(function(e) {
            parallaxCursor(e, this, 2),
            callParallax(e, this)
        }),
        $(".hide-ball").mouseenter(function(e) {
            TweenMax.to("#ball", .2, {
                borderWidth: "1px",
                scale: 1,
                opacity: 0
            })
        }),
        $(".hide-ball").mouseleave(function(e) {
            TweenMax.to("#ball", .3, {
                borderWidth: "4px",
                scale: .5,
                opacity: 1
            })
        }),
        $(".link, p a, .widget a, .cancel-reply").mouseenter(function(e) {
            TweenMax.to("#ball", .2, {
                borderWidth: "0px",
                scale: 1.5,
                backgroundColor: "rgba(153, 153, 153, 1)",
                opacity: .15
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: "2px",
                top: 4,
                left: 4
            })
        }),
        $(".link, p a, .widget a, .cancel-reply").mouseleave(function(e) {
            TweenMax.to("#ball", .3, {
                borderWidth: "4px",
                scale: .5,
                backgroundColor: "rgba(153, 153, 153, 0)",
                opacity: 1
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: "4px",
                top: 0,
                left: 0
            })
        }),
        setTimeout(function() {
            $("#hero-bg-wrapper").find("video").each(function() {
                $(this).get(0).play()
            })
        }, 200);

    }
    // End Page Load No Ajax

});

/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/

function ContactMap() {

    if (jQuery('#map_canvas').length > 0) {

        var map_marker_image = 'images/marker.png';
        var map_address = 'New York City'
        var map_zoom = 16;
        var marker_title = 'Hello Friend!';
        var marker_text = 'Here we are. Come to drink a coffee!';
        var map_type = google.maps.MapTypeId.SATELLITE;

        if (typeof ClapatMapOptions != 'undefined') {

            map_marker_image = ClapatMapOptions.map_marker_image;
            map_address = ClapatMapOptions.map_address;
            map_zoom = Number(ClapatMapOptions.map_zoom);
            marker_title = ClapatMapOptions.marker_title;
            marker_text = ClapatMapOptions.marker_text;
            if (ClapatMapOptions.map_type == 0) {

                map_type = google.maps.MapTypeId.SATELLITE;
            } else {

                map_type = google.maps.MapTypeId.ROADMAP;
            }

        }

        var newstyle = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }];

        var settings = {
            zoom: map_zoom,
            center: new google.maps.LatLng(43.270441,6.640888),
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            panControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            navigationControl: false,
            mapTypeId: map_type,
            styles: newstyle
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),settings);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">' + '<div id="siteNotice">' + '</div>' + '<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;"><strong style="color:#000!important;">' + marker_title + '</strong></h4>' + '<div id="bodyContent">' + '<p color:#999; font-size:14px; margin-bottom:10px">' + marker_text + '</p>' + '</div>' + '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var companyImage = new google.maps.MarkerImage(map_marker_image,new google.maps.Size(58,63),new google.maps.Point(0,0),new google.maps.Point(35,20));

        var latitude = 43.270441;
        var longitude = 6.640888;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': map_address
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                map.setCenter(results[0].geometry.location);

                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();

                var companyPos = new google.maps.LatLng(latitude,longitude);
                var companyMarker = new google.maps.Marker({
                    position: companyPos,
                    map: map,
                    icon: companyImage,
                    title: "Our Office",
                    zIndex: 3
                });
                google.maps.event.addListener(companyMarker, 'click', function() {
                    infowindow.open(map, companyMarker);
                });
            }
        });

    }

    return false

}
// End ContactMap

function InitContactMap() {

    if (jQuery('#map_canvas').length > 0) {

        if (typeof google != 'undefined' && typeof google.maps != 'undefined') {

            // google maps already loaded, call the function which draws the map
            ContactMap();

        } else {

            var map_api_key = '';
            if (typeof ClapatMapOptions != 'undefined') {
                map_api_key = 'key=' + ClapatMapOptions.map_api_key;
            }
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key + '&callback=ContactMap';
            document.body.appendChild(script);
        }

    }
}
// End InitContactMap
