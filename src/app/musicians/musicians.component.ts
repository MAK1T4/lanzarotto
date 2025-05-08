import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-musicians',
    templateUrl: './musicians.component.html',
    styles: []
})
export class MusiciansComponent {
    // Dados simulados dos músicos
    musicians = [
        { id: '00001', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00002', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00003', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00004', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00005', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00006', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00007', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00008', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00009', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' },
        { id: '00010', nome: 'Anderson', email: 'mail@email.com', telefone: '(00) 00000-0000', estado: 'BA', cidade: 'Salvador' }
    ];

    constructor(private router: Router) { }

    // Método para navegar para os detalhes do músico
    navigateToMusicianDetails(musicianId: string) {
        this.router.navigate(['/musicians', musicianId]);
    }
} 