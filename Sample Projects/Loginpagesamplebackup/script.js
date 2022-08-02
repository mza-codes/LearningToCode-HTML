$(document).ready(function(){
    jQuery.validator.addMethod("alphanumeric",function(value,element){
        return this.optional(element) || /^[\w.]+$/i.test(value);
    }, "*alphaNumerics only!" );
    
    $("#signupform").validate({
        rules:{
            email:{
                required:true,
                minlength:5,
                maxlength:20
            },
            user:{
                required:true,
                minlength:4,
                maxlength:10
            },
            gender:{
                required:true
            },
            age:{
                required:true,
                maxlength:2
            },
            pwd:{
                required:true,
                minlength:8,
                maxlength:15,
                alphanumeric: true,
                ///equalTo:"#pwdcnf" 
            },
            pwdcnf:{
                required:true,
                minlength:8,
                maxlength:15,
                alphanumeric: true,
                ///equalTo:'[name="pwd"]'
                equalTo:"#confirm"
            }
        },
        messages:{
            pwdcnf:{
                equalTo:"Passwords must match"

            },
            age:{
                maxlength:"You gotta be kidding me!",
                required:"*Required"
            }
        },
        

        
    })
})

