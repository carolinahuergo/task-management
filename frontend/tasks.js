document.addEventListener("DOMContentLoaded", async function () {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = new bootstrap.Modal(document.getElementById("taskModal"));
    const taskForm = document.getElementById("taskForm");
    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescriptionInput = document.getElementById("taskDescription");

    const searchForm = document.getElementById("taskSearchForm");
    const searchTitleInput = document.getElementById("searchTitle");
    const searchStatusInput = document.getElementById("searchStatus");
    const clearFiltersBtn = document.getElementById("clearFilters");

    async function updateTaskList(filters = {}) {
        const tasks = await fetchTasks(filters);
        renderTasks(tasks);
    }

    // Fetch tasks on load
    await updateTaskList();

    // Open modal
    addTaskBtn.addEventListener("click", () => taskModal.show());

    // Handle form submission
    taskForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        if (title) {
            await createTask(title, description);
            taskTitleInput.value = "";
            taskDescriptionInput.value = "";
            taskModal.hide();
            updateTaskList();
        }
    });

    // Handle task deletion
    document.addEventListener("click", async function (event) {
        if (event.target.classList.contains("delete-task")) {
            const taskId = event.target.getAttribute("data-id");
            if (confirm("Are you sure you want to delete this task?")) {
                await deleteTask(taskId);
                updateTaskList();
            }
        }
    });

    // Handle search form submission
    searchForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const title = searchTitleInput.value.trim();
        const completed = searchStatusInput.value !== "" ? searchStatusInput.value : null;
        updateTaskList({ title, completed });
    });

    // Handle clear filters button
    clearFiltersBtn.addEventListener("click", function () {
        clearFilters();
        updateTaskList();
    });
});
