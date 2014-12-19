$(function(){
    // initialization fancybox with validation
    $(".fancybox").fancybox({
        padding: 0,
        afterLoad: function(){
            // initialization validation
            $('#validate-form1').validate({
                errorPlacement: function (error, element) {
                    $(element).tooltipster('update', $(error).text());
                    $(element).tooltipster('show');
                },
                success: function (label, element) {
                    $(element).tooltipster('hide');
                    setTimeout(function() {
                        $('input[type="file"]').trigger('refresh');
                    }, 1);
                },
                rules: {
                    name: {
                        required: true
                    },
                    upload: {
                        required: true
                    },
                    siteUrl: {
                        required: true,
                        complete_url: true
                    }
                },
                messages: {
                    name: "введите название",
                    upload: "изображение",
                    siteUrl: {
                        required: "ссылка на проект",
                        complete_url: "cсылка на проект"
                    }
                },
                submitHandler: function (form) {
                    return false;
                },
                invalidHandler: function() {

                    setTimeout(function() {
                        $('input[type="file"]').trigger('refresh');
                    }, 1)

                }
            });
        },
        beforeClose: function(){
            // hide tooltips
            $('#add-project-form input').tooltipster('hide');
        },
        helpers:  {
            overlay : {
                locked : false
            }
        }
    });

    // stylization input[type="file"]
    $('input[type="file"]').styler()

    // initialization tooltipster
    $('#add-project-form input').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: 21,
        autoClose: true
    });

    // add validation method for url
    $.validator.addMethod("complete_url", function(val, elem) {
        if (val.length == 0) { return true; }

        if(!/^(https?|ftp):\/\//i.test(val)) {
            val = 'http://'+val; // set both the value
            $(elem).val(val); // also update the form element
        }
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(val);
    });

   // js media queries
    enquire.register("screen and (max-width: 1050px)", {
        match : function() {
            $('.menu-button').prepend($('.main-nav'));
            $('.for-contacts').prepend($('.w-contact'));
        },
        unmatch : function() {
            $('.sidebar-item-1').prepend($('.main-nav'));
            $('.sidebar-item-2').prepend($('.w-contact'));
        }
    });
    enquire.register("screen and (max-width: 721px)", {
        match : function() {
            $('.for-social').prepend($('.social-list'));
        },
        unmatch : function() {
            $('.header-item-2').append($('.social-list'));
        }
    });
})