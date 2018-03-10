$(document).ready(function(){
    $(".devour-btn").on("click", function(event){
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: 1
            }
        }).then(
            function(){
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add-burger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $(".burger-input").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});