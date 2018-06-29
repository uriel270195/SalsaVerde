import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { HomePage } from '../home/home';
 
import { DevicesPage } from '../devices/devices';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
 
export class AuthPage {
 
    authForm: FormGroup;
 
    constructor(public nav: NavController, public navParams: NavParams, 
                public formBuilder: FormBuilder) {
 
        this.nav = nav;
 
        this.authForm = formBuilder.group({
            username: ['uriel_270195@hotmail.com', Validators.compose([Validators.required])],
            password: ['Irvin1.', Validators.compose([Validators.required])],
            server: ['my524.geotab.com', Validators.compose([Validators.required])],
            database:['GMRS',Validators.compose([Validators.required])]
        });
    }
 
    onSubmit(value: any): void { 
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            window.localStorage.setItem('server', value.server);
            window.localStorage.setItem('database', value.database);
            this.nav.push(DevicesPage);
        }
        else{
            this.nav.push(HomePage);
        }
    }   
}