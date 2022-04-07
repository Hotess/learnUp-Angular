import {Component, AfterViewInit} from '@angular/core';
import {TimerService} from "./timer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Maps';

  constructor(private timerService: TimerService) {
  }

  public attributes = {name: 'value1'};

  public onClick() {
    this.attributes = {name: 'value2'};
  }

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
