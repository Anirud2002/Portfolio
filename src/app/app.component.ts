import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';
import { UserConfigService } from '../shared/user-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userConfigService: UserConfigService) {}

  async ngOnInit() {
    await this.userConfigService.applyThemeOnInit();
  }
  
}
