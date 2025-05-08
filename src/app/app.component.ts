import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {
    title = 'Login Preview';
    isLoggedIn = false;

    constructor(private router: Router) { }

    ngOnInit() {
        // Monitora mudanças de rotas para determinar se o usuário está logado
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe((event) => {
            // Verifica se a rota atual não é a de login, esqueci senha ou reset de senha
            const publicRoutes = ['/', '/forgot-password', '/reset-password'];
            this.isLoggedIn = !publicRoutes.includes(event.url);
        });
    }
} 