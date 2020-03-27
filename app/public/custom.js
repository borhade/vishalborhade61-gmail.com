$('#add_user_record').submit(function(e){
   e.preventDefault();
   $.ajax({
        url:'add_record_to_db',
        type:'POST',
        data:$(this).serialize()
   }).done(function(res){
      console.log(res);
   });

});



$(document).on('click','.delete_record',function(){
  var record_delete_id = $(this).attr('data-id');
  $.ajax({
      url:'crud/'+record_delete_id,
      type:'DELETE'
    }).done(function(res){
       console.log(res);
  });
});
