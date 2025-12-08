import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { RemoveUserComponent } from '../remove-user/remove-user.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent {

  constructor(private ModalService: ModalService) {}

  openRemoveConfirm() {
      this.ModalService.open(RemoveUserComponent, [], ['remove-user'], ['window'], ['small'], ['center'], ['Remove User'], ['Continue']);
  }

}
