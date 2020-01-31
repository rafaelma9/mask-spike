import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import Imask from "imask";

@Component({
  selector: "app-imask",
  templateUrl: "./imask.component.html",
  styleUrls: ["./imask.component.scss"]
})
export class ImaskComponent implements OnInit {
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
    const cpfInput: HTMLElement = document.getElementById("cpf");
    const cpfMaskOption = {
      mask: "000.000.000-00"
    };
    const cpfMask = Imask(cpfInput, cpfMaskOption);

    const cnpjInput: HTMLElement = document.getElementById("cnpj");
    const cnpjMaskOption = {
      mask: "00.000.000/0000-00"
    };
    const cnpjMask = Imask(cnpjInput, cnpjMaskOption);

    const cnaeInput: HTMLElement = document.getElementById("cnae");
    const cnaeMaskOption = {
      mask: "0000-0/00"
    };
    const cnaeMask = Imask(cnaeInput, cnaeMaskOption);

    const telMovelInput: HTMLElement = document.getElementById("telMovel");
    const telMovelMaskOption = {
      mask: "(00) 00000-0000"
    };
    const telMovelMask = Imask(telMovelInput, telMovelMaskOption);

    const telFixoInput: HTMLElement = document.getElementById("telFixo");
    const telFixoMaskOption = {
      mask: "(00) 0000-0000"
    };
    const telFixoMask = Imask(telFixoInput, telFixoMaskOption);

    const telComercialInput: HTMLElement = document.getElementById(
      "telComercial"
    );
    const telComercialMaskOption = {
      mask: "0000 000 0000"
    };
    const telComercialMask = Imask(telComercialInput, telComercialMaskOption);
  }
}
