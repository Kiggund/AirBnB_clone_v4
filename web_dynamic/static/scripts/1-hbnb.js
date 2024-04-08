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
        const amenitiesList = Object.values(amenityIds).join(', ');
        $('#amenities-list').text(amenitiesList);
    });
});
