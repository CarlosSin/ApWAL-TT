import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import KTComponents from '../metronic/core/index';
import KTLayout from '../metronic/app/layouts/demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ApWAL-prueba';
  ngAfterViewInit(): void {
    KTComponents.init();
    KTLayout.init();
  }
}
