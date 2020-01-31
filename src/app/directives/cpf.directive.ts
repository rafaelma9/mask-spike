import { Directive, Input, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { NgControl } from "@angular/forms";

import Inputmask from "inputmask";
import { Subscription } from "rxjs";

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: "[ma9Cpf]"
})
export class CpfDirective implements OnInit, OnDestroy {
  private formSubscription: Subscription;

  constructor(
    private elementRef?: ElementRef,
    private formControl?: NgControl
  ) {}

  ngOnInit(): void {
    new Inputmask({
      mask: "999.999.999-99",
      jitMasking: true
    } as any).mask(this.elementRef.nativeElement as HTMLInputElement);

    this.formSubscription = this.formControl.valueChanges.subscribe(value => {
      this.updateModelUnmasked(value);
    });
  }

  updateModelUnmasked(value: string): void {
    this.formControl.control.setValue(value.replace(/\D/g, ""), {
      emitModelToViewChange: false,
      emitEvent: false
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
