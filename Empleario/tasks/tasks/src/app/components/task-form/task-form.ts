import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks-service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskForm {
  editing: boolean = false;
  taskTitle: string = '';
  taskDesc: string = '';
  taskDetail: string = '';
  editId: number | null = null;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Si hay un id en la ruta, es edición
    const id = this.route.snapshot.params['id'];
    if (id) {
      const task = this.tasksService.getTaskById(+id);
      if (task) {
        this.editing = true;
        this.editId = task.id;
        this.taskTitle = task.title;
        this.taskDesc = task.description;
        this.taskDetail = task.taskDetail || '';
      }
    }
  }

  save() {
    if (this.editing && this.editId !== null) {
      this.tasksService.editTask(this.editId, this.taskTitle, this.taskDesc, this.taskDetail);
    } else {
      this.tasksService.addTask(this.taskTitle, this.taskDesc, this.taskDetail);
    }
    this.router.navigate(['/tasks']);
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}
