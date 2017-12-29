import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { AppliComponent } from './appli/appli.component';
import { LicenseComponent } from './appli/license/license.component';
import { MaintComponent } from './appli/maint/maint.component';
import { CustomComponent } from './appli/custom/custom.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { LicenseuComponent } from './appli/license/licenseu/licenseu.component';

const appRoutes: Routes= [
  { path: 'general', component: GeneralComponent },
  { path: 'appli', component: AppliComponent, children: [
      { path: 'license', component: LicenseComponent, children: [
          { path: 'licenseu/:id', component: LicenseuComponent},
        ]
      },
      { path: 'maintenance', component: MaintComponent},
      { path: 'customization', component: CustomComponent}
    ] 
  },
  { path: '', component: GeneralComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    AppliComponent,
    LicenseComponent,
    MaintComponent,
    CustomComponent,
    TopmenuComponent,
    LicenseuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
