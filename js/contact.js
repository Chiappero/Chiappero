$(document).ready(function(){
    
    (function($) {
        "use strict";
	    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");
        
        
    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})

angular.module('indexApp', [])
.controller('indexController', function($scope, $http){
    var index = this; //edit = this module	
    var g-recaptcha-response ="";
    /*	
    index.exportText="export to excel";
    pathURL="http://"+window.location.host+"/"+window.location.pathname.toString().split("/")[1];
    $scope.orderByField = 'element.dateCreation';
    $scope.reverseSort = true;
*/
    /**** TODO : recaptcha code to transcript in js */
    
    if(angular.isDefined(value)){
        $.post(g-recaptcha-response, {},
                function (data, status) {
        captcha=$_POST['g-recaptcha-response'];
    }
    else
        $captcha = false;

    if(!$captcha){
        //Do something with error
    }
    else{
        $secret = 'Your secret key here';
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=
            .$secret.&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==false)
        {
            //Do something with error
        }
    }
... The Captcha is valid you can continue with the rest of your code
/*
    function() {
        $.post(pathURL+"/getLastIMMPServlet/", {},
                function (data,status){
                    index.immp=JSON.parse(data);
                    index.getIMMP(index.immp.id)
                }, 'html');
    }*/
    /*
    index.exportExcel = function(id){
        index.exportText="processing";
        $.post(
                pathURL+"/downloadFileServlet?IMMPId="+id, {},
                function (data, status) {
                    //console.log(id);
                    //console.log("file: "+data);
                    array=data.split("\\");  //full filename split to get only the name and not the path   	
                    history.exportText="export to excel";				
                    window.open(pathURL+"/dataFileTransferServlet?filename="+array[array.length-1]);  //current url + servlet adress + filename 
                    //console.log(pathURL+"/dataFileTransferServlet?filename="+array[array.length-1]);
                    //history.text=" Download excel for immp "+id;
                    //history.isDivVisible="download";
                    $scope.$apply();
                    //  window.open(data); //access refused
                }
            )
    }*/
}

