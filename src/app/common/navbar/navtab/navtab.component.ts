import { Component, Input } from '@angular/core';
import { Router }    from '@angular/router';
import { Tab } from '../../../model/tab';

@Component({
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.css']
})
export class NavtabComponent {
  @Input() tab: Tab;
  @Input() title: string;
}
