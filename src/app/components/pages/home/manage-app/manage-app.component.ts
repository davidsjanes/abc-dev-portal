import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-manage-app',
  templateUrl: './manage-app.component.html',
  styleUrls: ['./manage-app.component.scss']
})
export class ManageAppComponent {

  secretIsVisible: boolean = false;
  inputType: string = "password";

  constructor(private ModalService: ModalService) {}

  openDeleteConfirm() {
    this.ModalService.open(DeleteConfirmComponent, [], ['delete-app'], ['window'], ['small'], ['center'], ['Delete App'], ['Continue']);
  }

  toggleSecret() {
    this.secretIsVisible = !this.secretIsVisible;
    console.log(this.inputType);
    if (this.secretIsVisible === true) {
      this.inputType = "text";
    } else {
      this.inputType = "password";
    }
  }

}
