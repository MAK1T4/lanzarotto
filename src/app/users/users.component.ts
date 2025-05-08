import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styles: []
})
export class UsersComponent {
    // Dados simulados dos usuários
    users = [
        { id: '00001', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00002', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00003', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00004', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00005', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00006', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00007', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00008', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00009', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' },
        { id: '00010', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', uf: 'BA', cidade: 'Salvador' }
    ];

    constructor(private router: Router) { }

    // Método para navegar para os detalhes do usuário
    navigateToUserDetails(userId: string) {
        this.router.navigate(['/users', userId]);
    }
} 