import { Directive, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

import Inputmask from 'inputmask';
import { Subscription } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ma9Masking]'
})
export class MaskingDirective implements OnInit, OnDestroy {
  @Input('ma9MaskingControl') set Control(name: string) {
    this.control = this.container.control.get(name) as FormControl;
    this.name = name;
  }

  @Input('ma9Masking') maskPattern;

  name: string;
  control: FormControl;
  formSubscription: Subscription;

  constructor(
    private container?: ControlContainer,
    private elementRef?: ElementRef
  ) {}

  ngOnInit(): void {
    const mask = new Inputmask({
      regex: '\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}',
      jitMasking: true
    } as any).mask(this.elementRef.nativeElement as HTMLInputElement);

    this.formSubscription = this.control.valueChanges.subscribe(value => {
      this.updateModelUnmasked(value);
    });
  }

  updateModelUnmasked(value: string): void {
    // const pattern = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/; // seria importado do common para ser utilizado aqui
    const pattern = new RegExp('\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}');

    if (pattern.test(value)) {
      this.control.setValue(value.replace(/\D/g, ''), {
        emitModelToViewChange: false
      });
    }
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
