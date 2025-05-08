import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    userId!: string;
    user = {
        id: '',
        nome: 'Anderson',
        email: 'mail@email.com',
        telefone: '(00) 00000-0000',
        estado: 'BA',
        cidade: 'Salvador'
    };

    // Dados simulados de solicitações para o usuário
    solicitacoes = [
        { id: '00001', data: '00/00/00', tipo: 'Sertanejo', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Ativa' },
        { id: '00002', data: '00/00/00', tipo: 'Sertanejo', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Encerrada' },
        { id: '00003', data: '00/00/00', tipo: 'Sertanejo', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Ativa' },
        { id: '00004', data: '00/00/00', tipo: 'Sertanejo', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Encerrada' },
        { id: '00005', data: '00/00/00', tipo: 'Sertanejo', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Ativa' },
        { id: '00006', data: '00/00/00', tipo: 'Sertanejo', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Encerrada' },
        { id: '00007', data: '00/00/00', tipo: 'Sertanejo', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Ativa' },
        { id: '00008', data: '00/00/00', tipo: 'Sertanejo', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Encerrada' },
        { id: '00009', data: '00/00/00', tipo: 'Sertanejo', profissional: '--------', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Ativa' },
        { id: '00010', data: '00/00/00', tipo: 'Sertanejo', profissional: 'Nome do profissional', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00.00', status: 'Encerrada' }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            // Em um cenário real, aqui você faria uma requisição para obter os dados do usuário com este ID
            this.user.id = this.userId;
        });
    }
} 