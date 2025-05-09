document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // Device-specific initializations can go here

    // Event listener for the Save button (if it exists on the current page)
    const buttonSave = document.querySelector("#buttonSave");
    if (buttonSave) {
        buttonSave.addEventListener("click", saveData);
    }

    // If we are on the place/index.html page, load the saved data
    // A simple way to check the page is by using the body ID or a specific element
    if (document.body.id === "page-show-place" && typeof showData === "function") {
        showData();
    }

    // Update the active link in the footer
    updateActiveFooterLink();
}

function saveData() {
    const fieldColor = document.getElementById("inputColor").value;
    const fieldSection = document.getElementById("inputSection").value;
    const fieldNumber = document.getElementById("inputNumber").value;
    const messageDiv = document.getElementById('message');

    messageDiv.innerHTML = ''; // Clear previous messages

    if (fieldColor === "..." || fieldSection.trim() === "" || fieldNumber.trim() === "") {
        const alertMessage = '<div class="alert alert-danger">Invalid data! Please fill all fields.</div>';
        if (navigator.notification) {
            navigator.notification.alert(
                'Invalid data! Please fill all fields.', // message
                null,            // callback
                'AppPark Error', // title
                'OK'             // button name
            );
        } else {
            // Fallback for browser or if plugin is not ready
            messageDiv.innerHTML = alertMessage;
        }
        console.error("Invalid data:", { fieldColor, fieldSection, fieldNumber });
        return; // abort function
    }

    const fieldDate = new Date().toString(); // Save as string for simplicity

    localStorage.setItem("Park_Date", fieldDate);
    localStorage.setItem("Park_Color", fieldColor);
    localStorage.setItem("Park_Section", fieldSection);
    localStorage.setItem("Park_Number", fieldNumber);

    const successMessage = '<div class="alert alert-success">Place saved!</div>';
    if (navigator.notification) {
        navigator.notification.alert(
            'Place saved successfully!', // message
            null,            // callback
            'AppPark',       // title
            'OK'             // button name
        );
    } else {
        messageDiv.innerHTML = successMessage;
    }
    console.log("Place saved:", { fieldDate, fieldColor, fieldSection, fieldNumber });

    // Clear form fields
    document.getElementById("inputColor").value = "...";
    document.getElementById("inputSection").value = "";
    document.getElementById("inputNumber").value = "";
}

function showData() {
    const fieldDate = localStorage.getItem("Park_Date");
    const fieldColor = localStorage.getItem("Park_Color");
    const fieldSection = localStorage.getItem("Park_Section");
    const fieldNumber = localStorage.getItem("Park_Number");
    const divData = document.getElementById("divData");

    if (!divData) {
        console.error("Element with ID 'divData' not found.");
        return;
    }
    
    if (!fieldDate && !fieldColor && !fieldSection && !fieldNumber) {
        divData.innerHTML = "<p>No parking data saved yet.</p>";
        divData.style.backgroundColor = "transparent"; // Reset background
        divData.style.color = "inherit"; // Reset text color
        return;
    }

    let textData = "";
    textData += fieldDate ? `<p><strong>Date:</strong> ${new Date(fieldDate).toLocaleString()}</p>` : "<p>Date not available</p>";
    textData += fieldColor ? `<p><strong>Color:</strong> ${fieldColor}</p>` : "<p>Color not available</p>";
    textData += fieldSection ? `<p><strong>Section:</strong> ${fieldSection}</p>` : "<p>Section not available</p>";
    textData += fieldNumber ? `<p><strong>Number:</strong> ${fieldNumber}</p>` : "<p>Number not available</p>";

    divData.innerHTML = textData;

    // Change the background color of the "divData" div
    divData.style.color = "black"; // Default text color
    switch (fieldColor ? fieldColor.toLowerCase() : "") {
        case "yellow":
            divData.style.backgroundColor = "yellow";
            break;
        case "red":
            divData.style.backgroundColor = "red";
            divData.style.color = "white";
            break;
        case "green":
            divData.style.backgroundColor = "green";
            divData.style.color = "white";
            break;
        case "blue":
            divData.style.backgroundColor = "blue";
            divData.style.color = "white";
            break;
        case "orange":
            divData.style.backgroundColor = "orange";
            break;
        default:
            divData.style.backgroundColor = "#e9ecef"; // Bootstrap light gray
            break;
    }
}

// Function to load header and footer, then call the callback
function loadIncludes(callback) {
    let loadedCount = 0;
    const totalIncludes = 2; // header and footer

    function checkAllLoaded() {
        loadedCount++;
        if (loadedCount === totalIncludes && callback) {
            callback();
        }
    }

    $("#header").load("/includes/header.html", checkAllLoaded);
    $("#footer").load("/includes/footer.html", checkAllLoaded);
}

// Function to update the active link in the footer
function updateActiveFooterLink() {
    const currentPath = window.location.pathname;
    $('.nav-footer a').removeClass('active'); // Remove from all
    $('.nav-footer a').each(function() {
        const linkPath = $(this).attr('href');
        // Handle the case of index.html or /
        if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
            $(this).addClass('active');
        }
    });
}

// Execute when DOM is loaded
$(function () {
    loadIncludes(function() {
        // After loading the includes, we can call onDeviceReady or
        // ensure that the functions in onDeviceReady that depend on the loaded DOM
        // are called here or after this point.
        // If onDeviceReady has already been triggered, some initializations may need to be redone
        // if they depend on header/footer.
        // For simplicity, let's make sure the footer update is called here
        updateActiveFooterLink();
    });
});
