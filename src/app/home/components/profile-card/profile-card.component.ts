import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent  implements OnInit {

  constructor(
    private toastController: ToastController,
  ) { }

  ngOnInit() {}

  async copyPortfolioLink() {
    await Clipboard.write({
      string: window.location.href
    });

    const toast = await this.toastController.create({
      message: "Porfolio Link Copied,  Share it! :)",
      duration: 2000,
      position: "top",
      color: "dark",
      cssClass: "custom-toast",
    });

    await toast.present();
  }

}
