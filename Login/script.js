const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document
  .querySelector(".sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Place your validation logic here
    // For example, check if username and password fields are not empty
    const username = document.querySelector(
      '.sign-in-form input[type="text"]'
    ).value;
    const password = document.querySelector(
      '.sign-in-form input[type="password"]'
    ).value;

    if (username && password) {
      // If validation passes, submit the form
      this.submit();
    } else {
      // If validation fails, alert the user
      alert("Please enter both username and password.");
    }
  });

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission to validate fields first

    let inputs = this.form.querySelectorAll(".input-field");
    let isValid = true;

    inputs.forEach((inputField) => {
      const input = inputField.querySelector("input");
      if (input.value.trim() === "") {
        // Check if the field is empty
        input.classList.add("invalid"); // Add 'invalid' class to apply red border
        inputField.classList.add("shake-animation"); // Add shaking animation to the container
        isValid = false;

        // Remove the animation class after it completes to allow reapplication
        setTimeout(() => {
          inputField.classList.remove("shake-animation");
        }, 820); // Duration of the animation in milliseconds
      } else {
        input.classList.remove("invalid"); // Remove 'invalid' class when the field is filled
      }
    });

    if (isValid) {
      this.form.submit(); // Submit the form only if all fields are valid
    }
  });
});

// Add event listeners to all input fields for dynamic validation
document.querySelectorAll(".input-field input").forEach((input) => {
  input.addEventListener("input", () => {
    const inputField = input.closest(".input-field");
    if (input.value.trim() !== "") {
      input.classList.remove("invalid");
      inputField.classList.remove("shake-animation"); // Ensure the container stops shaking when filled
    }
  });
});
