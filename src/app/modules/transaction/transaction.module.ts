import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalAddTransactionComponent } from './modal-add-transaction/modal-add-transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';

@NgModule({
    declarations: [
        TransactionComponent,
        ModalAddTransactionComponent
    ],
    imports: [
        SharedModule,
        TransactionRoutingModule
    ],
    entryComponents: [
        ModalAddTransactionComponent
    ]
})
export class TransactionModule {
}
