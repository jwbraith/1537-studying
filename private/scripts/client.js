$(document).ready(() => {
  $('#title').on('click', () => {
    $.ajax({
      url: '/json-GET',
      datatype: 'json',
      type: 'GET',
      success: function (data) {
        let levels = Object.keys(data);
        console.log(Object.keys(data)[1]);
        for (let i = 0; i < levels.length; i++) {
          $('#grid').append("<div class='gridItem level'>" + levels[i] + "</div>");
          $('#grid').append("<div class='gridItem cost'>" + data[i + 1] + "</div");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    })
  })
})