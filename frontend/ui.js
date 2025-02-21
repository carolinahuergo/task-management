function renderTasks(tasks) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="#">${task.id}</a></td>
            <td>${task.title}</td>
            <td>
                <span class="badge ${task.completed ? 'badge-success' : 'badge-danger'}">
                    ${task.completed ? "Completed" : "Incomplete"}
                </span>
            </td>
            <td><span class='delete-task' data-id='${task.id}'>&#10006;</span></td>
        `;
        taskList.appendChild(row);
    });
}

function clearFilters() {
    document.getElementById("searchTitle").value = "";
    document.getElementById("searchStatus").value = "";
}
