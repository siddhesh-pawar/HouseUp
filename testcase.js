// app.js
var listings = []; // Placeholder for listings, assuming it will be defined elsewhere

function displayListings() {
    var listingContainer = document.getElementById('listingContainer');
    for (var i = 0; i < listings.length; i++) {
        var listingItem = document.createElement('div');
        listingItem.innerHTML = '<strong>' + listings[i].apartmentName + '</strong> - ' + listings[i].location + ' - Apartment ' + listings[i].apartmentNo;
        listingContainer.appendChild(listingItem);
    }
}

module.exports = {
    displayListings,
    listings, // Exporting the placeholder listings for the purpose of testing
};

// Test for displayListings function
const { displayListings, listings } = require('./app');

test('displayListings function should display listings on the page', () => {
    // Mock the HTML structure
    document.body.innerHTML = '<div id="listingContainer"></div>';

    // Sample data for testing
    listings = [
        { apartmentName: 'Apartment 1', location: 'New York', apartmentNo: 123 },
        { apartmentName: 'Apartment 2', location: 'San Francisco', apartmentNo: 456 },
    ];

    // Call the displayListings function
    displayListings();

    // Assertions to check if listings are correctly displayed
    const listingContainer = document.getElementById('listingContainer');
    expect(listingContainer.children.length).toBe(listings.length);
    expect(listingContainer.innerHTML).toContain('Apartment 1');
    expect(listingContainer.innerHTML).toContain('New York');
    expect(listingContainer.innerHTML).toContain('123');
    expect(listingContainer.innerHTML).toContain('Apartment 2');
    expect(listingContainer.innerHTML).toContain('San Francisco');
    expect(listingContainer.innerHTML).toContain('456');
});