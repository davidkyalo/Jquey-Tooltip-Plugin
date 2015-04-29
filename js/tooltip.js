(function($) {
    //Defining The Plugin
    $.fn.tooltip = function(options) {

        //Settion the default options.
        var settings = $.extend({
            // These are the defaults.
            timeout: 2500,
            tipAttr: 'data-tip'
        }, options );

        $('#tooltip_container').hide();

        this.find(':input['+ settings.tipAttr +']').each(function(){

            $(this).focus(function(){

                var tooltipText = $(this).attr(settings.tipAttr);
                if(tooltipText != ""){

                    var offSet = $(this).offset();



                    $('#tooltip_text').html(tooltipText);
                    var Count= 200 + tooltipText.length * 60;
                    tooltipCss = {
                                    top: offSet.top - $('#tooltip_container').height(),
                                    left: offSet.left + 100
                            };

                    $('#tooltip_container').css(tooltipCss);
                    if(settings.timeout){
                        $('#tooltip_container')
                            .slideDown(500)
                            .delay(Count)
                            .fadeOut(settings.timeout);
                    }

                }
            });
            $(this).focusout(function(){
                $('#tooltip_container').hide();
            })
        });
    }
})(jQuery);