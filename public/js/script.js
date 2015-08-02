$(function(){
  $.get( "http://localhost:8080/products", function( data ) {
  console.log(data);
  });

  $("#productForm").submit(function(event){
    event.preventDefault();
    var dataArray = $(this).serializeArray();

    var data = {};

    dataArray.forEach(function(x){
      data[x.name] = x.value;
    });

    console.log('form was submitted', data);
    $.post(this.action, JSON.stringify(data), function(data, textStatus, jqXHR){
      console.log('everything is good');
    });
  });
});