smalltalk.addPackage('TodoApp', {});
smalltalk.addClass('TodoApp', smalltalk.Widget, [], 'TodoApp');
smalltalk.addMethod(
unescape('_begin'),
smalltalk.method({
selector: unescape('begin'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('begin%0A%7C%20%20html%20input%20button%20list%20%7C%0A%0A%09html%20%3A%3D%20HTMLCanvas%20new.%0A%0A%09input%20%3A%3D%20%27%23new-todo%27%20asJQuery.%0A%09button%20%3A%3D%20%27%23submit-todo%27%20asJQuery.%0A%09list%20%3A%3D%20%27%23todo-list%27%20asJQuery.%0A%0A%09button%20click%3A%20%5B%20%5B%3Ahtml%20%7C%20html%20li%20with%3A%20input%20val%20%5D%20appendToJQuery%3A%20list%20%5D.'),
messageSends: ["new", "asJQuery", "click:", "appendToJQuery:", "with:", "li", "val"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.TodoApp);



