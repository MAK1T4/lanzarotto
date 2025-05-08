import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styles: []
})
export class RequestsComponent {
    // Dados simulados das solicitações
    requests = [
        { id: '00001', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Pendente' },
        { id: '00002', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Em Andamento' },
        { id: '00003', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Pendente' },
        { id: '00004', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Finalizado' },
        { id: '00005', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Pendente' },
        { id: '00006', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Em Andamento' },
        { id: '00007', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Pendente' },
        { id: '00008', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Finalizado' },
        { id: '00009', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Pendente' },
        { id: '00010', data: '00/00/00', tipo: 'Sertanejo', categoria: 'Banda', solicitante: 'Anderson', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Finalizado' }
    ];

    constructor(private router: Router) { }

    // Método para navegar para os detalhes da solicitação
    navigateToRequestDetails(requestId: string) {
        this.router.navigate(['/requests', requestId]);
    }
} 