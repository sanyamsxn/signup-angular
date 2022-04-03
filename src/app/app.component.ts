import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import {PassWordChecker} from './validators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  title = 'signup-page';
  
  constructor(private formbuilder : FormBuilder, private toastr: ToastrService){}

  ngOnInit(){
    this.registerForm = this.formbuilder.group({
      firstName: [" ", Validators.required],
      lastName: [" ", Validators.required],
      email: [" ", [Validators.required, Validators.email]],
      address: [" ", Validators.required],
      password: ["", [Validators.minLength(5)]],
      confirmPassword: ["", Validators.required],
      pinCode : [" ", Validators.required],
      accept : [ false, Validators.requiredTrue]
    }, {validators:PassWordChecker('password','confirmPassword')})
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      console.log("Here")
      this.toastr.error("Invalid Form");
    } else{
      console.log("Success");
      this.toastr.success("Submitted")
      this.registerForm.reset()
      this.submitted=false
    }
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset()
  }

  // get h():{ [key: any]: AbstractControl; }{
  //   return this.registerForm.controls;
  // }

}
  

