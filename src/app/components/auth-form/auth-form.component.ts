import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  constructor(
    private toaster : ToastrService
  ) {
  }
  Submit(form: any) {
    if (form.valid) {
      this.toaster.success('You are successfully logged in');
    }
  }
}
