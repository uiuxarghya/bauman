!function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList"in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }
    ,
    e = function(a, b) {
        a.classList.add(b)
    }
    ,
    f = function(a, b) {
        a.classList.remove(b)
    }
    ) : (d = function(a, c) {
        return b(c).test(a.className)
    }
    ,
    e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }
    ,
    f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    }
    );
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function(a) {
    function b() {
        function a(b) {
            for (var c in a.defaults)
                this[c] = a.defaults[c];
            for (c in b)
                this[c] = b[c]
        }
        return c.Rect = a,
        a.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        a.prototype.contains = function(a) {
            var b = a.width || 0
              , c = a.height || 0;
            return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
        }
        ,
        a.prototype.overlaps = function(a) {
            var b = this.x + this.width
              , c = this.y + this.height
              , d = a.x + a.width
              , e = a.y + a.height;
            return this.x < d && b > a.x && this.y < e && c > a.y
        }
        ,
        a.prototype.getMaximalFreeRects = function(b) {
            if (!this.overlaps(b))
                return !1;
            var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
            return this.y < b.y && (c = new a({
                x: this.x,
                y: this.y,
                width: this.width,
                height: b.y - this.y
            }),
            d.push(c)),
            e > g && (c = new a({
                x: g,
                y: this.y,
                width: e - g,
                height: this.height
            }),
            d.push(c)),
            f > h && (c = new a({
                x: this.x,
                y: h,
                width: this.width,
                height: f - h
            }),
            d.push(c)),
            this.x < b.x && (c = new a({
                x: this.x,
                y: this.y,
                width: b.x - this.x,
                height: this.height
            }),
            d.push(c)),
            d
        }
        ,
        a.prototype.canFit = function(a) {
            return this.width >= a.width && this.height >= a.height
        }
        ,
        a
    }
    var c = a.Packery = function() {}
    ;
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {},
    a.Packery.Rect = b())
}(window),
function(a) {
    function b(a) {
        function b(a, b, c) {
            this.width = a || 0,
            this.height = b || 0,
            this.sortDirection = c || "downwardLeftToRight",
            this.reset()
        }
        b.prototype.reset = function() {
            this.spaces = [],
            this.newSpaces = [];
            var b = new a({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(b),
            this.sorter = c[this.sortDirection] || c.downwardLeftToRight
        }
        ,
        b.prototype.pack = function(a) {
            for (var b = 0, c = this.spaces.length; c > b; b++) {
                var d = this.spaces[b];
                if (d.canFit(a)) {
                    this.placeInSpace(a, d);
                    break
                }
            }
        }
        ,
        b.prototype.placeInSpace = function(a, b) {
            a.x = b.x,
            a.y = b.y,
            this.placed(a)
        }
        ,
        b.prototype.placed = function(a) {
            for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
                var e = this.spaces[c]
                  , f = e.getMaximalFreeRects(a);
                f ? b.push.apply(b, f) : b.push(e)
            }
            this.spaces = b,
            this.mergeSortSpaces()
        }
        ,
        b.prototype.mergeSortSpaces = function() {
            b.mergeRects(this.spaces),
            this.spaces.sort(this.sorter)
        }
        ,
        b.prototype.addSpace = function(a) {
            this.spaces.push(a),
            this.mergeSortSpaces()
        }
        ,
        b.mergeRects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                if (d) {
                    var e = a.slice(0);
                    e.splice(b, 1);
                    for (var f = 0, g = 0, h = e.length; h > g; g++) {
                        var i = e[g]
                          , j = b > g ? 0 : 1;
                        d.contains(i) && (a.splice(g + j - f, 1),
                        f++)
                    }
                }
            }
            return a
        }
        ;
        var c = {
            downwardLeftToRight: function(a, b) {
                return a.y - b.y || a.x - b.x
            },
            rightwardTopToBottom: function(a, b) {
                return a.x - b.x || a.y - b.y
            }
        };
        return b
    }
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports)
        module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window),
