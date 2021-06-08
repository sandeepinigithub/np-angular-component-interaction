import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {WorksComponent} from './works/works.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'np-angular-component-interaction';
  // for @Input() Decorator
  name = 'The value has come from parent component to feature component i.e data is passed via template';

  // for @ViewChild() Decorator
  userData!: String;
  @ViewChild(WorksComponent) child:any;
  
  // for @Output and EventEmitter


  constructor(private cdr:ChangeDetectorRef){}

  ngAfterViewInit(){
    this.userData = this.child.data;
    this.cdr.detectChanges();
    console.log(this.userData);
    
  }
  
  
}
