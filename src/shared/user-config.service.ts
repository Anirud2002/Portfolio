import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  themeSubject$ = this.themeSubject.asObservable();
  theme: string;

  constructor() {}

  async applyThemeOnInit(){
    this.theme = (await Preferences.get({key: "theme"})).value;
    if(!this.theme || this.theme === "system"){
      this.applyTheme("system")
    }else{
      this.applyTheme(this.theme as "dark" | "light" | "system");
    }
  }

  async applyTheme(theme: "dark" | "light" | "system"){
    switch(theme){
      case "light":
        document.body.setAttribute("color-theme", "light");
        this.themeSubject.next("light");
        break;
      case "dark":
        document.body.setAttribute("color-theme", "dark");
        this.themeSubject.next("dark");
        break;
      case "system":
        // need to set the theme local storage to whatever the user's system pref theme is
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(prefersDark){
          this.applyTheme("dark");
        }else{
          this.applyTheme("light");
        }
        break;
    }
    this.setThemeToLocalStorage(theme);
  }

  async getTheme(): Promise<string>{
    const theme = await Preferences.get({key: "theme"});
    return theme.value;
  }

  async setThemeToLocalStorage(theme: "dark" | "light" | "system"){
    await Preferences.set({
      key: "theme",
      value: theme
    });
  }
}
