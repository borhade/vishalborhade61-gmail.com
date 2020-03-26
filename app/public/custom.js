$(document).on('click','.delete_record',function(){
  var record_delete_id = $(this).attr('data-id');
  $.ajax({
      url:'crud/'+record_delete_id,
      type:'DELETE'
    }).done(function(res){
       console.log(res);
  });
});
