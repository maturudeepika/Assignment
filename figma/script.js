// Sample data in JSON format
let tasks = [
    { id: 1, title: "Task 1", priority: "high", status: "Completed" },
    { id: 2, title: "Task 2", priority: "medium", status: "Pending" },
  ];
  
  let currentTab = "Pending";
  
  // Function to switch between tabs
  function changeTab(tab) {
    currentTab = tab;
    renderTasks();
  }
  
  // Function to filter tasks based on priority
  function filterTasks() {
    const filter = document.getElementById("filterSelect").value;
    const filteredTasks = filter === "all" ? tasks : tasks.filter(task => task.priority === filter);
    renderTasks(filteredTasks);
  }
  
  // Function to search tasks based on title
  function searchTasks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchInput));
    renderTasks(filteredTasks);
  }
  
  // Function to add a new task
  function addTask() {
    const newTaskTitle = document.getElementById("newTaskInput").value.trim();
    const newTaskPriority = document.getElementById("newTaskPriority").value;
  
    if (newTaskTitle !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        priority: newTaskPriority,
        status: currentTab,
      };
  
      tasks.push(newTask);
      renderTasks();
      clearNewTaskInputs();
    } else {
      alert("Please enter a valid task title.");
    }
  }
  
  // Function to clear new task inputs
  function clearNewTaskInputs() {
    document.getElementById("newTaskInput").value = "";
    document.getElementById("newTaskPriority").value = "medium";
  }
  
  // Function to render tasks based on current tab and filters
  function renderTasks(filteredTasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous content
  
    const tasksToRender = filteredTasks || tasks.filter(task => task.status === currentTab);
  
    tasksToRender.forEach(task => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
        <strong>${task.title}</strong> - Priority: ${task.priority} - Status: ${task.status}
      `;
      taskList.appendChild(taskElement);
    });
  }
  

  // Sample data in JSON format

  function renderTasks(filteredTasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear previous content
  
    const tasksToRender = filteredTasks || tasks.filter(task => task.status === currentTab);
  
    tasksToRender.forEach(task => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <div class="task-info">
          <strong>Priority:</strong> ${task.priority} 
          <strong>Status:</strong> ${task.status}
        </div>
      `;
      taskList.appendChild(taskElement);
    });
  }
  
  // ... (unchanged code)
  
  
  // Initial render on page load
  renderTasks();
  