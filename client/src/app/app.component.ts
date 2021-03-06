import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';

constructor(private http:HttpClient,private accountService: AccountService){}
users:any;

  ngOnInit() {
    //this.getUsers();
    this.setCurrentUser()
  }

  setCurrentUser() {

    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountService.setCurrentUser(user);

  }

  // getUsers(){
  
  //   this.http.get('https://localhost:5001/api/Users').subscribe(response => {

  //     this.users=response;
  // }, error => {
  //     console.log(error);
  // })
  // }

}
