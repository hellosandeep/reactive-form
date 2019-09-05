import { Component } from '@angular/core';
/**
 * Import only If use form control
 */
import { FormControl } from '@angular/forms';
/**
 * Import only If use form group
 */
import { FormGroup } from '@angular/forms';
/**
 * Import only If use form group
 */
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';

  users: any = [];

  /**
   * Reactive form control WITHOUT group. uncomment below two line
   */

  // name: new FormControl(''),
  // address: new FormControl('')

  /**
   * Reactive form control WITH group. uncomment below two line
   */
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('')
  })

  constructor() {
  }


  getErrorMessage() {
    return this.profileForm.controls["email"].hasError('required') ? 'You must enter a value' :
      this.profileForm.controls["email"].hasError('email') ? 'Not a valid email' :
        '';
  }


  save() {

    /**
     * Get form control value  WITHOUT group
     * console.log(this.name.value, this.address.value)
     */

    /**
    * Get form control value  WITHOUT group
    * 
    */
    this.users.push(this.profileForm.value);
  }

}
