import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasks: Task[] = [
    new Task(1, 'Tarea 1', 'Descripción 1', 'Información adicional 1'),
    new Task(2, 'Tarea 2', 'Descripción 2', 'Información adicional 2'),
    new Task(3, 'Tarea 3', 'Descripción 3', 'Información adicional 3'),
    new Task(4, 'Tarea 4', 'Descripción 4', 'Información adicional 4')
  ];

  //METODOS

  allTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(title: string, description: string, taskDetail?: string) {
    const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    this.tasks.push({ id: newId, title, description, taskDetail});
  }

  editTask(id: number, title: string, description: string, taskDetail?: string) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = title;
      task.description = description;
      task.taskDetail = taskDetail;
    }
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
