import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// libs
import { environment } from '@notadd/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/page.module'
@NgModule({
  imports: [CoreModule, SharedModule, PagesModule, RouterModule.forRoot([], {
    useHash: true
  })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
