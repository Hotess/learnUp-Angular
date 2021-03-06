import {Component, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  public productFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    id: new FormControl(),
    categories: new FormControl([])
  })

  public onSubmit() {
    if (this.productFormGroup.invalid) {
      alert('THE FORM IS NOT VALID!');

      return;
    }

    console.log(this.productFormGroup.value);
  }

  public generateId() {
    this.productFormGroup.get('id').setValue(Math.random().toString(36).substring(2));
  }

  public onClick() {
    this.attributes = {name: 'value2'};
  }

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
