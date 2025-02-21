const API_URL = "http://localhost:8000/tasks/";

async function fetchTasks(filters = {}) {
    try {
        let url = new URL(API_URL);
        Object.keys(filters).forEach(key => {
            if (filters[key]) url.searchParams.append(key, filters[key]);
        });

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch tasks");

        return await response.json();
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}

async function createTask(title, description) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
        });

        if (!response.ok) throw new Error("Failed to add task");
        return await response.json();
    } catch (error) {
        console.error("Error adding task:", error);
    }
}

async function deleteTask(taskId) {
    try {
        const response = await fetch(`${API_URL}${taskId}/`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete task");
    } catch (error) {
        console.error("Error deleting task:", error);
    }
}
