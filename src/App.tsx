import React from 'react';
import TaskList from './components/TaskList';
import { Task } from './types';

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete React project',
    description: 'Finish the initial setup of the Task Management Dashboard.',
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'Grocery Shopping',
    description: 'Buy groceries for the week.',
    status: 'pending',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskList tasks={sampleTasks} />
    </div>
  );
};

export default App;
