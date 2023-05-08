// //As a user, I should be able to type a task into the input field.
// //As a user, I should be able to click some form of a submit button.
// //As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// //A delete function that will remove tasks from your list
// //A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks

/* 
    ! TRUTHYNESS TANGENT
      If a datatype is generally considered true or false
      this is NOT consistent between languages

      (!) the BANG operator
      =>  Takes the Inverse of the datatype as a boolean
      =>  !false => true; !true => false

      (!!) the double BANG operator
      =>  Turns things that are TRUTHY into true and FALSEY into false

      !!"hello" => true
      !!""          => false
      !!500         => true
      !!0           => false
      !![]          => true
      !!{}          => true
      !!undefined   => false
      !!null        => false

      in JS, your conditionals will evaluate truthy and falsey as true and false
  */

// ! GLOBAL VARIABLES
const form = document.querySelector("form")
const tasklist = document.querySelector("#tasks")
// const tasklist = document.getElementById("tasks")

const createTask = (task, priority) => {
	const li = document.createElement("li")
	const del = document.createElement("button")
	del.textContent = "X"
	li.textContent = task

  // li.style = "color:red"
  // if (priority === "high") {
  //   li.style.color = "red"
  // } else if (priority === "med") {
  //   li.style.color = "yellow"
  // } else if (priority === "low") {
  //   li.style.color = "green"
  // }
  li.style.color = priority
	del.addEventListener("click", handleRemove)
	li.append(del)
	tasklist.append(li)
}

// * EVENT HANDLERS
const handleRemove = (e) => {
	e.target.parentElement.remove()
}

const handleSubmit = (e) => {
	e.preventDefault()
	// document.querySelector("#description").value
	const newTask = e.target.description.value
  const newPriority = e.target.priority.value
	// if (!!newTask) {
	// is the same as..
	if (newTask) {
		createTask(newTask, newPriority)
		e.target.description.value = ""
	}
}

form.addEventListener("submit", handleSubmit)
