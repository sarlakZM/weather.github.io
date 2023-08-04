import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslateComponent } from '../translate/translate.component';
import { APP_TITLE } from '../../constants/app.constant';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateComponent,
  ],
})
export class NabvarComponent {
  app_title = APP_TITLE;
}
