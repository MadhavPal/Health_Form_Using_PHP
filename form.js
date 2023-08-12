function validateName() {
    var name = document.getElementById("name").value;
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    return true;
  }
  
  // Validate the age field
  function validateAge() {
    var age = document.getElementById("age").value;
    if (age == "") {
      alert("Please enter your age.");
      return false;
    }
    if (isNaN(age)) {
      alert("Please enter a valid age.");
      return false;
    }
    if (age < 18) {
      alert("You must be at least 18 years old to submit this form.");
      return false;
    }
    return true;
  }
  
  // Validate the weight field
  function validateWeight() {
    var weight = document.getElementById("weight").value;
    if (weight == "") {
      alert("Please enter your weight.");
      return false;
    }
    if (isNaN(weight)) {
      alert("Please enter a valid weight.");
      return false;
    }
    return true;
  }
  
  // Validate the email field
  function validateEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }
  
  
