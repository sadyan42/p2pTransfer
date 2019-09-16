export class TransferModel {
    public TransferNumber: number
    public CardNumber: string
    public PayerName: string
    public ActiveToYear: number
    public ActiveToMonth: number
    public RecipCardNumber: string
    public Amount: number
    public TransferDate: string
    constructor(data: ITransfer) {
        this.TransferNumber = data.transferNumber;
        this.CardNumber = data.cardNumber;
        this.PayerName = data.payerName;
        this.ActiveToYear = data.activeToYear;
        this.ActiveToMonth = data.activeToMonth;
        this.RecipCardNumber = data.recipCardNumber;
        this.Amount = data.amount;
        this.TransferDate = data.transferDate;
    }

    public toDto(): ITransfer {
        return {
            transferNumber: this.TransferNumber,
            cardNumber: this.CardNumber,
            payerName: this.PayerName,
            activeToYear: this.ActiveToYear,
            activeToMonth: this.ActiveToMonth,
            recipCardNumber: this.RecipCardNumber,
            amount: this.Amount,
            transferDate: this.TransferDate
        }
    }
}

export interface ITransfer {
    transferNumber: number,
    cardNumber: string,
    payerName: string,
    activeToYear: number,
    activeToMonth: number,
    recipCardNumber: string,
    amount: number,
    transferDate: string
}