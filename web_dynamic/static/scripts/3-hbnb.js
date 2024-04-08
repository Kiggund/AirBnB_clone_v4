$(document).ready(function() {
    const amenityIds = {};

    $('input[type="checkbox"]').change(function() {
        const checkbox = $(this);
        const amenityId = checkbox.data('id');

        if (checkbox.is(':checked')) {
          amenityIds[amenityId] = checkbox.data('name');
        } else {
            delete amenityIds[amenityId];
        }

        const amenitiesList = Object.keys(amenityIds).join(', ');
        $('#amenities-list').text(amenitiesList);
    });

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}), // Empty dictionary as the request body
        success: function(data) {
            // Loop through the results and create article tags representing Places
            const placesSection = $('.places'); // Assuming the section has a class of 'places'
            data.forEach(place => {
                const article = $('<article>').text(place.name); // Create an article tag with the Place name
                placesSection.append(article); // Append it to the section
            });
        },
        error: function() {
            console.error('Error fetching places data.');
        }
    });
});

