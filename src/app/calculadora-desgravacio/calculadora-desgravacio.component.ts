import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculadoraDesgravacioService } from '../calculadora-desgravacio.service';
import { CalculadoraDesgravacioModel } from './model/CalculadoraDesgravacioModel';

@Component({
  selector: 'app-calculadora-desgravacio',
  templateUrl: './calculadora-desgravacio.component.html',
  styleUrls: ['./calculadora-desgravacio.component.scss']
})
export class CalculadoraDesgravacioComponent implements OnInit {

  calculadoraDesgravacio = this.fb.group < CalculadoraDesgravacioModel > ({
    importInvertits: this.fb.group({
        importPersona: this.fb.control(0),
        importEmpresa: this.fb.control(0),
        importAutonom: this.fb.control(0),
    }),
    baseImponible: this.fb.control(0)
    //resultado: 0,
    //missatge: ''
  });

  constructor(public calculadoraDesgravacioService: CalculadoraDesgravacioService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    throw new Error ('Method not implemented.');
  }

  data!: any;
  resultado!: any;
  missatge!: string;

  submit() {
    console.log(this.calculadoraDesgravacio.controls.baseImponible.value)

    let importPersona = this.calculadoraDesgravacio.controls.importInvertits.controls.importPersona.value;
    let importEmpresa = this.calculadoraDesgravacio.controls.importInvertits.controls.importEmpresa.value;
    let importAutonom = this.calculadoraDesgravacio.controls.importInvertits.controls.importAutonom.value
    
    if(this.calculadoraDesgravacioService.checkValues(importPersona, importEmpresa, importAutonom)){
      this.missatge = "El resultat és: "
      this.data = this.calculadoraDesgravacioService.getValor()
        .subscribe(
          (response) => { this.resultado = response; },
          (error) => { console.log(error); });
    } else {
      this.missatge = "Errors al formulari";
      this.resultado = null;
    }
        
  }
}
