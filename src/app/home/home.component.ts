import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  goSignIn(){
    this.router.navigate(['signin']);
  }

  demo(){
    var centercontent = document.getElementById('center-content');
    
      setTimeout(function(){ centercontent.innerHTML = 'Scrivee'; }, 2000);
  }
}

