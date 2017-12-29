import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  title = 'Task list';
  tasks = [
    {
      "id":"1",
      "title":"Keukenvloer",
      "desc":"Keuken- en woonkamervloer vegen"
    },
    {
      "id":"2",
      "title":"Woonkamer",
      "desc":"Meubels afvegen met een vochtig doekje"
    },
    {
      "id":"3",
      "title":"Douches",
      "desc":"Douches schoonmaken"
    }
  ];
}
