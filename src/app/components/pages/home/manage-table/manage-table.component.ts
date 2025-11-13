import { Component } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { ManageAppComponent } from '../manage-app/manage-app.component';

@Component({
  selector: 'app-manage-table',
  templateUrl: './manage-table.component.html',
  styleUrls: ['./manage-table.component.scss']
})
export class ManageTableComponent {

  constructor(private SlideoutService: SlideoutService) {}

  openManageApp() {
    this.SlideoutService.open(ManageAppComponent, ['manage-app'], ['Manage Application'], ['Save Changes'], ['content'], ['right'], ['below'], false, true, true, false);
  }

}
