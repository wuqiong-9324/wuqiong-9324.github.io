window.onload = function () {
    $.ajax({
        type: "GET",
        url: '../db/index.json',
        success: function (data) {
            console.log(data);
        }
    })
}