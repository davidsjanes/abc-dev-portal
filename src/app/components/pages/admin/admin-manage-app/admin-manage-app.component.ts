import { Component } from '@angular/core';
import { RejectAppComponent } from './reject-app/reject-app.component';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-admin-manage-app',
  templateUrl: './admin-manage-app.component.html',
  styleUrls: ['./admin-manage-app.component.scss']
})
export class AdminManageAppComponent {

  constructor(private ModalService: ModalService) {}
  
    openRejectConfirm() {
      this.ModalService.open(RejectAppComponent, [], ['reject-app'], ['window'], ['small'], ['center'], ['Reject Application'], ['Continue']);
    }

}
