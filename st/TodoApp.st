Smalltalk current createPackage: 'TodoApp' properties: #{}!
Widget subclass: #TodoApp
	instanceVariableNames: ''
	category: 'TodoApp'!

!TodoApp methodsFor: 'not yet classified'!

begin
|  html input button list |

	html := HTMLCanvas new.

	input := '#new-todo' asJQuery.
	button := '#submit-todo' asJQuery.
	list := '#todo-list' asJQuery.

	button click: [ [:html | html li with: input val ] appendToJQuery: list ].
! !

