import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  constructor(public i18n: I18nService) {}
}
