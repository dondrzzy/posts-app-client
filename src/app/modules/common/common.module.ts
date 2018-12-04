import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
} from '@angular/material';
import { AuthformComponent } from './../../components/common/authform/authform.component';
import { CardComponent } from '../../components/common/card/card.component';
import { InputComponent } from './../../components/common/input/input.component';
import { TextareaComponent } from './../../components/common/textarea/textarea.component';
import { PostformComponent } from './../../components/common/postform/postform.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [
    AuthformComponent,
    CardComponent,
    InputComponent,
    TextareaComponent,
    PostformComponent,
  ],
  exports: [
    AuthformComponent,
    CardComponent,
    PostformComponent,
  ],
})
export class CommonModule { }
