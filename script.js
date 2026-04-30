// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
      output.textContent = "Please fill out all fields.";
      output.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      output.textContent = "Please enter a valid email address.";
      output.style.color = "red";
      return;
    }

    try {
      let response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        output.textContent = "Message sent successfully!";
        output.style.color = "green";
        contactForm.reset();
      } else {
        output.textContent = "Something went wrong. Please try again.";
        output.style.color = "red";
      }
    } catch {
      output.textContent = "Network error. Please check your connection.";
      output.style.color = "red";
    }
  });
}

// SERVICE FORM
const serviceForm = document.getElementById("serviceForm");

if (serviceForm) {
  serviceForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let messageBox = document.getElementById("formMessage");

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

    try {
      let response = await fetch(serviceForm.action, {
        method: "POST",
        body: new FormData(serviceForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        messageBox.textContent = "Request submitted successfully!";
        messageBox.style.color = "green";
        serviceForm.reset();
      } else {
        messageBox.textContent = "There was a problem submitting your request.";
        messageBox.style.color = "red";
      }
    } catch {
      messageBox.textContent = "Network error. Please try again.";
      messageBox.style.color = "red";
    }
  });
}
