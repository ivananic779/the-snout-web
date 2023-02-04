import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { zgKvartoviData } from '../vars_data/zagreb_kvartovi_data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
