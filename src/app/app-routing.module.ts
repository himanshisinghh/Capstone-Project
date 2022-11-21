import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { PaymentComponent } from './payment/payment.component';
import { RecieptComponent } from './reciept/reciept.component';



const routes: Routes = [

    ///path to redirect
{"path":"home",component:HomeComponent},
{"path":"aboutus",component:AboutusComponent},
{"path":"contactus",component:ContactusComponent},
{"path":"medicines",component:MedicinesComponent},
{"path":"details",component:DetailsComponent},
{"path":"payment",component:PaymentComponent},
{"path":"reciept",component:RecieptComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
