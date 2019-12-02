import { Component, OnInit } from '@angular/core';
import {Resource} from '../resource';
import {RESOURCES} from '../mock-resources';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources = RESOURCES;
  constructor() { }

  ngOnInit() {
  }

}
