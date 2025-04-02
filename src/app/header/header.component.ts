import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  title = 'app';

  constructor(
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  openLogin() {
    if (isPlatformBrowser(this.platformId)) {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '400px',
        data: { exampleData: 'value' },
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          console.log('User logged in with:', result);
        } else {
          console.log('Login cancelled');
        }
      });
    }
  }

}
