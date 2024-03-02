import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';
import {
  MoveDirection, OutMode, Engine, ISourceOptions} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinkListComponent, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private readonly ngParticlesService: NgParticlesService) { }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      console.log("init", engine);

      await loadSlim(engine);
    });
  }
  title = 'dhbw-semester';

  id = "tsparticles";

  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 120,
    interactivity: {
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
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true
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

}
