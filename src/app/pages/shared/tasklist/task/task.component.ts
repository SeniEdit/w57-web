import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  hidden = false; // TODO: Refresh tasklist after approval or rejection instead of hiding this

  approveTask() {
    const approved = confirm(`Approve ${this.task.title}?`);
    if (approved === true) {
      this.hidden = true;
      console.log(`${this.task.title} approved!`);
    }
  }

  rejectTask() {
    const rejected = confirm(`Reject ${this.task.title}?`);
    if (rejected === true) {
      this.hidden = true;
      console.log(`${this.task.title} rejected!`);
    }
  }
}
