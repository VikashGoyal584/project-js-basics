(function(){
    $('#editing-form').validate({
        onSubmitHandler: function(form){
            form.submit();
        },
        errorClass: 'error_label',
        onfocusout: function(a, b) {
            return true;
        },

        rules: {
            firstname: {
              required: true,
              minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                minlength: 12
            }
          },
          messages: {
            firstname: {
              required: "Please enter your First name",
              minlength: jQuery.validator.format("At least {0} characters required!")
            },
            lastname: {
                required: "Please enter your last name",
                minlength: jQuery.validator.format("At least {0} characters required!")
              },
            email: {
                required: "Please enter your email ID",
                minlength: jQuery.validator.format("At least {0} characters required")
            }
          }
    });
})();
