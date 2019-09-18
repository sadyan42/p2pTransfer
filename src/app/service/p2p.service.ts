import { Injectable } from '@angular/core';
import { ITransfer, TransferModel } from '../models/transfer.model';

@Injectable()
export class P2PService {
    constructor() {
    }

    public getDataById(id: number): TransferModel {
        const items = this.getData();
        if (items != undefined) {
            return items.find(i => i.TransferNumber === id);
        }
    }

    public getData(): TransferModel[] {
        const items: ITransfer[] = JSON.parse(localStorage.getItem("cardArray"));
        if (items != null) {
            const models = items.map(i => {
                return new TransferModel(i);
            });
            return models;
        }
    }

    public addData(cardNumber: string, payerName: string, activeToYear: number, activeToMonth: number, recipCardNumber: string, amount: number, transferDate: string) {
        let TransferNumber: number;
        if (localStorage.lastTransferNumber != undefined) {
            TransferNumber = parseInt(localStorage.lastTransferNumber) + 1;
        }
        else {
            TransferNumber = 1;
        }
        localStorage.setItem("lastTransferNumber", TransferNumber.toString());

        const dataItem: ITransfer = { transferNumber: TransferNumber, cardNumber: cardNumber, payerName: payerName, activeToYear: activeToYear, activeToMonth: activeToMonth, recipCardNumber: recipCardNumber, amount: amount, transferDate: transferDate };
        const dataArray = this.getData() || [];
        const data = dataArray.map(i => i.toDto());
        data.push(dataItem);
        localStorage.setItem("cardArray", JSON.stringify(data));
    }

    // метод удаления 
    public remoteData(index: number) {
        let replaceDataArray = JSON.parse(localStorage.cardArray)

        replaceDataArray.splice(index, 1)
        localStorage.setItem("cardArray", JSON.stringify(replaceDataArray));
    }
}