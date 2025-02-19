import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarOverviewExample } from "./menu/menu.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ToolbarOverviewExample, InicioComponent, LoginComponent, RodapeComponent]
})
export class AppComponent {
  title = 'LH Games';
}
