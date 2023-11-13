import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface CalculadoraDesgravacioModel {

    importInvertits: FormGroup <{
        importPersona: FormControl < number | null>;
        importEmpresa: FormControl < number | null>;
        importAutonom: FormControl < number | null>;
        
    }>;
    baseImponible: FormControl < number | null >;
    //resultado: any;
    //missatge: string;
}

