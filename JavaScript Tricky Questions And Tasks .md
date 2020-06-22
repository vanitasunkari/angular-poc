
# What is the output of the below code.?? (Uses closures concept)

```
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```
- Gives 4, undefined (4 times)


```
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}
```
- Now prints 0, 10; 1, 12; ............

https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703

---

# Find the sum of the digits
> I have a alpha-numeric string `var str = 'abc1234def-567-123';` and would like to get the sum of the numbers that are present in the string. Ex: 1234+(-567)+(-123) so on.

> https://jsbin.com/luparaz/edit?js,console

# Find the best alogorithm / less complexity solution for below.
> I have a array `var arr = [5,6,7,1,2,3,4];` which is sorted but is rotated. I need to find the least number in the array (With Least Complexity).

> https://jsbin.com/xatotas/edit?js,console

# Find the output of the code.
> https://jsbin.com/wadayi/edit?js,console,output


# TODO List Scenario Questions
> I want to design a todo list in angular how would you do.

### What components would you require.?
ListComponent 
	<li>
		<input type	=="checkbox"/>
		<span>My Todo</span>
	</li>


ToDoComponent
	- Fetch todo List - GET abc.com/list - Returns Full list of TO-DOs | For one record - bc.com/list ? id=123
	- loop the list componentn for each todo list

CreateListComponent
	- Display Form - Collecitng the todo description
		- Validation

		Description: 
		Start Date: 
		Repeat: []
			Repeat Freq: <select
			End Date: <input 
		Submit:

	- Populate in main todo list
		- API for saving the to-do - PUT abc.com/list

### DB table design?

	TODO_TABLE:
  
	id | user_id | description | completed (ENUM) | status | created_date | start_date | end_date | repeat_feq (1hr|1day|1week|1month)

### Find the users which have not completed atleast 50% of their tasks from the DB table above.

SELECT t.*, count(t.completed) FROM TODO_TABLE t
	HAVING 
  GROUP BY user_id;

SELECT * FROM
(
SELECT user_id,count(t.completed) as completed_count, t.completed FROM TODO_TABLE t
	HAVING end_date!=NULL && end_date < now()
	GROUP BY user_id, completed;
) as t
WHERE t.


user_id | completed | completed
1 | 10
1 | 12
2 | 3
2 | 5

    -- X --

# Design an Elevator
https://jsbin.com/sagurun/1/edit?html,js,console,output





