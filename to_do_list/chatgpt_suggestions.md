src/
├── components/       # Reusable components
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── FilterButtons.jsx
├── features/         # Redux slice or feature-specific logic
│   └── todo/         # Grouping all To-Do feature-related files
│       ├── todoSlice.js
│       └── todoSelectors.js
├── pages/            # Page components if you plan to expand
│   └── HomePage.jsx
├── app/              # Redux store and app-level configurations
│   └── store.js
├── styles/           # CSS or SCSS files
│   └── main.css
├── utils/            # Utility functions/helpers
│   └── generateId.js
├── App.jsx           # Main App component
├── main.jsx          # Entry point for Vite
└── index.html        # HTML file


{
  tasks: [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Build a To-Do App", completed: true },
  ],
  filter: "ALL", // Options: "ALL", "COMPLETED", "PENDING"
}

Reducers
addTask: Adds a new task to the tasks array.
toggleComplete: Toggles the completed status of a task.
editTask: Updates the text of a task.
deleteTask: Removes a task by its id.
setFilter: Changes the filter value.

Actions
addTask(text)
toggleComplete(id)
editTask(id, newText)
deleteTask(id)
setFilter(filter)
