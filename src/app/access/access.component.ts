import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styles: []
})
export class AccessComponent {
    constructor(private router: Router) { }

    // Método para navegar para a tela de novo colaborador
    navigateToNewCollaborator(): void {
        this.router.navigate(['/access/new']);
    }
} 