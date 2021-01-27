/* FitThumbScreen  */
function FitThumbScreen() {
    jQuery("body").find(".thumb-container").each(function() {
        jQuery("#clone-image").append(jQuery(this))
    });
    for (var e = document.documentElement, t = document.body, o = document.querySelectorAll(".thumb-page"), i = document.querySelectorAll(".item-image"), n = document.querySelectorAll(".item-content"), a = 0; a < i.length; a++)
        l(i[a], o[a], n[a]);
    function l(e, t, o) {
        o.addEventListener("click", function() {
            TweenMax.to("#ball", .3, {
                borderWidth: '4px',
                scale: 0.5,
                borderColor: '#999999'
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: '4px',
                top: 0,
                left: 0
            }),
            jQuery("#ball").removeClass("with-icon").removeClass("hold"),
            jQuery("#ball i").remove(),
            jQuery("body").addClass("show-loader"),
            setTimeout(function() {
                jQuery("body").addClass("load-project-thumb")
            }, 760),
            jQuery(this).parents(".item").addClass("above"),
            TweenMax.set(".item.above .item-content", {
                opacity: 1
            }),
            setTimeout(function() {
                TweenMax.to("#hero, .item-content, .item .item-caption, #page-nav, footer", .4, {
                    opacity: 0,
                    delay: .1,
                    ease: Power2.easeOut
                })
            }, 0),
            setTimeout(function() {
                c(e, t)
            }, 750),
            setTimeout(function() {
                jQuery(".above").find("a").trigger("click")
            }, 1200)
        }),
        t.addEventListener("click", function() {
            jQuery(".item").removeClass("above"),
            jQuery(".item-image").removeClass("above"),
            TweenMax.to("#hero, .item-content, .item .item-caption, #page-nav, footer", .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeOut
            }),
            c(t, e)
        })
    }
    function c(e, o) {
        var i = e.cloneNode(!0)
          , n = d(e)
          , a = d(o);
        TweenLite.set([e, o], {
            visibility: "hidden"
        }),
        TweenLite.set(i, {
            position: "absolute",
            margin: 0
        }),
        t.appendChild(i);
        var l = {
            x: a.left - n.left,
            y: a.top - n.top,
            width: a.width,
            height: a.height,
            autoRound: !1,
            ease: Expo.easeInOut,
            onComplete: function() {
                TweenLite.set(o, {
                    visibility: "visible"
                }),
                t.removeChild(i)
            }
        };
        TweenLite.set(i, n),
        TweenLite.to(i, 1.2, l)
    }
    function d(o) {
        var i = o.getBoundingClientRect()
          , n = window.pageYOffset || e.scrollTop || t.scrollTop || 0
          , a = window.pageXOffset || e.scrollLeft || t.scrollLeft || 0
          , l = e.clientTop || t.clientTop || 0
          , c = e.clientLeft || t.clientLeft || 0;
        return {
            top: Math.round(i.top + n - l),
            left: Math.round(i.left + a - c),
            height: i.height,
            width: i.width
        }
    }
}
/* FitSlideScreen  */
function FitSlideScreen() {
    jQuery("body").find(".thumb-container").each(function() {
        jQuery("#clone-image").append(jQuery(this))
    });
    for (var a = document.documentElement, s = document.body, e = document.querySelectorAll(".thumb-page"), t = document.querySelectorAll(".section-image"), i = 0; i < t.length; i++)
        o(t[i], e[i]);
    function o(e, t) {
        e.addEventListener("click", function() {
            TweenMax.to("#ball", .2, {
                borderWidth: '4px',
                scale: 0.5,
                borderColor: '#999999'
            }),
            TweenMax.to("#ball-loader", .2, {
                borderWidth: '4px',
                top: 0,
                left: 0
            }),
            jQuery("#ball").removeClass("with-icon").removeClass("hold"),
            jQuery("#ball i").remove(),
            jQuery("body").addClass("show-loader"),
            setTimeout(function() {
                jQuery("body").addClass("load-project-thumb")
            }, 160),
            jQuery(this).parents(".swiper-slide").addClass("above"),
            TweenMax.set(".swiper-slide.above .section-image", {
                opacity: 1
            }),
            TweenMax.to(".swiper-slide .section-image, .swiper-slide .carousel-caption, footer", .4, {
                opacity: 0,
                delay: .2,
                ease: Power2.easeOut
            }),
            setTimeout(function() {
                n(e, t)
            }, 150),
            setTimeout(function() {
                jQuery(".above").find("a").trigger("click")
            }, 600)
        }),
        t.addEventListener("click", function() {
            jQuery(".swiper-slide").removeClass("above"),
            TweenMax.to(".swiper-slide .section-image, .swiper-slide .carousel-caption, footer", .3, {
                opacity: 1,
                delay: .6,
                ease: Power2.easeOut
            }),
            n(t, e)
        })
    }
    function n(e, t) {
        var i = e.cloneNode(!0)
          , o = d(e)
          , n = d(t);
        TweenLite.set([e, t], {
            visibility: "hidden"
        }),
        TweenLite.set(i, {
            position: "absolute",
            margin: 0
        }),
        s.appendChild(i);
        var l = {
            x: n.left - o.left,
            y: n.top - o.top,
            width: n.width,
            height: n.height,
            autoRound: !1,
            ease: Expo.easeInOut,
            onComplete: function() {
                TweenLite.set(t, {
                    visibility: "visible"
                }),
                s.removeChild(i)
            }
        };
        TweenLite.set(i, o),
        TweenLite.to(i, 1.2, l)
    }
    function d(e) {
        var t = e.getBoundingClientRect()
          , i = window.pageYOffset || a.scrollTop || s.scrollTop || 0
          , o = window.pageXOffset || a.scrollLeft || s.scrollLeft || 0
          , n = a.clientTop || s.clientTop || 0
          , l = a.clientLeft || s.clientLeft || 0;
        return {
            top: Math.round(t.top + i - n),
            left: Math.round(t.left + o - l),
            height: t.height,
            width: t.width
        }
    }
}
