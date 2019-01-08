function(e, t, i) {
    function o() {
        var e = $(window).outerHeight(),
        t = e;
        $(".part1").each(function() {
            $(this).css("height", t)
        }),
        $(".inner").css({
            "margin-top": t
        })
    }
    function n(e) {
        var t = e.getBoundingClientRect(),
        i = document.documentElement.clientTop,
        o = document.documentElement.clientLeft;
        return {
            top: t.top - i,
            bottom: t.bottom - i,
            left: t.left - o,
            right: t.right - o
        }
    }
    function s(e) {
        return e ? e.substr(e.lastIndexOf(".") + 1).toLowerCase() : null
    }

    $("#sec2-slider p").each(function() {
        var e = $(this).html();
        $(this).html(e.replace(/®/gi, "<sup>®</sup>"))
    }),
    t.init = function() {
        function e(e) {
            u.each(function() {
                $(this).attr("src", $(this).data("file") + f[e] + "." + $(this).data("type"))
            })
        }
        function t() {
            h != $(window).width() && (h = $(window).width(), e(h <= m[0] ? 0 : h < m[1] ? 1 : 2))
        }
        function i() {
            b = a.sliderInit($(window).width() < 801 ? {
                selector: "#sec2-slider",
                sliderWidth: function() {
                    return $(".part2-box").width()
                },
                noMarginLeft: 1,
                option: {
                    minSlides: 1,
                    maxSlides: 1,
                    controls: !1,
                    responsive: !1,
                    infiniteLoop: !1
                }
            }: {
                selector: "#sec2-slider",
                sliderWidth: function() {
                    var e = $(".part2-box").width() / 4;
                    return e = e > 360 ? 360 : e
                },
                noMarginLeft: 1,
                option: {
                    minSlides: 3,
                    maxSlides: 3,
                    controls: !1,
                    responsive: !1,
                    infiniteLoop: !1
                }
            })
        }
        if ($(".pc #op-content .part1").append($('<div class="op-home-arrow"></div>')), setTimeout(function() {
            $(".part1").css("opacity", 1)
        },
        500), o(), $("#phoneX-focus-bigimg").length) {
            var c = $("#phoneX-focus-bigimg img"),
            p = c.attr("data-src"),
            d = "." + s(p);
            $("#phoneX-focus-bigimg img").attr("data-src", p.replace(d, Math.ceil(6 * Math.random()) + d))
        }
        if (RimgOptions = $.extend({},
        RimgOptions, {
            complete: function() {
                l.fullFill({
                    targets: $("#sec1-slider li img"),
                    noresize: !0
                })
            }
        }), $("#sec1-slider li img").one("load",
        function() {
            $(this).attr("src") && l.fullFill({
                targets: $(this)
            })
        }), $("html").hasClass("ie8")) {
            var u = $("img[data-src]");
            u.each(function() {
                var e = $(this).attr("data-src");
                $(this).data("type", s(e)),
                $(this).data("file", e.substr(0, e.lastIndexOf(".")))
            });
            var m = [800, 1600],
            f = ["-small", "-regular", "-large"],
            h = 0;
            t(),
            $(window).resize(t)
        } else window.Rimg = r.createRimg(),
        window.Rimg.initialize();
        var g = null,
        w = {
            nextText: " ",
            prevText: " ",
            auto: !1,
            speed: 1e3,
            pause: 4e3,
            pager: !0,
            infiniteLoop: !1,
            onSlideBefore: function() {
                l.fullFill({
                    targets: $("#sec1-slider li img"),
                    noresize: !0
                })
            }
        };
        $("#sec1-slider li img").length > 1 && ($(".csstransitions #sec1-slider").length && (w.easing = "ease-out"), g = $("#sec1-slider").bxSlider(w), $(window).resize(function() {
            w.startSlide = g.getCurrentSlide(),
            g.reloadSlider()
        })),
        a.topHeaderAnim.setScrollAnim(100, ["toDefault"], ["toTopAndFullfill"]);
        var v = document.getElementById("op-content-inner2");
        n(v).top < 0 && a.topHeaderAnim.toDisappear(),
        op.isMobile ? ($(document).on("swipeUp",
        function() {
            n(v).top < 0 && a.topHeaderAnim.toDisappear()
        }), $(document).on("swipeDown",
        function() {
            n(v).top < 0 && a.topHeaderAnim.toAppear()
        })) : a.addMouseWheelEvent(function(e) {
            $(".op-home-arrow").length && $(".op-home-arrow").remove(),
            n(v).top < 0 && (a.getMWS(e) > 0 ? a.topHeaderAnim.toAppear() : a.topHeaderAnim.toDisappear())
        }),
        op.isMobile || $(function() {
            function e() {
                var e = a.topHeaderAnim.getScrollTop();
                n.finish().animate({
                    top: -.4 * e
                },
                5)
            }
            function t() {
                var e = a.topHeaderAnim.getScrollTop();
                n.css({
                    top: -.4 * e
                }),
                window.requestAnimationFrame(t)
            }
            o();
            var i = a.topHeaderAnim.getScrollTop(),
            n = $(".part1");
            n.css({
                top: -.4 * i
            }),
            $("html").hasClass("ie8") ? (e(), $(window).scroll(function() {
                e()
            }), $(window).resize(function() {
                e()
            })) : window.requestAnimationFrame(function() {
                t()
            })
        });
        var b = null;
        i(),
        $(window).resize(function() {
            o(),
            l.fullFill({
                targets: $("#sec1-slider li img"),
                noresize: !0
            }),
            setTimeout(function() {
                l.fullFill({
                    targets: $("#sec1-slider li img"),
                    noresize: !0
                })
            },
            500),
            b.destroySlider(),
            i()
        });
        var A = ["#e02831", "#ffc027", "#37a44f"];
        $(".op-share-section .op-shar-bar a").each(function(e) {
            var t = $(".op-share-section .expand-span"),
            i = null,
            o = $(this);
            o.hover(function() {
                i = setTimeout(function() {
                    var i = o.position().left,
                    n = o.position().top;
                    t.css({
                        left: i,
                        top: n,
                        background: A[e]
                    }).addClass("expand"),
                    o.addClass("hover")
                },
                200)
            },
            function() {
                clearTimeout(i),
                t.removeClass("expand"),
                o.removeClass("hover")
            })
        }),
        $("#op-sec3-ul li img").each(function() {
            var e = $(this).parent(),
            t = $(this).attr("src"),
            i = $("<span></span>");
            i.css("background", "url(" + t + ") center center no-repeat"),
            e.append(i),
            $(this).remove()
        })
    }
};