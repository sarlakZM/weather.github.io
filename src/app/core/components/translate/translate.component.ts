import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

import { DEFAULT_LANGUAGE, LANGUAGES } from '../../constants/app.constant';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
  standalone: true,
  imports: [NgFor, MatFormFieldModule, MatSelectModule],
})
export class TranslateComponent {
  languages = LANGUAGES;
  selectedLanguage = DEFAULT_LANGUAGE;

  constructor(private translate: TranslateService) {
    // Register translation languages
    translate.addLangs([...this.languages]);
  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
  }
}
