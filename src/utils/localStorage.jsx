const employees = [ 
  {
    "id": 1,
    "firstname": "Aarav",  // Added Indian first name
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Complete the report on project status.",
        "taskDate": "2025-01-21",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Attend the team meeting to discuss new goals.",
        "taskDate": "2025-01-22",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Resolve client issues reported in the ticket system.",
        "taskDate": "2025-01-23",
        "category": "Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstname": "Saanvi",  // Added Indian first name
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Update the project plan with new deadlines.",
        "taskDate": "2025-01-21",
        "category": "Planning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Implement the new feature requested by the client.",
        "taskDate": "2025-01-22",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Fix bugs in the last release of the product.",
        "taskDate": "2025-01-23",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Review the codebase and suggest improvements.",
        "taskDate": "2025-01-24",
        "category": "Code Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Vivaan",  // Added Indian first name
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Research the new tool for automation testing.",
        "taskDate": "2025-01-21",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Test the new feature in the staging environment.",
        "taskDate": "2025-01-22",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Create a testing plan for the upcoming release.",
        "taskDate": "2025-01-23",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Update test cases to align with the new project requirements.",
        "taskDate": "2025-01-24",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Isha",  // Added Indian first name
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Prepare financial summary for last quarter.",
        "taskDate": "2025-01-21",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Audit employee expense reports for accuracy.",
        "taskDate": "2025-01-22",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Update budget forecasts based on new data.",
        "taskDate": "2025-01-23",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Aadhya",  // Added Indian first name
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Analyze user feedback from the recent survey.",
        "taskDate": "2025-01-21",
        "category": "Analysis",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Prepare marketing materials for the new product launch.",
        "taskDate": "2025-01-22",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Create a social media campaign for upcoming event.",
        "taskDate": "2025-01-23",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Design new website layout based on client feedback.",
        "taskDate": "2025-01-24",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 4,
      "newTask": 3,
      "completed": 1,
      "failed": 0
    }
  }
];

  
  const admin = [{
    "id": 1,
    "email": "admin@rrr.com",
    "password": "123"
  }];
  
  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify (employees))
    localStorage.setItem('admin',JSON.stringify (admin))
  }
  export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
    
  }