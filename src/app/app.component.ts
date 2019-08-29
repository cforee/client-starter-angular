import { Component } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter';
  status: any;

  constructor(public api: StatusService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.api.getData()
      .subscribe(
        res => { this.status = res; },
        err => { console.log(err) }
      );
  }

}
