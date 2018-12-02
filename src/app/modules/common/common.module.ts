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
  declarations: [AuthformComponent, CardComponent, InputComponent],
  exports: [AuthformComponent, CardComponent],
})
export class CommonModule { }
