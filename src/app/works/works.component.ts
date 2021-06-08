import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  data:String = "The value has come from child component(works component) to parent component. I have kept blank works template and used it in parent to make it child and passed its data in parent component then use it in parent template";

  constructor() { }

  ngOnInit(): void {
  }

}
