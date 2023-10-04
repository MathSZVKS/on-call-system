import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
	const router = inject(Router);

	if (localStorage.getItem('token')) {
		return true;
	}

	return router.parseUrl('auth/login');
};
