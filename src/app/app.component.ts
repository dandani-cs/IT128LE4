import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAMONTELE4';
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthServiceService) {
    
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken() && this.isLoggedIn == false) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}


