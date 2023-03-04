import { Component } from '@angular/core';

@Component({
  selector: 'app-analise-pes',
  templateUrl: './analise-pes.component.html',
  styleUrls: ['./analise-pes.component.css']
})
export class AnalisePesComponent {
  coordenadasX: number[] = [0, 1, 2, 3, 4];
  coordenadasY: number[] = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  pintarCoordenada(lado: string, vista: string, x: number, y: number) {
    const peDireitoPlantar = this.elementPeByLadoAndVista(lado, vista);

    const trList = peDireitoPlantar?.getElementsByTagName('tr') as HTMLCollectionOf<HTMLTableRowElement>;
    const tr = trList?.item(trList.length - y - 1);

    const tdList = tr?.getElementsByTagName('td');
    const td = tdList?.item(x);

    this.anomaliaSelecionada();

    let color = this.corAnomalia();

    if (td != undefined) {
      if (td.style.backgroundColor === "") {
        td.style.backgroundColor = color;
      } else {
        td.style.backgroundColor = "";
      }
    }
  }

  private corAnomalia(): string {
    switch (this.anomaliaSelecionada()) {
      case 'Verruga Plantar':
        return "rgba(255,0,0,0.5)";
      case 'Calo':
        return "rgba(0,255,255,0.5)";
      case 'Calosidades':
        return "rgba(0,255,0,0.5)";
      case 'Fissuras':
        return "rgba(0,0,0,0.5)";
      default:
        return "";
    }
  }

  private elementPeByLadoAndVista(lado: string, vista: string): any {
    let id = "figura__pe_";
    switch (lado) {
      case 'Direito':
        id += "direito_";
        break;
      case 'Esquerdo':
        id += "esquerdo_"
    }

    switch (vista) {
      case 'Plantar':
        return document.getElementById(id + "plantar");
      case 'Dorsal':
        return document.getElementById(id + "dorsal");
    }
  }

  private anomaliaSelecionada(): string {
    var select = document.getElementById('select__anomalia') as HTMLSelectElement;
    return select.options[select.selectedIndex].value as string;
  }
}
