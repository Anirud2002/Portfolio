import { Component, OnInit } from '@angular/core';
import { UserConfigService } from '../../../../shared/user-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  theme: string;
  constructor(
    private userConfigService: UserConfigService
  ) { }

  ngOnInit() {
    this.subscribeToTheme();
  }

  setNewTheme(event) {
    const {checked} = event.detail;
    if(checked) {
      this.userConfigService.applyTheme("dark")
    }else {
      this.userConfigService.applyTheme("light")
    }
  }

  subscribeToTheme() {
    this.userConfigService.themeSubject$.subscribe(theme => {
      this.theme = theme;
    })
  }

}
