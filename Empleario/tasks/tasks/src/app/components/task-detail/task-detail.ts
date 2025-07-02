import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks-service';
import { Task } from '../../model/Task';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css'
})
export class TaskDetail {
 task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {
    const id = +this.route.snapshot.params['id'];
    this.task = this.tasksService.getTaskById(id);
    if (!this.task) {
      this.router.navigate(['/tasks']);
    }
  }
}
