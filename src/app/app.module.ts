import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoPage } from './page/todo/todo.page';
import { CompletedPage } from './page/completed/completed.page';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TodoPage,
  },
  {
    path: 'completed',
    component: CompletedPage,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletedPage,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
