
import {listings} from "./app";
function displayListings() {
    // Get the listing container element
    var listingContainer = document.getElementById('listingContainer');

    // Loop through the listings array and display each listing
    for (var i = 0; i < listings.length; i++) {
        var listingItem = document.createElement('div');
        listingItem.innerHTML = '<strong>' + listings[i].apartmentName + '</strong> - ' + listings[i].location + ' - Apartment ' + listings[i].apartmentNo;
        listingContainer.appendChild(listingItem);
    }
}