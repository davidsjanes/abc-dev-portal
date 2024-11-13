import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { SlideoutService } from 'src/app/services/slideout/slideout.service';
import { NewAppComponent } from './new-app/new-app.component';
import { ProdRequestComponent } from './prod-request/prod-request.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private SlideoutService: SlideoutService) {}

  openNewApp() {
    this.SlideoutService.open(NewAppComponent, ['new-app'], ['Create New App'], ['Create App'], ['content'], ['right'], ['below'], false, true, true, false);
  }

  openProductionRequest() {
    this.SlideoutService.open(ProdRequestComponent, ['prod-request'], ['Production Request'], ['Send Request'], ['nav'], ['left'], ['below'], false, true, true, false);
  }
}