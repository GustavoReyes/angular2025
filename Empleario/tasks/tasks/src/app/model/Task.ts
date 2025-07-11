export class Task {
  id: number;
  title: string;
  description: string;
  taskDetail?: string;

  constructor(id: number, title: string, description: string, taskDetail?: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.taskDetail = taskDetail;
  }
}
