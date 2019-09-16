import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { P2PService } from '../service/p2p.service';
import { TransferModel } from '../models/transfer.model';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public DataItems: TransferModel[];
  constructor(
    protected p2pService: P2PService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.DataItems = this.p2pService.getData();
  }

  public delete(item: TransferModel) {
    let index = this.DataItems.indexOf(item);

    if (index > -1) {
      this.DataItems.splice(index, 1);
      this.p2pService.remoteData(index);
    }
  }

  public repeat(item: TransferModel) {
    console.log("repeat");
    this.router.navigate(["home/p2p"], { queryParams: { id: item.TransferNumber } });
  }
}
