import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class UserResolveService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      // route.params
      return Observable.of({
      name: 'John'
    });
  }
}
