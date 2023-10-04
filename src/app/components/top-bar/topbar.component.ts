import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from '../../services/theme-service/theme-service.service';
import { Router } from '@angular/router';
import { MensagensServiceService } from 'src/app/services/mensages-service/mensagens-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(
    private themeService: ThemeService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private mensagensServiceService: MensagensServiceService
  ) {
    this.matIconRegistry.addSvgIcon(
      'bell',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/image/top-bar/bell.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'chat',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/image/top-bar/chat.svg')
    );
  }

  showBlur: boolean = false;
  lastDivShow: string = '';
  receivedMessages = this.mensagensServiceService.getMensages();

  ngOnInit() {
    this.toggleTheme('green');
  }

  toggleTheme(theme: string) {
    this.themeService.toggleTheme(theme);
  }

  redirectAndHideMenu(page: string, divToHide: string) {
    this.router.navigate([`/${page}`]);
    this.displayOrHideMenu(divToHide);
  }

  displayOrHideMenu(divId: string) {
    let displayDiv = document.getElementById(divId);
    let lastDiv = document.getElementById(this.lastDivShow);

    if (displayDiv) {
      if (displayDiv.style.display === 'none' || displayDiv.style.display === '') {
        displayDiv.style.display = 'block';

        if (lastDiv == displayDiv) {
          lastDiv.style.display = 'block';
        }

        if (lastDiv && lastDiv != displayDiv) {
          lastDiv.style.display = 'none';
        }

        this.lastDivShow = divId;
        this.showBlur = true;
      } else {
        displayDiv.style.display = 'none';
        this.showBlur = false;
      }
    }
  }
}
