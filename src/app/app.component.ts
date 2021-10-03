import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(
      (item) => console.log(`resulting item .. ${item})`),
      (err) => console.error(`error occurred ${err}`),
      () => console.log('complete')
    );
  }
}
