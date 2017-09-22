
var tasks = ["Task 1", "Task 2"];

function test()
{
$.each(tasks, function()
{
    $('#list').append('<li class="tasks_list">'+this + '</li>');
});

 /*   for(var i in tasks)
        {
            var li_creation = document.createElement("li");
            li_creation.innerHTML = tasks[i];
            list.appendChild(li_creation);
        }   */
}
window.onload=test();

   $(document).on('click', '.tasks_list', function ()
{
 $(this).toggleClass('cross');
});

function input()
{
var data = $("#input_new_task").val();
//alert(data);
tasks.push(data);
$("#list").empty();
test();
//console.log(tasks);
}