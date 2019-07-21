import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SyncNgService } from '../services/syncNg/sync-ng.service';

@Component({
  selector: 'app-register-by-email',
  templateUrl: './register-by-email.component.html',
  styleUrls: ['./register-by-email.component.css']
})
export class RegisterByEmailComponent implements OnInit {

  registerForm: FormGroup;
  emailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor(private builder: FormBuilder, private syncNg: SyncNgService) {
    this.registerForm = this.builder.group({
      email: this.emailControl
    });
  }

  ngOnInit() {
  }

  sendEmail() {
    console.log('test');
  }

}
