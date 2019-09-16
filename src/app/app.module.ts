import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { UserResolveService } from './user-resolve.service';
import { FooterComponent } from './footer/footer.component';
import { P2PService } from './service/p2p.service';
import { CardNumberDirective } from './service/cardNumber.directive';
import { UpperCaseDirective } from './service/upperCase.directive';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserComponent,
    FooterComponent,
    CardNumberDirective,
    UpperCaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, UserResolveService, P2PService],
  bootstrap: [AppComponent]
})
export class AppModule { }
