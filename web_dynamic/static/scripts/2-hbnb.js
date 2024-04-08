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

    // Make an API request to check the status
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
            // API status is "OK", add the class "available" to the div#api_status
            $('#api_status').addClass('available');
        } else {
            // API status is not "OK", remove the class "available" from the div#api_status
            $('#api_status').removeClass('available');
        }
    });
});

