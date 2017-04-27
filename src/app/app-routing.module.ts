import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, 
          data: { 
            title: 'Home | Scotchiversal', 
            meta: {
                description: 'Home Description' 
            }
        }
      },
      { path: 'about', component: AboutComponent, 
          data: { 
            title: 'Home | Scotchiversal', 
            meta: {
                description: 'Home Description' 
            }
        }
      },
      { path: 'contact', component: ContactComponent, 
          data: { 
            title: 'Home | Scotchiversal', 
            meta: {
                description: 'Home Description' 
            }
        }
      } 
    ])
  ],
})
export class AppRoutingModule { }
