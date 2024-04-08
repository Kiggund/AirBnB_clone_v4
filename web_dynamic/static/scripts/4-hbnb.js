$(document).ready(function() {
    // Initialize an empty dictionary to store Amenity IDs
    const amenityIds = {};

    // Listen for changes on input checkboxes
    $('input[type="checkbox"]').change(function() {
        const checkbox = $(this);
        const amenityId = checkbox.data('id'); // Assuming each checkbox has a data attribute 'data-amenity-id'

        if (checkbox.is(':checked')) {
            // Checkbox is checked, add the Amenity ID to the dictionary
            amenityIds[amenityId] = checkbox.data('name');
        } else {
            // Checkbox is unchecked, remove the Amenity ID from the dictionary
            delete amenityIds[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of checked Amenities
        const amenitiesList = Object.keys(amenityIds).join(', ');
        $('#amenities-list').text(amenitiesList); // Assuming the h4 tag has an ID of 'amenities-list'
    });

    // Listen for button click
    $('#my-button').click(function() {
        // Make a POST request to places_search with the list of checked Amenities
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: Object.keys(amenityIds) }),
            success: function(data) {
                // Handle the response data as needed
                console.log('Places search successful:', data);
            },
            error: function() {
                console.error('Error making places search request.');
            }
        });
    });
});

