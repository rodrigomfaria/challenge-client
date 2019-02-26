import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { MomentModule } from 'ngx-moment';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        NgbModule,
        MomentModule,
        CurrencyMaskModule,
        ChartsModule,
        NgxMaskModule.forRoot()
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        NgbModule,
        MomentModule,
        CurrencyMaskModule,
        ChartsModule,
        NgxMaskModule
    ]
})
export class SharedModule {
}
