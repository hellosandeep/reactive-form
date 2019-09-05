import { Component } from '@angular/core';
/**
 * Import only If use form control
 */
import { FormControl } from '@angular/forms';
/**
 * Import only If use form group
 */
import { FormGroup } from '@angular/forms';

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
    address: new FormControl('')
  })

  constructor() {
  }

  save() {

    /**
     * Get form control value  WITHOUT group
     * console.log(this.name.value, this.address.value)
     */

    /**
    * Get form control value  WITHOUT group
    * console.log(this.profileForm.value)
    */
    console.log(this.profileForm.value)
    this.users.push(this.profileForm.value);
  }

}
