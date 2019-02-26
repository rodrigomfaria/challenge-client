import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class TransactionService {
    constructor(
        private http: HttpClient
    ) {
    }

    getTransactions() {
        return this.http.get<any>(`${environment.apiUrl}/transactions`);
    }

    getTransactionById(id: number) {
        return this.http.get<any>(`${environment.apiUrl}/transactions/${id}`);
    }

    createTransaction(transaction: any) {
        return this.http.post<any>(`${environment.apiUrl}/transactions`, transaction);
    }

    saveTransaction(id: number, transaction: any) {
        return this.http.put<any>(`${environment.apiUrl}/transactions/${id}`, transaction);
    }

    deleteTransactionById(id: number) {
        return this.http.delete<any>(`${environment.apiUrl}/transactions/${id}`);
    }
}
