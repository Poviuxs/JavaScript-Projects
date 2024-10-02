/* This function retrieves the tasks from local storage */
function get_todos() {
    /* This creates an array to store tasks */
    var todos = new Array();
    /* This pulls the tasks that were saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    
    /* If there are saved tasks, parse them into the todos array */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    
    return todos;
}

/* This function adds the inputted task to the get_todos function array */
function add() {
    /* This takes the inputted task and creates a variable for it */
    var task = document.getElementById('task').value;
    var todos = get_todos();
    
    /* This adds a new task to the end of the array */
    todos.push(task);
    
    /* This converts the task input to a JSON string and saves it */
    localStorage.setItem('todo', JSON.stringify(todos));
    
    /* Clear the input field */
    document.getElementById("task").value = "";
    
    /* Show the updated list of tasks */
    show();
    
    return false; // Prevent the default form submission
}

/* This function keeps the tasks permanently displayed on the screen */
function show() {
    /* This retrieves the tasks that were saved */
    var todos = get_todos();
    
    /* This sets up each task as an unordered list */
    var html = '<ul>';
    
    /* This displays each task in the order they were input */
    for (var i = 0; i < todos.length; i++) {
        /* This also displays the task as a list item and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    
    html += '</ul>';
    
    /* This displays the tasks in the todos div */
    document.getElementById('todos').innerHTML = html;

    /* Add event listeners to the remove buttons */
    var removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            remove(button.id);
        });
    });
}

/* This function removes a task based on the button clicked */
function remove(id) {
    var todos = get_todos();
    /* Remove the task from the array */
    todos.splice(id, 1);
    
    /* Update local storage */
    localStorage.setItem('todo', JSON.stringify(todos));
    
    /* Show the updated list of tasks */
    show();
}

/* This displays the inputted task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);

/* This will keep the inputs displayed permanently on the screen */
show();
