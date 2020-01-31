import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import Cleave from "cleave.js";

@Component({
  selector: "app-cleave-js",
  templateUrl: "./cleave-js.component.html",
  styleUrls: ["./cleave-js.component.scss"]
})
export class CleaveJsComponent implements OnInit {
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
    const cpfMask = new Cleave(cpfInput, {
      blocks: [3, 3, 3, 2],
      delimiters: [".", ".", "-"]
    });

    const cnpjInput: HTMLElement = document.getElementById("cnpj");
    const cnpjMask = new Cleave(cnpjInput, {
      blocks: [2, 3, 3, 4, 2],
      delimiters: [".", ".", "/", "-"]
    });

    const cnaeInput: HTMLElement = document.getElementById("cnae");
    const cnaeMask = new Cleave(cnaeInput, {
      blocks: [4, 1, 2],
      delimiters: ['-', '/']
    });

    const telMovelInput: HTMLElement = document.getElementById("telMovel");
    const telMovelMask = new Cleave(telMovelInput,  {
      blocks: [0, 2, 0, 5, 4],
      delimiters: ['(', ')', ' ', '-']
    });

    const telFixoInput: HTMLElement = document.getElementById("telFixo");
    const telFixoMask = new Cleave(telFixoInput,  {
      blocks: [0, 2, 0, 4, 4],
      delimiters: ['(', ')', ' ', '-']
    });

    const telComercialInput: HTMLElement = document.getElementById("telComercial");
    const telComercialMask = new Cleave(telComercialInput,  {
      blocks: [4, 3, 4],
      delimiters: [' ', ' ', ' ']
    });

    /*
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
