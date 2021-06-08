import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  message:string = "The value has come from child(service component) to parent component via click event  ";

  @Output() messageEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }
  sendMsg(){
    this.messageEvent.emit(this.message);
  }

}
