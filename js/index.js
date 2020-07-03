window.onload = function () {
    $.ajax({
        type: "GET",
        url: '../db/index.json',
        success: function (data) {
            data.forEach(item => {
                var str = `<div class="grid-item"><img src="${item.preview}" alt="" /></div>`;
                $('.grid').append(str);
            })
        }
    })
}