import { Component } from '@angular/core';
import { getStrongOrMediumPassword } from 'src/helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  strength: string = '';
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  evaluateStrength() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    const length = this.password.length;

    const strongOrMedium = getStrongOrMediumPassword({
      length,
      hasLetters,
      hasNumbers,
      hasSymbols,
    });

    if (length === 0) {
      this.strength = '';
      return;
    }

    if (length < 8) {
      this.strength = 'short';
      return;
    }

    if (strongOrMedium) {
      this.strength = strongOrMedium;
    } else {
      this.strength = 'weak';
    }
  }
}
