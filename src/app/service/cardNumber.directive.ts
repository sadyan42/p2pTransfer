import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[cardNumber]',
})

export class CardNumberDirective {


    private _control: FormControl;

    constructor() {

    }

    @Input()
    set control(control: FormControl) {
        if (!control || !control.valueChanges) {
            return;
        }
        this._control = control;
        this.control.valueChanges.subscribe((val: string) => {
            let res = this.formatNumber(val);
            if (res && res.length > 19) {
                res = res.slice(0, 19);
            };
            this.control.setValue(res, { emitEvent: false });
        })
    }
    get control() {
        return this._control;
    }

    public formatNumber(value: string) {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = []

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    }

}