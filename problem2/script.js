function validateForm() {
	var x = document.forms["Form"]["ethaddress"].value;
	var y = document.forms["Form"]["amount"].value;
    var z = document.forms["Form"]["OTP"].value;
    var emailformat = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
    let error;
    
	if (x == "") {
    	error = "ETH Address must be filled out."
        document.getElementById("error1").innerHTML = error;
	}
    if(!x.match(emailformat)){
        error = "ETH address is not in correct format.";
        document.getElementById("error1").innerHTML = error;
    }
    if (y.length == 0){
        alert("Amount must be filled out.");
        
    }
    if (y.length > 4){
    	alert("Amount cannot exceed 4 digits.");
    	
    }
    if (z.length == 0){
        alert("OTP must be filled out.");
        
    }
    if(z.length != 6){
        alert("OTP must be 6 digits.");
        return false;
    }
    else{
        return true;
    }
}