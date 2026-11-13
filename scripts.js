/* Add your JavaScript to this file */
window.onload = function(){
    var form = document.querySelector("form");
    var msg = document.querySelector(".message");
    var inptField = document.querySelector("input");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        var inpt = inptField.value.trim();

        if (inpt !== ""){
            msg.textContent = `Thank you! Your email address ${inpt} has been added to our mailing list!`;
        }else{
            msg.textContent = 'Please enter a valid email address.';
        }
    });  
};