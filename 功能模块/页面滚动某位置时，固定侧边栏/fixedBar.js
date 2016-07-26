(function($) {
    $.fn.setFixed = function(optison) {
        var defaults = {initial: 0};
        var isFixed = false;
        var self = this;
        this.setting = $.extend(defaults, optison);
        this.offsetTop = $(this).offset().top;
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if (!isFixed && scrollTop > self.offsetTop) {
                $(self).css({position: 'fixed',left: 0,top: self.setting.initial});
                isFixed = true;
            } else if (isFixed && scrollTop <= self.offsetTop) {
                $(self).css({position: 'static'});
                isFixed = false;
            }
        });
    };
    $.fn.positionScroll = function(options) {
        var defaults = {flag: 0}
        var items = $(this).find('a');
        var opt = $.extend(defaults, options);
        items.bind('click', function(e) {
            if (!$(this).data('to'))
                return false;
            $('html,body').animate({scrollTop: $($(this).data('to')).offset().top - opt.flag}, 500);
            e.preventDefault();
        });
    }
})(jQuery);
