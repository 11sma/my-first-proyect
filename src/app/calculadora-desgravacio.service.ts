import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { CalculadoraDesgravacioModel } from './calculadora-desgravacio/model/CalculadoraDesgravacioModel';

@Injectable({
  providedIn: 'root'
})

export class CalculadoraDesgravacioService {
  //accessAPI = 'http://viewnext.somee.com/api/PensionPlan/CalculateTaxDeduction?naturalPersonPensionPlan=1500&companyPensionPlan=8500&taxBase=60000';
  //accessAPI = 'http://localhost:5000/calculadoraDesgravacio';
  accessAPI = 'http://localhost:3000/value';

  constructor(private http: HttpClient) { }

  getValor(){
    return this.http.get(this.accessAPI);
  }

  checkValues(importPersona: number | null, importEmpresa: number | null, importAutonom: number | null){

    if (importPersona != null && importPersona > 1500){
      return false;
    }

    if (importEmpresa != null && importEmpresa > 8500){
      return false;
    }

    if (importAutonom != null  && importAutonom > 5750) {
      return false;
    }

    if (importAutonom != null  && importAutonom > 0 && importEmpresa != null  && importEmpresa > 0){
      return false;
    }
    return true;
  }

}
