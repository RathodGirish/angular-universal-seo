import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SharedModule } from './shared/shared.module';
import { MetadataModule } from 'ng2-metadata';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ 
    AppComponent, 
    XLargeDirective,

    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent 
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    MetadataModule.forRoot()
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
