
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display menu data
    fetchMenuData().then(menuItems => {
        if (menuItems) {
            displayMenu(menuItems);
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }

    // Responsive navigation toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links'); // Assuming this is the element to toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle 'active' class for styling
        });
    }
});

/**
 * Fetches menu data from data/menu.json.
 * @returns {Promise<Array>} A promise that resolves to an array of menu items.
 */
async function fetchMenuData() {
    try {
        const response = await fetch('data/menu.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.menuItems; // Assuming menuItems is an array directly under the root of the JSON
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return [];
    }
}

/**
 * Dynamically generates HTML elements to display menu items.
 * @param {Array} menuItems - An array of menu item objects.
 */
function displayMenu(menuItems) {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer || !menuItems || menuItems.length === 0) {
        return;
    }

    // Group menu items by category
    const categorizedItems = menuItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    menuContainer.innerHTML = ''; // Clear existing content

    for (const category in categorizedItems) {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-category-section');

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        categorizedItems[category].forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.imageUrl;
            itemImage.alt = item.name;
            itemImage.classList.add('menu-item-image');
            menuItemDiv.appendChild(itemImage);

            const itemDetails = document.createElement('div');
            itemDetails.classList.add('menu-item-details');

            const itemName = document.createElement('h4');
            itemName.textContent = item.name;
            itemDetails.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDetails.appendChild(itemDescription);

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;
            itemDetails.appendChild(itemPrice);

            menuItemDiv.appendChild(itemDetails);
            categorySection.appendChild(menuItemDiv);
        });
        menuContainer.appendChild(categorySection);
    }
}

/**
 * Handles the submission of the contact form.
 * Prevents default submission, validates inputs, and displays a confirmation message.
 * @param {Event} event - The submit event object.
 */
function handleContactFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();
    const formMessages = document.getElementById('form-messages');

    // Basic client-side validation
    if (!name || !email || !subject || !message) {
        if (formMessages) {
            formMessages.textContent = 'Please fill in all fields.';
            formMessages.style.color = 'red';
        }
        return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (formMessages) {
            formMessages.textContent = 'Please enter a valid email address.';
            formMessages.style.color = 'red';
        }
        return;
    }

    // Simulate form submission success
    if (formMessages) {
        formMessages.textContent = 'Thank you for your message! We will get back to you shortly.';
        formMessages.style.color = 'green';
        form.reset(); // Clear the form
    }

    console.log('Contact Form Submitted:', { name, email, subject, message });
    // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
}
