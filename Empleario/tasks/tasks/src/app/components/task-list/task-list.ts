import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks-service';
import { Task } from '../../model/Task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks: Task[] = [];
  editing: boolean = false;
  editId: number | null = null;
  taskTitle: string = '';
  taskDesc: string = '';
taskDetail: string = '';

  constructor(private tasksService: TasksService) {
    this.getTasks();
    console.log(this.tasks);
  }

  getTasks(): Task[] {
    this.tasks = this.tasksService.allTasks();
    return this.tasks;
  }
  getTaskById(id: number): Task | undefined {
    return this.tasksService.getTaskById(id);
  }

  addTask(title: string, description: string, taskDetail: string): void {
    this.tasksService.addTask(title, description, taskDetail);
  }
  startEdit(task: Task): void {
    this.editing = true;
    this.editId = task.id;
    this.taskTitle = task.title;
    this.taskDesc = task.description;
  }

  saveEdit() {
    if (this.editId !== null) {
      this.tasksService.editTask(this.editId, this.taskTitle, this.taskDesc);
      this.getTasks();
      this.editing = false;
      this.editId = null;
    }
  }

  cancelEdit() {
    this.editing = false;
    this.editId = null;
  }
  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
    this.getTasks();
  }

}

