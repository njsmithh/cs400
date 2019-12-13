import { Component, OnInit } from '@angular/core';

import { Valid } from '../valid';
import { BackendService} from '../backend/backend.service';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})

export class ValidFormComponent implements OnInit {
  agree = ['Yes', 'Of course!'];
  model = new Valid(1, 'Taylor Alison Swift', this.agree[0]);
  submitted = false;

  public data: any;

  onSubmit() {
    console.log('Form completed.');
    this.apicall.newRetrieval().subscribe({
      next: data =>  { this.data = data; },
      error: err => console.log(err),
      complete: () => console.log('Backend call completed.')
    });
    this.submitted = true;
  }

  constructor(private apicall: BackendService) {
  }

  ngOnInit() {
  }

}
