// add to do list script
var i=1;
$(document).on('click','.add-todo',function(){
var todoInputData=$(this).siblings('input').val();
var todoListData=`<div class="row-parent">
  <div class="list-row">
  <div class="list-num">`+i+`.</div>
  <div class="list-data">`+ todoInputData+`</div>
  <div class="check-todo"><i class="bi bi-check-circle-fill"></i></div>
  <div class="edit-todo"><i class="bi bi-pencil-square"></i></div>
  <div class="remove-todo"><i class="bi bi-trash-fill text-danger"></i></div>
  </div>
  <div class="list-error"></div></div>`;

if($.trim(todoInputData)=='')
{
$(this).parents('.todo-content').find('.error').text('You must enter something!');
}
else{
$(this).parents('.todo-content').find('.todo-list').append(todoListData);
i++
$(this).parents('.todo-content').find('.error').empty();
}
$(this).siblings('input').val('')
});

// add todo list on pressing Enter key 
$(document).keydown(function (event) { 
     if (event.which == '') { 
         event.preventDefault();
         $('.add-todo').click(); 
         
     } 
});


// remove todo list script
$(document).on('click','.remove-todo',function(){
 $(this).parent('.list-row').remove();
})

// edit todo list script
$(document).on('click','.edit-todo',function(){
 $(this).attr('class','update-todo');
 $(this).html('&#x2713;');
 var listText= $(this).parent('.list-row').find('.list-data').html();
 var listDataHeight=$(this).parent('.list-row').find('.list-data').innerHeight();
 $(this).parent('.list-row').find('.list-data').attr('class','update-data');

 if(listDataHeight>50){
  $(this).parent('.list-row').find('.update-data').html('<textarea style="height:'+listDataHeight+'px">'+listText+'</textarea>');
 }else{
  $(this).parent('.list-row').find('.update-data').html('<textarea style="height:'+listDataHeight+'px">'+listText+'</textarea>');
 }

});

//update todo script
$(document).on('click','.update-todo',function(){
 var listText= $(this).parent('.list-row').find('textarea').val();
 if($.trim(listText)=='')
  {
   $(this).parents('.row-parent').find('.list-error').text('You must enter something!');
  }else{
   $(this).attr('class','edit-todo');
   $(this).html('<i class="bi bi-pencil-square"></i>');
   $(this).parent('.list-row').find('.update-data').attr('class','list-data');
   var listText= $(this).parent('.list-row').find('.list-data').html(listText);
   $(this).parents('.row-parent').find('.list-error').empty();
}
});

// line through the  todo list script
$(document).on('click','.list-data',function(){
 $(this).toggleClass('line-through');
});