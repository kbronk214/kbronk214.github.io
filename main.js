<script>
document.getElementById("serviceForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // stop default redirect

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let details = document.querySelector("textarea[name='details']").value.trim();
  let messageBox = document.getElementById("formMessage");

  // Validation
  if (name === "" || email === "") {
    messageBox.textContent = "Please fill out all required fields.";
    messageBox.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    messageBox.textContent = "Please enter a valid email address.";
    messageBox.style.color = "red";
    return;
  }

  // Send form using fetch (Formspree)
  try {
    let response = await fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      messageBox.textContent = "Request submitted successfully!";
      messageBox.style.color = "green";
      this.reset(); // clear form
    } else {
      messageBox.textContent = "There was a problem submitting your request.";
      messageBox.style.color = "red";
    }
  } catch (error) {
    messageBox.textContent = "Network error. Please try again.";
    messageBox.style.color = "red";
  }
});
</script>
