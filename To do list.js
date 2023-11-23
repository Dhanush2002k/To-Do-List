let tasks = [];
let selectedTaskIndex = -1;

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `<span>${task.text}</span>
                        <button onclick="editTask(${index})">Edit</button>
                        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompletion(${index})">`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const taskInput = document.getElementById('taskInput');
    const updateBtn = document.getElementById('updateBtn');
    selectedTaskIndex = index;

    taskInput.value = tasks[index].text;
    updateBtn.style.display = 'inline';
}

function updateTask() {
    const taskInput = document.getElementById('taskInput');
    const updateBtn = document.getElementById('updateBtn');

    tasks[selectedTaskIndex].text = taskInput.value.trim();
    taskInput.value = '';
    updateBtn.style.display = 'none';
    selectedTaskIndex = -1;

    renderTasks();
}

function deleteTask() {
    if (selectedTaskIndex !== -1) {
        tasks.splice(selectedTaskIndex, 1);
        selectedTaskIndex = -1;
        renderTasks();
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks() {
    const filter = document.getElementById('filter').value;

    if (filter === 'all') {
        renderTasks();
    } else if (filter === 'completed') {
        const completedTasks = tasks.filter(task => task.completed);
        renderFilteredTasks(completedTasks);
    } else if (filter === 'uncompleted') {
        const uncompletedTasks = tasks.filter(task => !task.completed);
        renderFilteredTasks(uncompletedTasks);
    }
}

function renderFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `<span>${task.text}</span>
                        <button onclick="editTask(${index})">Edit</button>
                        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompletion(${index})">`;
        taskList.appendChild(li);
    });
}

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const statusInput = document.getElementById('status');
        const taskText = taskInput.value.trim();
        const taskStatus = statusInput.value;

        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false, status: taskStatus });
            taskInput.value = '';
            renderTasks();
        }
    }

    function editTask(index) {
        const taskInput = document.getElementById('taskInput');
        const statusInput = document.getElementById('status');
        const updateBtn = document.getElementById('updateBtn');
        selectedTaskIndex = index;

        taskInput.value = tasks[index].text;
        statusInput.value = tasks[index].status;
        updateBtn.style.display = 'inline';
    }

    function updateTask() {
        const taskInput = document.getElementById('taskInput');
        const statusInput = document.getElementById('status');
        const updateBtn = document.getElementById('updateBtn');

        tasks[selectedTaskIndex].text = taskInput.value.trim();
        tasks[selectedTaskIndex].status = statusInput.value;
        taskInput.value = '';
        statusInput.value = 'notStarted'; // Reset status to "Not Started Yet"
        updateBtn.style.display = 'none';
        selectedTaskIndex = -1;

        renderTasks();
    }
