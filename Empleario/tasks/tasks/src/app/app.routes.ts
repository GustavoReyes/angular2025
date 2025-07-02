import { Routes } from '@angular/router';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { TaskDetail } from './components/task-detail/task-detail';

export const routes: Routes = [
  { path: 'tasks', component: TaskList },
  { path: 'tasks/new', component: TaskForm },
  { path: 'tasks/edit/:id', component: TaskForm },
  { path: 'tasks/detail/:id', component: TaskDetail },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
