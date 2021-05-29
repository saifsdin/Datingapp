import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService : AccountService, private toastr: ToastrService)
  {

  }
  canActivate(): Observable<boolean> {
     var retval=false;
        return this.accountService.currentUser$.pipe(
          map(user => {

            if(user) 
            {
            retval=true;
           }
          else
          {
            this.toastr.error('You shall not pass!');
            retval=false;
          }
        return retval;
          })
        )
  }
  
}
