const send = document.getElementById("send").onclick = function(){
    ///first one
   var text = document.getElementById("text").value;
   var mytext = document.getElementById("mytext").innerText = "" + text;
   if (mytext > "" && mytext === "AK") {
    document.getElementById("result").innerText = "How can i help you."
    alert("You are developer how are you.")
    alert("please wait a moment we are setup your profile...")
    
   } else {
    alert("please wait a moment we are setup your profile...")
    alert("You are not user")
    alert("please exit you are no longer to this AI")
    
   }




}