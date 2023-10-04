import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: string = 'light';

  toggleTheme(theme: string) {
    this.currentTheme = this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }
}
