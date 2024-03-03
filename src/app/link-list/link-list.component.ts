import { Component, Input } from '@angular/core';
import { Link } from '../linkdata/link';
import { LinkdataService } from '../linkdata/linkdata.service';
import { MatButtonModule } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss',
  providers: [CookieService]
})
export class LinkListComponent implements OnInit{

  @Input()
  filename?: string;

  @Input()
  caption?: String;

  collapsed: boolean = false;

  @Input()
  darkmode: boolean = false;
  
  links: Link[] = [
    { url: '', text: 'course1' },
    { url: '', text: 'course2' },
    { url: '', text: 'course3' }
  ];

  constructor(private linkdataService: LinkdataService, private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.filename) {
      this.linkdataService.getLinks(this.filename).subscribe(data => this.links = data)
    }
    if(this.filename) {
      this.collapsed = this.cookieService.get(this.filename) === 'true';
    }
    
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this.cookieService.set(this.filename!, this.collapsed.toString(), {expires: 365});
  }
}
