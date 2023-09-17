const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

export const fetchTasksFromAPI = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks from API");
  }
  return response.json();
};