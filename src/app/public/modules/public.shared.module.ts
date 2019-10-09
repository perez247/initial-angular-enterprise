import { NgModule } from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { PublicFullComponent } from '../layouts/public-full/public-full.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PublicFullComponent,
    WelcomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SharedModule,
    AboutComponent,
    HomeComponent,
    PublicFullComponent,
    WelcomeComponent
  ]
})

export class PublicSharedModule { }