function(a) {
    function b(a, b, c) {
        var d = a("transform")
          , e = function() {
            b.Item.apply(this, arguments)
        };
        e.prototype = new b.Item;
        var f = e.prototype._create;
        return e.prototype._create = function() {
            f.call(this),
            this.rect = new c,
            this.placeRect = new c
        }
        ,
        e.prototype.dragStart = function() {
            this.getPosition(),
            this.removeTransitionStyles(),
            this.isTransitioning && d && (this.element.style[d] = "none"),
            this.getSize(),
            this.isPlacing = !0,
            this.needsPositioning = !1,
            this.positionPlaceRect(this.position.x, this.position.y),
            this.isTransitioning = !1,
            this.didDrag = !1
        }
        ,
        e.prototype.dragMove = function(a, b) {
            this.didDrag = !0;
            var c = this.layout.size;
            a -= c.paddingLeft,
            b -= c.paddingTop,
            this.positionPlaceRect(a, b)
        }
        ,
        e.prototype.dragStop = function() {
            this.getPosition();
            var a = this.position.x !== this.placeRect.x
              , b = this.position.y !== this.placeRect.y;
            this.needsPositioning = a || b,
            this.didDrag = !1
        }
        ,
        e.prototype.positionPlaceRect = function(a, b, c) {
            this.placeRect.x = this.getPlaceRectCoord(a, !0),
            this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
        }
        ,
        e.prototype.getPlaceRectCoord = function(a, b, c) {
            var d = b ? "Width" : "Height"
              , e = this.size["outer" + d]
              , f = this.layout[b ? "columnWidth" : "rowHeight"]
              , g = this.layout.size["inner" + d];
            b || (g = Math.max(g, this.layout.maxY),
            this.layout.rowHeight || (g -= this.layout.gutter));
            var h;
            if (f) {
                f += this.layout.gutter,
                g += b ? this.layout.gutter : 0,
                a = Math.round(a / f);
                var i;
                i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
                var j = Math[i](g / f);
                j -= Math.ceil(e / f),
                h = j
            } else
                h = g - e;
            return a = c ? a : Math.min(a, h),
            a *= f || 1,
            Math.max(0, a)
        }
        ,
        e.prototype.copyPlaceRectPosition = function() {
            this.rect.x = this.placeRect.x,
            this.rect.y = this.placeRect.y
        }
        ,
        e.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.layout.packer.addSpace(this.rect),
            this.emitEvent("remove", [this])
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window),
function(a) {
    function b(a, b, c, d, e, f) {
        function g(a, b) {
            return a.position.y - b.position.y || a.position.x - b.position.x
        }
        function h(a, b) {
            return a.position.x - b.position.x || a.position.y - b.position.y
        }
        d.prototype.canFit = function(a) {
            return this.width >= a.width - 1 && this.height >= a.height - 1
        }
        ;
        var i = c.create("packery");
        return i.Item = f,
        i.prototype._create = function() {
            c.prototype._create.call(this),
            this.packer = new e,
            this.stamp(this.options.stamped);
            var a = this;
            this.handleDraggabilly = {
                dragStart: function(b) {
                    a.itemDragStart(b.element)
                },
                dragMove: function(b) {
                    a.itemDragMove(b.element, b.position.x, b.position.y)
                },
                dragEnd: function(b) {
                    a.itemDragEnd(b.element)
                }
            },
            this.handleUIDraggable = {
                start: function(b) {
                    a.itemDragStart(b.currentTarget)
                },
                drag: function(b, c) {
                    a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
                },
                stop: function(b) {
                    a.itemDragEnd(b.currentTarget)
                }
            }
        }
        ,
        i.prototype._resetLayout = function() {
            this.getSize(),
            this._getMeasurements();
            var a = this.packer;
            this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY,
            a.height = this.size.innerHeight + this.gutter,
            a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter,
            a.height = Number.POSITIVE_INFINITY,
            a.sortDirection = "downwardLeftToRight"),
            a.reset(),
            this.maxY = 0,
            this.maxX = 0
        }
        ,
        i.prototype._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"),
            this._getMeasurement("rowHeight", "height"),
            this._getMeasurement("gutter", "width")
        }
        ,
        i.prototype._getItemLayoutPosition = function(a) {
            return this._packItem(a),
            a.rect
        }
        ,
        i.prototype._packItem = function(a) {
            this._setRectSize(a.element, a.rect),
            this.packer.pack(a.rect),
            this._setMaxXY(a.rect)
        }
        ,
        i.prototype._setMaxXY = function(a) {
            this.maxX = Math.max(a.x + a.width, this.maxX),
            this.maxY = Math.max(a.y + a.height, this.maxY)
        }
        ,
        i.prototype._setRectSize = function(a, c) {
            var d = b(a)
              , e = d.outerWidth
              , f = d.outerHeight;
            (e || f) && (e = this._applyGridGutter(e, this.columnWidth),
            f = this._applyGridGutter(f, this.rowHeight)),
            c.width = Math.min(e, this.packer.width),
            c.height = Math.min(f, this.packer.height)
        }
        ,
        i.prototype._applyGridGutter = function(a, b) {
            if (!b)
                return a + this.gutter;
            b += this.gutter;
            var c = a % b
              , d = c && 1 > c ? "round" : "ceil";
            return a = Math[d](a / b) * b
        }
        ,
        i.prototype._getContainerSize = function() {
            return this.options.isHorizontal ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }
        ,
        i.prototype._manageStamp = function(a) {
            var b, c = this.getItem(a);
            if (c && c.isPlacing)
                b = c.placeRect;
            else {
                var e = this._getElementOffset(a);
                b = new d({
                    x: this.options.isOriginLeft ? e.left : e.right,
                    y: this.options.isOriginTop ? e.top : e.bottom
                })
            }
            this._setRectSize(a, b),
            this.packer.placed(b),
            this._setMaxXY(b)
        }
        ,
        i.prototype.sortItemsByPosition = function() {
            var a = this.options.isHorizontal ? h : g;
            this.items.sort(a)
        }
        ,
        i.prototype.fit = function(a, b, c) {
            var d = this.getItem(a);
            d && (this._getMeasurements(),
            this.stamp(d.element),
            d.getSize(),
            d.isPlacing = !0,
            b = void 0 === b ? d.rect.x : b,
            c = void 0 === c ? d.rect.y : c,
            d.positionPlaceRect(b, c, !0),
            this._bindFitEvents(d),
            d.moveTo(d.placeRect.x, d.placeRect.y),
            this.layout(),
            this.unstamp(d.element),
            this.sortItemsByPosition(),
            d.isPlacing = !1,
            d.copyPlaceRectPosition())
        }
        ,
        i.prototype._bindFitEvents = function(a) {
            function b() {
                d++,
                2 === d && c.emitEvent("fitComplete", [c, a])
            }
            var c = this
              , d = 0;
            a.on("layout", function() {
                return b(),
                !0
            }),
            this.on("layoutComplete", function() {
                return b(),
                !0
            })
        }
        ,
        i.prototype.resize = function() {
            var a = b(this.element)
              , c = this.size && a
              , d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            c && a[d] === this.size[d] || this.layout()
        }
        ,
        i.prototype.itemDragStart = function(a) {
            this.stamp(a);
            var b = this.getItem(a);
            b && b.dragStart()
        }
        ,
        i.prototype.itemDragMove = function(a, b, c) {
            function d() {
                f.layout(),
                delete f.dragTimeout
            }
            var e = this.getItem(a);
            e && e.dragMove(b, c);
            var f = this;
            this.clearDragTimeout(),
            this.dragTimeout = setTimeout(d, 40)
        }
        ,
        i.prototype.clearDragTimeout = function() {
            this.dragTimeout && clearTimeout(this.dragTimeout)
        }
        ,
        i.prototype.itemDragEnd = function(b) {
            var c, d = this.getItem(b);
            if (d && (c = d.didDrag,
            d.dragStop()),
            !d || !c && !d.needsPositioning)
                return void this.unstamp(b);
            a.add(d.element, "is-positioning-post-drag");
            var e = this._getDragEndLayoutComplete(b, d);
            d.needsPositioning ? (d.on("layout", e),
            d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(),
            this.clearDragTimeout(),
            this.on("layoutComplete", e),
            this.layout()
        }
        ,
        i.prototype._getDragEndLayoutComplete = function(b, c) {
            var d = c && c.needsPositioning
              , e = 0
              , f = d ? 2 : 1
              , g = this;
            return function() {
                return e++,
                e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"),
                c.isPlacing = !1,
                c.copyPlaceRectPosition()),
                g.unstamp(b),
                g.sortItemsByPosition(),
                d && g.emitEvent("dragItemPositioned", [g, c]),
                !0)
            }
        }
        ,
        i.prototype.bindDraggabillyEvents = function(a) {
            a.on("dragStart", this.handleDraggabilly.dragStart),
            a.on("dragMove", this.handleDraggabilly.dragMove),
            a.on("dragEnd", this.handleDraggabilly.dragEnd)
        }
        ,
        i.prototype.bindUIDraggableEvents = function(a) {
            a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
        }
        ,
        i.Rect = d,
        i.Packer = e,
        i
    }
    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window),
function(a) {
    function b(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function c(a, c, d) {
        var e = a.create("packery")
          , f = e.prototype._getElementOffset
          , g = e.prototype._getMeasurement;
        b(e.prototype, c.prototype),
        e.prototype._getElementOffset = f,
        e.prototype._getMeasurement = g;
        var h = e.prototype._resetLayout;
        e.prototype._resetLayout = function() {
            this.packer = this.packer || new c.Packer,
            h.apply(this, arguments)
        }
        ;
        var i = e.prototype._getItemLayoutPosition;
        e.prototype._getItemLayoutPosition = function(a) {
            return a.rect = a.rect || new c.Rect,
            i.call(this, a)
        }
        ;
        var j = e.prototype._manageStamp;
        return e.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft,
            this.options.isOriginTop = this.isotope.options.isOriginTop,
            j.apply(this, arguments)
        }
        ,
        e.prototype.needsResizeLayout = function() {
            var a = d(this.element)
              , b = this.size && a
              , c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            return b && a[c] !== this.size[c]
        }
        ,
        e
    }
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], c) : "object" == typeof exports ? module.exports = c(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : c(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window);
