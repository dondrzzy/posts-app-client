import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from './modules/common/common.module';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';
import { Routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostsComponent } from './components/posts/posts.component';
// import { PostformComponent } from './components/common/postform/postform.component';
// import { TextareaComponent } from './components/common/textarea/textarea.component';
// import { InputComponent } from './components/common/input/input.component';
// import { CardComponent } from './components/common/card/card.component';
// import { AuthformComponent } from './components/common/authform/authform.component';

CommonModule

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostsComponent,
    // PostformComponent,
    // TextareaComponent,
    // InputComponent,
    // CardComponent,
    // AuthformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    Routing,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
