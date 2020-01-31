import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import Inputmask from 'inputmask';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit {
  private iMaskForm: FormGroup;

  get maskForm() {
    return this.iMaskForm;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeMaskForm();

    this.applyMasks();
  }

  initializeMaskForm() {
    this.iMaskForm = this.fb.group({
      cnpj: this.fb.control(''),
      cpf: this.fb.control(''),
      cnae: this.fb.control(''),
      telMovel: this.fb.control(''),
      telFixo: this.fb.control(''),
      telComercial: this.fb.control('')
    });
  }

  applyMasks() {
    // const cpfInput: HTMLElement = document.getElementById("cpf");
    // const cpfMask = new Inputmask("999.999.999-99", {jitMasking: true});
    // cpfMask.mask(cpfInput);

    // const cnpjInput: HTMLElement = document.getElementById("cnpj");
    // const cnpjMask = new Inputmask("99.999.999/9999-99", {jitMasking: true});
    // cnpjMask.mask(cnpjInput);

    const cnaeInput: HTMLElement = document.getElementById('cnae');
    const cnaeMask = new Inputmask('9999-9/99', {jitMasking: true});
    cnaeMask.mask(cnaeInput);

    const telMovelInput: HTMLElement = document.getElementById('telMovel');
    const telMovelMask = new Inputmask('(99) 99999-9999', {jitMasking: true});
    telMovelMask.mask(telMovelInput);

    const telFixoInput: HTMLElement = document.getElementById('telFixo');
    const telFixoMask = new Inputmask('(99) 9999-9999', {jitMasking: true});
    telFixoMask.mask(telFixoInput);

    const telComercialInput: HTMLElement = document.getElementById(
      'telComercial'
    );
    const telComercialMask = new Inputmask('9999 999 9999', {jitMasking: true});
    telComercialMask.mask(telComercialInput);
  }
}
