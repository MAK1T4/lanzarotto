import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-musician-details',
    templateUrl: './musician-details.component.html',
    styleUrls: ['./musician-details.component.scss']
})
export class MusicianDetailsComponent implements OnInit {
    musicianId!: string;
    activeTab: 'solicitacoes' | 'avaliacao' = 'solicitacoes';

    musician = {
        id: '',
        nome: 'Anderson',
        email: 'mail@email.com',
        telefone: '(00) 00000-0000',
        estado: 'BA',
        cidade: 'Salvador',
        ativo: true
    };

    // Dados simulados de solicitações para o músico
    solicitacoes = [
        { id: '00001', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Ativa' },
        { id: '00002', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Encerrada' },
        { id: '00003', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Ativa' },
        { id: '00004', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Encerrada' },
        { id: '00005', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Ativa' },
        { id: '00006', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Encerrada' },
        { id: '00007', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Ativa' },
        { id: '00008', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Encerrada' },
        { id: '00009', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Ativa' },
        { id: '00010', data: '00/00/00', tipo: 'Sertanejo', usuario: 'Anderson', uf: 'BA', cidade: 'Salvador', valor: 'R$ 00,00', status: 'Encerrada' }
    ];

    // Dados simulados de avaliações
    avaliacoes = [
        {
            estrelas: 4,
            data: '1 Semana atrás',
            texto: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to',
            usuario: 'Anderson'
        },
        {
            estrelas: 5,
            data: '1 Semana atrás',
            texto: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to',
            usuario: 'Anderson'
        },
        {
            estrelas: 4,
            data: '1 Semana atrás',
            texto: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to',
            usuario: 'Anderson'
        }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.musicianId = params['id'];
            // Em um cenário real, aqui você faria uma requisição para obter os dados do músico com este ID
            this.musician.id = this.musicianId;
        });
    }

    setActiveTab(tab: 'solicitacoes' | 'avaliacao'): void {
        this.activeTab = tab;
    }
} 