import { Component, Input } from '@angular/core';
import { FichaAnamneseComponent } from '../ficha-anamnese/ficha-anamnese.component';

@Component({
  selector: 'app-folha-a4',
  templateUrl: './folha-a4.component.html',
  styleUrls: ['./folha-a4.component.css']
})
export class FolhaA4Component {

  @Input() ficha: FichaAnamneseComponent | undefined = undefined;

  ngOnInit() {
  }

  format(){
    let sessao = document.getElementsByClassName('sessao__a4');
    for (var i = 0; i < sessao.length; i++) {
      let parent = sessao[i] as HTMLElement;
      let children = parent.getElementsByTagName('span');
      for (var j = 0; j < children.length; j++) {
        let child = children[j];
        child.textContent?.replace('\n', '');
        if (parent.offsetLeft === child.offsetLeft) {
          continue;
        }
        var fontSize = parseFloat(window.getComputedStyle(child).fontSize) * 2;
        if (child.offsetHeight >= fontSize) {
          parent.insertBefore(document.createElement('br'), child);
        }
      }
    }
  }

}
