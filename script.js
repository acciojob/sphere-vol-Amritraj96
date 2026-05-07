function volume_sphere(event) {
    // Prevent the form from actually submitting/reloading the page
    if (event) event.preventDefault();

    // 1. Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;
    const volumeField = document.getElementById('volume');
    
    // Convert the input string to a number
    const r = parseFloat(radiusInput);

    // 2. Validate the input (must be a number and non-negative)
    if (isNaN(r) || r < 0) {
        volumeField.value = 'NaN';
        return;
    }

    // 3. Calculate the volume: (4/3) * pi * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // 4. Round to four decimal places and display
    volumeField.value = volume.toFixed(4);
}

// Ensure the function is tied to the form submission
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};