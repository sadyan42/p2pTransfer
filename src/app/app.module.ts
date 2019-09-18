import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FooterComponent } from './footer/footer.component';
import { P2PService } from './service/p2p.service';
import { CardNumberDirective } from './service/cardNumber.directive';
import { UpperCaseDirective } from './service/upperCase.directive';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
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
  providers: [P2PService],
  bootstrap: [AppComponent]
})
export class AppModule { }
