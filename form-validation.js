function validate()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length < 6)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="User name must have 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    else if(userEntered.split("") != 0)
    {
      document.getElementById("usernameError").innerHTML="User name can't contain spaces";
    }
  } else if (userEntered.length >= 6)
  {
    document.getElementById("usernameError").innerHTML="Good username.";

  }
  if (passEntered == "password" || passEntered == "Password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password can't be password";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered != "password")
  {
    document.getElementById("passwordError").innerHTML="Good password.";

  }
  if (passEntered == userEntered)
  {
      document.getElementById("passwordError").innerHTML="Password can't be same as username";
  } else if (passEntered != userEntered)
  {
    document.getElementById("passwordError").innerHTML="Good password";
  }
}
