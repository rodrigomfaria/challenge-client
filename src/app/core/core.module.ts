import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { UtilsService } from './services/utils.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CurrencyPipe,

        UtilsService,
        TransactionService
    ]
})
export class CoreModule {
}
