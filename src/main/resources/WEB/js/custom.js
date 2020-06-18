$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
    // Uncomment the following line to expand the info panel at startup
    //$("#panel").slideDown("slow");
    $("#notes").show("slow");
});