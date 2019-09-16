import { Directive, ElementRef, Renderer2, Input, HostListener, Output, Host } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[upperCase]'
})

export class UpperCaseDirective {
    // constructor(public ref: ElementRef) { }

    // @HostListener('keyup', ['$event']) onInput(event) {
    //     this.ref.nativeElement.value = event.target.value.toUpperCase();
    //  }
    private _control: FormControl;

    constructor(private elementRef: ElementRef) {

    }

    @HostListener('input', ['$event']) onInputChange(event){
        const initalValue = this.elementRef.nativeElement.value;
        this.elementRef.nativeElement.value = initalValue.replace(/[^A-Z\s]*/g, '');
        if ( initalValue !== this.elementRef.nativeElement.value) {
          event.stopPropagation();
        }
    }

    @Input()
    set control(control: FormControl) {
        if (!control || !control.valueChanges) {
            return;
        }
        this._control = control;
        this.control.valueChanges.subscribe((val: string) => {
            let res = this._control.value.toUpperCase();
            this.control.setValue(res, { emitEvent: false });
        })
    }
    get control() {
        return this._control;
    }

}