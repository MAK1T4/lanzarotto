import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
    requestId!: string;
    activeTab: string = 'solicitante';

    // Dados simulados para a solicitação
    request = {
        numero: '00001',
        data: '15/03/2023',
        valor: 'R$ 1.200,00',
        tipo: 'Sertanejo',
        status: 'Em Andamento',
        categoria: 'Banda',
        horario: '20:00',
        duracao: '3 horas',
        descricao: 'Apresentação para aniversário de 30 anos com repertório focado em hits sertanejos dos anos 2000. Ambiente familiar com cerca de 50 convidados.'
    };

    // Dados simulados para o solicitante
    requester = {
        nome: 'Anderson Silva',
        email: 'anderson.silva@email.com',
        telefone: '(71) 9 9999-9999',
        estado: 'BA',
        cidade: 'Salvador'
    };

    // Dados simulados para o músico
    musician = {
        nome: 'Carlos Santana',
        email: 'carlos.santana@email.com',
        telefone: '(71) 9 8888-8888',
        estado: 'BA',
        cidade: 'Salvador'
    };

    // Para avaliações
    rating = 0;
    comment = '';

    // Para desistência
    withdrawalReason = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.requestId = id !== null ? id : '0';
        // Em uma implementação real, você buscaria os dados da solicitação com base no ID
        // this.loadRequestDetails(this.requestId);
    }

    setActiveTab(tab: string): void {
        this.activeTab = tab;
    }

    goBack(): void {
        this.router.navigate(['/requests']);
    }

    submitEvaluation(): void {
        console.log('Avaliação enviada', { rating: this.rating, comment: this.comment });
        // Implementação real enviaria para o backend
    }

    submitWithdrawal(): void {
        console.log('Desistência enviada', { reason: this.withdrawalReason });
        // Implementação real enviaria para o backend
    }
} 