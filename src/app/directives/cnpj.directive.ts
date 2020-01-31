import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';

import Inputmask from 'inputmask';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ma9Cnpj]'
})
export class CnpjDirective implements OnInit, OnDestroy {

  private formSubscription: Subscription;

  constructor(
    private elementRef?: ElementRef,
    private formControl?: NgControl
  ) {}

  ngOnInit(): void {
    new Inputmask({
      mask: '99.999.999/9999-99',
      jitMasking: true
    } as any).mask(this.elementRef.nativeElement as HTMLInputElement);

    this.formSubscription = this.formControl.valueChanges.subscribe(value => {
      this.updateModelUnmasked(value);
    });
  }

  updateModelUnmasked(value: string): void {
    this.formControl.control.setValue(value.replace(/\D/g, ''), {
      emitModelToViewChange: false,
      emitEvent: false
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

}
