import { Component } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { ManageUserComponent } from '../manage-user/manage-user.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  constructor(private SlideoutService: SlideoutService) {}

  openManageUser() {
    this.SlideoutService.open(ManageUserComponent, ['manage-user'], ['Manage User'], ['Save'], ['content'], ['right'], ['below'], false, true, true, false);
  }

}
