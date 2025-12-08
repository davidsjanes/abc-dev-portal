import { Component } from '@angular/core';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { InviteUserComponent } from './invite-user/invite-user.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  constructor(private SlideoutService: SlideoutService) {}

  openInviteUser() {
    this.SlideoutService.open(InviteUserComponent, ['invite-user'], ['Invite User'], ['Send Invite'], ['content'], ['right'], ['below'], false, true, true, false);
  }

}
