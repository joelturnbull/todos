smalltalk.addPackage('TodoApp', {});
smalltalk.addClass('TodoApp', smalltalk.Widget, [], 'TodoApp');
smalltalk.addMethod(
'_begin',
smalltalk.method({
selector: 'begin',
fn: function (){
var self=this;
var html=nil;
var input=nil;
var button=nil;
var list=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_new", []));
(input=smalltalk.send(unescape("%23new-todo"), "_asJQuery", []));
(button=smalltalk.send(unescape("%23submit-todo"), "_asJQuery", []));
(list=smalltalk.send(unescape("%23todo-list"), "_asJQuery", []));
smalltalk.send(button, "_click_", [(function(){return smalltalk.send((function(html){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [smalltalk.send(input, "_val", [])]);}), "_appendToJQuery_", [list]);})]);
return self;}
}),
smalltalk.TodoApp);



