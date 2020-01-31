import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import vanillaTextMask from "vanilla-text-mask";

@Component({
  selector: "app-text-mask",
  templateUrl: "./text-mask.component.html",
  styleUrls: ["./text-mask.component.scss"]
})
export class TextMaskComponent implements OnInit {
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
      cnpj: this.fb.control(""),
      cpf: this.fb.control(""),
      cnae: this.fb.control(""),
      telMovel: this.fb.control(""),
      telFixo: this.fb.control(""),
      telComercial: this.fb.control("")
    });
  }

  applyMasks() {
    // const cpfInput: HTMLElement = document.getElementById("cpf");
    // const cpfMask = [
    //   /\d/,
    //   /\d/,
    //   /\d/,
    //   ".",
    //   /\d/,
    //   /\d/,
    //   /\d/,
    //   ".",
    //   /\d/,
    //   /\d/,
    //   /\d/,
    //   "-",
    //   /\d/,
    //   /\d/
    // ];
    // const cpfMasked = vanillaTextMask.maskInput({
    //   inputElement: cpfInput,
    //   mask: cpfMask
    // });

    /*
    const cpfMask = new Inputmask("999.999.999-99");
    cpfMask.mask(cpfInput);

    const cnpjInput: HTMLElement = document.getElementById("cnpj");
    const cnpjMask = new Inputmask("99.999.999/9999-99");
    cnpjMask.mask(cnpjInput);

    const cnaeInput: HTMLElement = document.getElementById("cnae");
    const cnaeMask = new Inputmask("9999-9/99");
    cnaeMask.mask(cnaeInput);

    const telMovelInput: HTMLElement = document.getElementById("telMovel");
    const telMovelMask = new Inputmask("(99) 99999-9999");
    telMovelMask.mask(telMovelInput);

    const telFixoInput: HTMLElement = document.getElementById("telFixo");
    const telFixoMask = new Inputmask("(99) 9999-9999");
    telFixoMask.mask(telFixoInput);

    const telComercialInput: HTMLElement = document.getElementById(
      "telComercial"
    );
    const telComercialMask = new Inputmask("9999 999 9999");
    telComercialMask.mask(telComercialInput); */
  }
}
