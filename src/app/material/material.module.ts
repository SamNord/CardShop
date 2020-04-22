import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

const MaterialAngular =  [
  MatBadgeModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialAngular,
    MatButtonModule
  ],
  exports : [MaterialAngular]
})
export class MaterialModule { }
