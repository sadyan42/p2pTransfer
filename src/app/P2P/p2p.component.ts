import { FormGroup, FormControl, Validators } from '@angular/forms';
import { P2PService } from '../service/p2p.service';
import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferModel } from '../models/transfer.model';

@Component({
  selector: 'p2p',
  templateUrl: './p2p.component.html',
  styleUrls: ['./p2p.component.css']
})
export class P2PComponent implements OnInit {

  public P2PForm: FormGroup = new FormGroup({
    "cardNumber": new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"),
    ]),
    "payerName": new FormControl("", [
      Validators.required,
      Validators.pattern('[A-Z]* [A-Z]*'),
    ]),
    "payerActiveToYear": new FormControl("", Validators.required),
    "payerActiveToMonth": new FormControl("", Validators.required),
    "recipCardNumber": new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"),
    ]),
    "amount": new FormControl("", [
      Validators.required,
      Validators.min(1)
    ])
  });

  constructor(protected p2pService: P2PService, private _activatedRoute: ActivatedRoute) {


    _activatedRoute.queryParams.subscribe(params => {
      const id: string = params['id'];
      const item = this.p2pService.getDataById(parseInt(id))
      if (item)
        this.fillForm(item);
    });
  }

  ngOnInit() {

  }

  public date = new Date();
  public currentDate: string;



  public submit() {
    const dto = {
      cardNumber: this.P2PForm.controls.cardNumber.value,
      fio: this.P2PForm.controls.payerName.value,
      activeToYear: this.P2PForm.controls.payerActiveToYear.value,
      payerActiveToMonth: this.P2PForm.controls.payerActiveToMonth.value,
      recipCardNumber: this.P2PForm.controls.recipCardNumber.value,
      amount: this.P2PForm.controls.amount.value
    }
    this.currentDate = this.DateToString(this.date.getUTCDate(), this.date.getUTCMonth() + 1, this.date.getUTCFullYear());
    if (this.P2PForm.valid) {
      this.p2pService.addData(dto.cardNumber, dto.fio, dto.activeToYear, dto.payerActiveToMonth, dto.recipCardNumber, dto.amount, this.currentDate);
    }
  }

  public fillForm(data: TransferModel) {
    this.P2PForm.controls.cardNumber.setValue(data.CardNumber);
    this.P2PForm.controls.payerName.setValue(data.PayerName);
    this.P2PForm.controls.payerActiveToYear.setValue(data.ActiveToYear);
    this.P2PForm.controls.payerActiveToMonth.setValue(data.ActiveToMonth);
    this.P2PForm.controls.recipCardNumber.setValue(data.RecipCardNumber);
    this.P2PForm.controls.amount.setValue(data.Amount);
  }

  public DateToString(numDate: number, numMonth: number, numYear: number) {
    let strDate: string;
    let strMonth: string;
    let strYear: string;
    let FullstrDate: string;

    (numDate < 10) ? strDate = "0" + numDate.toString() : strDate = numDate.toString();
    (numMonth < 10) ? strMonth = "0" + numMonth.toString() : numMonth.toString();
    strYear = numYear.toString();

    FullstrDate = strDate + "." + strMonth + "." + strYear;

    return FullstrDate;
  }

}
