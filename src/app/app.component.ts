import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';
import { Container, Engine, MoveDirection, OutMode } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";
import { NgParticlesModule } from 'ng-particles';
import { MatButtonModule } from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinkListComponent, NgParticlesModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CookieService]
})
export class AppComponent implements OnInit{
  title = 'dhbw-semester';
  
  constructor(private elementRef: ElementRef, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.isDarkmode = this.cookieService.get('darkmode') === 'true';
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = this.isDarkmode ? this.darkmodeColor : this.lightmodeColor;
  }

  darkmodeColor = "#5d686e"
  lightmodeColor = "#f0f0f0"

  isDarkmode = false;
  
  id = "tsparticles";


  particlesOptions = {
    background: {
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#E30613",
      },
      links: {
        color: "#E30613",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2.75,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 120,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadSlim(engine);
  }

  toggleDarkMode(){
    this.isDarkmode = !this.isDarkmode;
    this.cookieService.set('darkmode', this.isDarkmode.toString());
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = this.isDarkmode ? this.darkmodeColor : this.lightmodeColor;
  }
}
