const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : ''}">${order.status}</td>
        <td class="success">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('aside .sidebar a');

// Function to remove active class from all links and add to the clicked one
function makeActive(event) {
    // Prevent default link behavior
    

    // Loop through all links and remove active class
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    event.currentTarget.classList.add('active');
}

// Attach event listener to each sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener('click', makeActive);
});

// Assume this function is called when the user logs in
function handleLogin() {
    // Find the Dashboard menu link element
    const dashboardLink = document.querySelector('.dashboard-link');
    
    // Add the "active" class to the Dashboard menu link
    dashboardLink.classList.add('active');
}




// Get elements
const personalprofForm = document.getElementById("personalprofForm");
const editButton = document.getElementById('editButton');
const closeButton = document.getElementById('closeButton');
const firstNameText = document.getElementById('firstNameText');
const lastNameText = document.getElementById('lastNameText');
const emailText = document.getElementById('emailText');
const phoneNumberText = document.getElementById('phoneNumberText');
const affiliationText = document.getElementById('affiliationText');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const affiliationInput = document.getElementById('affiliation');

// Function to show profile form
function showProfileForm() {
    personalprofForm.style.display = "block";
    // Populate form with existing profile data
    firstNameInput.value = firstNameText.textContent;
    lastNameInput.value = lastNameText.textContent;
    emailInput.value = emailText.textContent;
    phoneNumberInput.value = phoneNumberText.textContent;
    affiliationInput.value = affiliationText.textContent;
}

// Function to hide profile form
function hideProfileForm() {
    personalprofForm.style.display = "none";
}

// Event listener for edit button
editButton.addEventListener('click', showProfileForm);

// Event listener for close button
closeButton.addEventListener('click', hideProfileForm);

// Event listener for form submission
personalprofForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Update profile details with form values
  firstNameText.textContent = firstNameInput.value;
  lastNameText.textContent = lastNameInput.value;
  emailText.textContent = emailInput.value;
  phoneNumberText.textContent = phoneNumberInput.value;
  affiliationText.textContent = affiliationInput.value;
  // Hide profile form
  hideProfileForm();
});
