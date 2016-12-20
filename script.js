
var errorMessage= '';
var successMessage = '';
var firstLastName = /^[a-z ,.'-]+$/i;
var emailVari = /^.+@.+\..+$/;
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
/** (/^\d{5}/) - zip code
*/

function validate() {
	if (document.contactMe.firstName.value.length<2) {
		errorMessage+= 'Please provide your First Name.\n'; 	
	}else{
		successMessage += "You entered " + document.contactMe.firstName.value + " as your first name.\n";
	}
	
	if (document.contactMe.lastName.value.length<2) {
		errorMessage+= 'Please provide your Last Name.\n'; 	
	}else{
		successMessage += "You entered " + document.contactMe.lastName.value + " as your last name.\n";
	}
	
    if (emailVari.test(document.contactMe.emailAddress.value)) {     
        successMessage+= 'You entered' + document.contactMe.emailAddress.value + ' as your email.\n';		 
    }else{
		errorMessage+='Please enter a valid Email Address.\n';
    }
    
	if (document.contactMe.password.value.length >= 8){
        successMessage+='You entered ' + document.contactMe.password.value + ' as your password.\n';
    }else{
        errorMessage+='Please enter a valid password.\n';
    }
    
	if (document.contactMe.userID.value.length >= 8){
        successMessage+='You entered ' + document.contactMe.userID.value + ' as your User ID.\n';
    }else{
        errorMessage+='Please enter a valid User ID.\n';
    }
    
	if (/^\s*\S+(?:\s+\S+){2}/.test(document.contactMe.street.value)){                                 /** http://stackoverflow.com/questions/21264194/simple-regex-for-street-address */
        successMessage+='You entered ' + document.contactMe.street.value + ' as your Street Address.\n';
    }else{
        errorMessage+='Please enter a valid Street Address.\n';
    }
    
    if (document.contactMe.state.value.length == 2) {
        successMessage += "You entered " + document.contactMe.state.value + " as your state.\n";
	}else{
	
        errorMessage+= 'Please provide your State.\n ';
	}
	
    if (/(^\d{5})/.test(document.contactMe.zip.value)){
        successMessage += "You entered " + document.contactMe.zip.value + " as your ZIP code.\n";
	}else{
	
        errorMessage+= 'Please provide a valid ZIP code.\n';
	}
	
    if (document.contactMe.reasonForReturn.value == '') {
		errorMessage+= 'Please provide your Reason for Return.\n'; 
	}else{
		successMessage += "You entered " + document.contactMe.reasonForReturn.value + " as your Reason for Return.\n";   	
	}
	
    
    var captcha = grecaptcha.getResponse(); /** http://stackoverflow.com/questions/27902539/how-can-i-validate-google-recaptcha-v2-using-javascript-jquery */
    if (captcha.length === 0){
        errorMessage+='You must complete the Captcha.\n';
    }else{
        successMessage+='You have completed the Captcha.\n';
    }

    

    if (document.contactMe.tos.checked){
        successMessage+= 'You have agreed to the Terms of Service.\n';
    }else{
        errorMessage+= 'You must agree to the Terms of Service.\n';
    }
     

	
    if(errorMessage === ''){
	alert('Success!! ' + successMessage);
        return true;
	}else{
		alert(errorMessage);
        return false;
	}
}