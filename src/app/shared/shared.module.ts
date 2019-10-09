import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule { }
