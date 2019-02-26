import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
    selector: 'app-modal-add-transaction',
    templateUrl: './modal-add-transaction.component.html',
    styleUrls: ['./modal-add-transaction.component.css']
})
export class ModalAddTransactionComponent implements OnInit {
    form: FormGroup;

    constructor(
        private activeModal: NgbActiveModal,
        private modalService: NgbModal,
        private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            description: ['', [Validators.required]],
            type: ['EXPENSE', [Validators.required]],
            date: [this.getCurrentDateInPtBrFormat(), [Validators.required]],
            total: ['', [Validators.required]]
        });
    }

    submit() {
        if (!this.form.valid) {
            return;
        }

        const formData = this.form.value;
        formData.date = this.normalizeDate(formData.date);

        this.activeModal.close(formData);
    }

    cancel() {
        this.activeModal.dismiss();
    }

    private getCurrentDateInPtBrFormat() {
        return moment().format('DD/MM/YYYY');
    }

    private normalizeDate(date: string) {
        return moment(date, 'DDMMYYYY').format('YYYY-MM-DD');
    }
}
