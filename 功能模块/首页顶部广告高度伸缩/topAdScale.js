    var topIndex = function() {
        var topIndex = $("#topIndex");
        var TopIndexHeight = 60;
        var showTopIndex = function() {
            topIndex.animate({height: TopIndexHeight}, 600, "swing", function() {
                topIndex.trigger("adLoaded");
            });
        }
        var hideTopIndex = function() {
            topIndex.slideUp(function() {
                topIndex.trigger("adClosed");
            });
        }
        var getBgColor = function(bgsrc) {
            return getQueryStringByName(bgsrc, "bgcolor");
        }
        var getQueryStringByName = function(url, name) {
            var reg = new RegExp("[\?\&]" + name + "=([^\&]+)");
            var result = url.match(reg)
            if (result && result.length)
                return result[1];
            return "#fff";
        }
        if (topIndex.length > 0) {
            topIndex.on("click", ".top_index_close", hideTopIndex);
            var topIndexAd = topIndex.find(".top_index_ad"), bgsrc = $(topIndexAd).attr("data-bgsrc");
            var img = new Image();
            img.onload = function() {
                var bgImage = "url(" + bgsrc + ")", bgColor = getBgColor(bgsrc);
                topIndexAd.css({"background-image": bgImage,"background-color": bgColor});
                showTopIndex();
            }
            img.src = bgsrc;
        }
    }
    topIndex();