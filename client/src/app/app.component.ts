import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';

constructor(private http:HttpClient){}
users:any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
  
    this.http.get('https://localhost:5001/api/Users').subscribe(response => {

      this.users=response;
  }, error => {
      console.log(error);
  })
  }

}
