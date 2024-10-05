//dashboardjs.js
// script.js
document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate Zip Code (must be numbers)
    const zip = document.getElementById('zip').value;
    if (isNaN(zip) || zip.length !== 5) {
        alert("Please enter a valid 5-digit zip code.");
        return;
    }

    // Validate that social media links start with http or https
    const facebook = document.getElementById('facebook').value;
    const twitter = document.getElementById('twitter').value;
    const instagram = document.getElementById('instagram').value;

    if ((facebook && !isValidURL(facebook)) ||
        (twitter && !isValidURL(twitter)) ||
        (instagram && !isValidURL(instagram))) {
        alert("Please enter valid URLs for social media links.");
        return;
    }

    // If everything is valid, show success message
    document.getElementById('successMessage').style.display = 'block';
});

function isValidURL(url) {
    return url.startsWith('http://') || url.startsWith('https://');
}
