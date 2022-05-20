function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
     error = true;
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
       
            if(inputs[i].value == ""){
                // found an empty field that is required
                document.getElementById(inputs[i].getAttribute('id')).classList.add("border-red-500");
                error = false;
            }
           
    }
    if(error==false){
        return false;
    }else{
         return true;
    }
}