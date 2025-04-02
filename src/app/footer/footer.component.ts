import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  FooterText='Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit';
  FooterHeading1='Quick Link';
 
  FooterHeading2='Contact';
  NumberText='0123-46789';
  EmailText='Grannyflat@.us';
  LocText='Proin gravida nibh vel velit auctor aliquet. ';

  RightText='Grannyflat 2024 © All Rights Reserve';
  TermText='terms & conditions';
  PolicyText='privacy policy';


}
