import { Component, Input } from '@angular/core';
import { Link } from '../linkdata/link';
import { LinkdataService } from '../linkdata/linkdata.service';
import { MatButtonModule } from '@angular/material/button';
import { OnInit } from '@angular/core';
import * as courselinks from '../../assets/courselinks.json';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss'
})
export class LinkListComponent implements OnInit{

  @Input()
  filename?: String;

  @Input()
  caption?: String;

  collapsed: boolean = false;
  
  links: Link[] = [
    { url: '', text: 'course1' },
    { url: '', text: 'course2' },
    { url: '', text: 'course3' }
  ];

  constructor(private linkdataService: LinkdataService, private http: HttpClient) { }


  ngOnInit(): void {
    if(this.filename) {
      //this.linkdataService.getLinks(this.filename).subscribe(data => this.links = data)
      this.linkdataService.getLocalLinks(this.filename).subscribe(data => this.links = data)
    }
    //console.log(courselinks);
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
  }
}
