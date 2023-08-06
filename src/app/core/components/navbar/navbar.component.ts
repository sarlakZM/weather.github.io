import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { APP_TITLE_CONST } from '@weather/core';
import { TranslateComponent } from '../translate/translate.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateComponent,
  ],
})
export class NavbarComponent {
  app_title = APP_TITLE_CONST;
}
