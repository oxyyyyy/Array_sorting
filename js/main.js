var array = [];
var column_number = $(".column").length;

$('.column').each(function(i) {
  $(this).attr('id', 'column_' + i);
});

function giveHeight(i) {
  $("#column_" + i).css({
    height: array[i]
  });
};

$("#create_btn").click(function() {
  for (var i = 0; i < column_number; i++) {
    array[i] = Math.floor((Math.random() * 600) + 1);
    giveHeight(i);
  };
});

$("#sort_btn").click(function() {
  function compareNumeric(a, b) {
    return a - b;
  };
  array.sort(compareNumeric);
  for (var i = 0; i < column_number; i++) {
    giveHeight(i);
  }
});
