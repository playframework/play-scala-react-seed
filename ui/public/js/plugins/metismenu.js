/*!
 * metismenu https://github.com/onokumus/metismenu#readme
 * A jQuery menu plugin
 * @version 3.0.6
 * @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * @license: MIT
 */
!(function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = n(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], n) : ((e = e || self).metisMenu = n(e.jQuery));
})(this, function (o) {
    "use strict";
    function a() {
        return (a =
            Object.assign ||
            function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
            }).apply(this, arguments);
    }
    o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    var i,
        n,
        r,
        s =
            ((n = "transitionend"),
            (r = {
                TRANSITION_END: "mmTransitionEnd",
                triggerTransitionEnd: function (e) {
                    i(e).trigger(n);
                },
                supportsTransitionEnd: function () {
                    return Boolean(n);
                },
            }),
            ((i = o).fn.mmEmulateTransitionEnd = e),
            (i.event.special[r.TRANSITION_END] = {
                bindType: n,
                delegateType: n,
                handle: function (e) {
                    if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                },
            }),
            r);
    function e(e) {
        var n = this,
            t = !1;
        return (
            i(this).one(r.TRANSITION_END, function () {
                t = !0;
            }),
            setTimeout(function () {
                t || r.triggerTransitionEnd(n);
            }, e),
            this
        );
    }
    var t = "metisMenu",
        g = "metisMenu",
        l = "." + g,
        h = o.fn[t],
        f = { toggle: !0, preventDefault: !0, triggerElement: "a", parentTrigger: "li", subMenu: "ul" },
        d = { SHOW: "show" + l, SHOWN: "shown" + l, HIDE: "hide" + l, HIDDEN: "hidden" + l, CLICK_DATA_API: "click" + l + ".data-api" },
        u = "metismenu",
        c = "mm-active",
        p = "mm-show",
        m = "mm-collapse",
        T = "mm-collapsing",
        v = (function () {
            function r(e, n) {
                (this.element = e), (this.config = a({}, f, {}, n)), (this.transitioning = null), this.init();
            }
            var e = r.prototype;
            return (
                (e.init = function () {
                    var a = this,
                        s = this.config,
                        e = o(this.element);
                    e.addClass(u),
                        e
                            .find(s.parentTrigger + "." + c)
                            .children(s.triggerElement)
                            .attr("aria-expanded", "true"),
                        e
                            .find(s.parentTrigger + "." + c)
                            .parents(s.parentTrigger)
                            .addClass(c),
                        e
                            .find(s.parentTrigger + "." + c)
                            .parents(s.parentTrigger)
                            .children(s.triggerElement)
                            .attr("aria-expanded", "true"),
                        e
                            .find(s.parentTrigger + "." + c)
                            .has(s.subMenu)
                            .children(s.subMenu)
                            .addClass(m + " " + p),
                        e
                            .find(s.parentTrigger)
                            .not("." + c)
                            .has(s.subMenu)
                            .children(s.subMenu)
                            .addClass(m),
                        e
                            .find(s.parentTrigger)
                            .children(s.triggerElement)
                            .on(d.CLICK_DATA_API, function (e) {
                                var n = o(this);
                                if ("true" !== n.attr("aria-disabled")) {
                                    s.preventDefault && "#" === n.attr("href") && e.preventDefault();
                                    var t = n.parent(s.parentTrigger),
                                        i = t.siblings(s.parentTrigger),
                                        r = i.children(s.triggerElement);
                                    t.hasClass(c) ? (n.attr("aria-expanded", "false"), a.removeActive(t)) : (n.attr("aria-expanded", "true"), a.setActive(t), s.toggle && (a.removeActive(i), r.attr("aria-expanded", "false"))),
                                        s.onTransitionStart && s.onTransitionStart(e);
                                }
                            });
                }),
                (e.setActive = function (e) {
                    o(e).addClass(c);
                    var n = o(e).children(this.config.subMenu);
                    0 < n.length && !n.hasClass(p) && this.show(n);
                }),
                (e.removeActive = function (e) {
                    o(e).removeClass(c);
                    var n = o(e).children(this.config.subMenu + "." + p);
                    0 < n.length && this.hide(n);
                }),
                (e.show = function (e) {
                    var n = this;
                    if (!this.transitioning && !o(e).hasClass(T)) {
                        var t = o(e),
                            i = o.Event(d.SHOW);
                        if ((t.trigger(i), !i.isDefaultPrevented())) {
                            if ((t.parent(this.config.parentTrigger).addClass(c), this.config.toggle)) {
                                var r = t
                                    .parent(this.config.parentTrigger)
                                    .siblings()
                                    .children(this.config.subMenu + "." + p);
                                this.hide(r);
                            }
                            t.removeClass(m).addClass(T).height(0), this.setTransitioning(!0);
                            t.height(e[0].scrollHeight)
                                .one(s.TRANSITION_END, function () {
                                    n.config &&
                                        n.element &&
                                        (t
                                            .removeClass(T)
                                            .addClass(m + " " + p)
                                            .height(""),
                                        n.setTransitioning(!1),
                                        t.trigger(d.SHOWN));
                                })
                                .mmEmulateTransitionEnd(350);
                        }
                    }
                }),
                (e.hide = function (e) {
                    var n = this;
                    if (!this.transitioning && o(e).hasClass(p)) {
                        var t = o(e),
                            i = o.Event(d.HIDE);
                        if ((t.trigger(i), !i.isDefaultPrevented())) {
                            t.parent(this.config.parentTrigger).removeClass(c), t.height(t.height())[0].offsetHeight, t.addClass(T).removeClass(m).removeClass(p), this.setTransitioning(!0);
                            var r = function () {
                                n.config && n.element && (n.transitioning && n.config.onTransitionEnd && n.config.onTransitionEnd(), n.setTransitioning(!1), t.trigger(d.HIDDEN), t.removeClass(T).addClass(m));
                            };
                            0 === t.height() || "none" === t.css("display") ? r() : t.height(0).one(s.TRANSITION_END, r).mmEmulateTransitionEnd(350);
                        }
                    }
                }),
                (e.setTransitioning = function (e) {
                    this.transitioning = e;
                }),
                (e.dispose = function () {
                    o.removeData(this.element, g), o(this.element).find(this.config.parentTrigger).children(this.config.triggerElement).off(d.CLICK_DATA_API), (this.transitioning = null), (this.config = null), (this.element = null);
                }),
                (r.jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = o(this),
                            n = e.data(g),
                            t = a({}, f, {}, e.data(), {}, "object" == typeof i && i ? i : {});
                        if ((n || ((n = new r(this, t)), e.data(g, n)), "string" == typeof i)) {
                            if (void 0 === n[i]) throw new Error('No method named "' + i + '"');
                            n[i]();
                        }
                    });
                }),
                r
            );
        })();
    return (
        (o.fn[t] = v.jQueryInterface),
        (o.fn[t].Constructor = v),
        (o.fn[t].noConflict = function () {
            return (o.fn[t] = h), v.jQueryInterface;
        }),
        v
    );
});
//# sourceMappingURL=metisMenu.min.js.map
