import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ficha-anamnese',
  templateUrl: './ficha-anamnese.component.html',
  styleUrls: ['./ficha-anamnese.component.css']
})
export class FichaAnamneseComponent {

  nomeCliente: string = '';
  enderecoCliente: string = '';
  cpfCliente: string = '';
  telefoneCliente: string = '';
  emailCliente: string = '';
  nascCliente: string = '';
  calcadoUsado: string = '';
  tipomeia: string = '';
  sensibilidade: string = '';
  obsPeEsquerdo: string = '';
  obsPeDireito: string = '';
  cirurgia: boolean = false;
  diabetes: boolean = false;
  cardiopatia: boolean = false;
  marcapassos: boolean = false;
  hepatite: boolean = false;
  hipertensao: boolean = false;
  hanseniase: boolean = false;
  cancer: boolean = false;
  disturbioCirculatorio: boolean = false;
  alergias: string[] = [];
  medicamentos: string[] = [];
  esportesPraticados: string[] = [];




  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

  }

  generateA4(){
    console.log(this.cpfCliente);
    console.log(this.diabetes);
  }

  addMedicamentos(){
    let element = document.getElementById('avaliacao__medicamento') as HTMLInputElement;
    let medicamento = element?.value;
    this.medicamentos.push(medicamento);
    element.value = ''

  }
  removeMedicamentos(indexOfElement: number) {
    this.medicamentos.splice(indexOfElement, 1);
  }
  addAlergia(){
    let element = document.getElementById('avaliacao__alergia') as HTMLInputElement;
    let alergia = element?.value;
    this.alergias.push(alergia);
    element.value = ''
  }
  removeAlergia(indexOfElement: number) {
    this.alergias.splice(indexOfElement, 1);
  }
  addEsportesPraticados(){
    let element = document.getElementById('avaliacao__esporte_praticado') as HTMLInputElement;
    let esportePraticado = element?.value;
    this.esportesPraticados.push(esportePraticado);
    element.value = ''

  }
  removeEsportePraticado(indexOfElement: number) {
    this.esportesPraticados.splice(indexOfElement, 1);
  }
  
}
