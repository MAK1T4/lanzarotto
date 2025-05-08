import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-collaborator',
    templateUrl: './new-collaborator.component.html',
    styleUrls: ['./new-collaborator.component.scss']
})
export class NewCollaboratorComponent {
    // Modelo para os dados do colaborador
    collaborator = {
        name: '',
        cpf: '',
        email: '',
        password: '',
        access: 'Admin' // Valor padrão
    };

    constructor(private router: Router) { }

    // Método para cancelar e voltar para a lista de acessos
    cancel(): void {
        this.router.navigate(['/access']);
    }

    // Método para salvar os dados do colaborador
    save(): void {
        console.log('Salvando colaborador:', this.collaborator);
        // Em uma implementação real, enviaria os dados para o backend
        // Após salvar, navega de volta para a lista
        this.router.navigate(['/access']);
    }
} 