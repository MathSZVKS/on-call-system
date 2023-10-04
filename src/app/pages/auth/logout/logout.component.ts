import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	template: '',
	styles: []
})
export class LogoutComponent {

	constructor(private router: Router) {
		localStorage.clear();
		this.router.navigate(['/auth/login']);
	}
}

