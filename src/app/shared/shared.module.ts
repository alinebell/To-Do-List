import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModule } from '../features/task/task.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GreenDirective } from './directives/green.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GreenDirective
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
