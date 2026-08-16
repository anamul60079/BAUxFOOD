function showDataTime() { 
      let footerDate = document.getElementById("footerDate"); 
      if (footerDate) { 
        let now = new Date(); 
        footerDate.innerText = "Current Date and Time: " + now.toLocaleString(); 
      } 
    } 
    showDataTime(); 
    setInterval(showDataTime, 1000);

    const form = document.querySelector('.formbox form');
  const msgDiv = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    // Prevent actual form submission for this demonstration
    event.preventDefault();

    // Get values from form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const hall = document.getElementById('hall').value.trim();
    const faculty = document.getElementById('faculty').value;
    const message = document.getElementById('message').value.trim();

    // If-else validation check
    if (name === "" || email === "" || hall === "" || faculty === "" || message === "") {
      msgDiv.style.color = "red";
      msgDiv.innerText = "Please fill out all required fields!";
    } else {
      msgDiv.style.color = "green";
      msgDiv.innerText = "Thank you! Form submitted successfully.";
      
      // Optional: Reset form after successful submission
      form.reset();
    }});