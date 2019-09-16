import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pluck';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
    // this.route.params.pluck('userId').subscribe(userId => {
    //   console.log(userId);
    // });

    this.route.queryParams.subscribe(params => {
      console.log(params);
    });

    this.route.data.subscribe(data => {
      console.log(data);
    });

    // this.user$ = this.route.data.pluck('user')
    // {{user$ | async}}

    // this.router.navigate(['user', userId]);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
         console.log(event);
      }
    });
  }

  ngOnInit() {
  }

}
