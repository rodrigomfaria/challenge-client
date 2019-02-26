import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {first} from 'rxjs/operators';
import {TransactionService} from '../../core/services/transaction.service';
import {UtilsService} from '../../core/services/utils.service';
import {ModalAddTransactionComponent} from './modal-add-transaction/modal-add-transaction.component';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
    transactions: any[] = [];

    constructor(
        private modalService: NgbModal,
        private utilsService: UtilsService,
        private transactionService: TransactionService
    ) {
    }

    ngOnInit() {
        this.loadTransactions();
    }

    addTransaction() {
        const modalRef = this.modalService.open(ModalAddTransactionComponent);

        modalRef.result.then((result) => {
            this.transactionService.createTransaction(result)
                .subscribe((data: any) => this.loadTransactions());
        }).catch((reason: any) => {

        });
    }

    deleteTransaction(transaction: any) {
        this.transactionService.deleteTransactionById(transaction.id)
            .subscribe((data: any) => this.loadTransactions());
    }

    hasTransactions() {
        return this.transactions.length > 0;
    }

    isRevenueTransaction(transaction: any) {
        return transaction.type === 'REVENUE';
    }

    isExpenseTransaction(transaction: any) {
        return transaction.type === 'EXPENSE';
    }

    formatTotalTransaction(transaction: any) {
        let prefix = '';
        let className = 'text-success';

        if (this.isExpenseTransaction(transaction)) {
            prefix = '- ';
            className = 'text-danger';
        }

        return `<span class="${className}">${prefix}${this.utilsService.moneyFormat(transaction.total)}</span>`;
    }

    getChartLabel() {
        const chartLabel = [];

        chartLabel.push('Despesa');
        chartLabel.push('Receita');

        return chartLabel;
    }

    getChartType() {
        return 'pie';
    }

    getChartData() {
        const chartData = [];

        chartData.push(this.getTotalExpense());
        chartData.push(this.getTotalRevenue());

        return chartData;
    }

    private getTotalRevenue() {
        let total = 0;

        if (this.transactions.length) {
            for (let i = 0; i < this.transactions.length; i++) {
                if (this.isRevenueTransaction(this.transactions[i])) {
                    total += this.transactions[i].total;
                }
            }
        }

        return total;
    }

    private getTotalExpense() {
        let total = 0;

        if (this.transactions.length) {
            for (let i = 0; i < this.transactions.length; i++) {
                if (this.isExpenseTransaction(this.transactions[i])) {
                    total += this.transactions[i].total;
                }
            }
        }

        return total;
    }

    private loadTransactions() {
        this.transactionService.getTransactions()
            .pipe(first())
            .subscribe((data: any) => {
                this.transactions = data;
            });
    }
}
