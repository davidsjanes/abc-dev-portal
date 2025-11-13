import { Component } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { AdminManageAppComponent } from '../admin-manage-app/admin-manage-app.component';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent {

  constructor(private SlideoutService: SlideoutService) {}

  openManageApp() {
    this.SlideoutService.open(AdminManageAppComponent, ['manage-app'], ['Manage Application'], ['Close'], ['content'], ['right'], ['below'], false, true, true, false);
  }

}
