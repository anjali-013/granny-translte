import { Component} from '@angular/core';
import { FloatLabelType, } from '@angular/material/form-field';
import { ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AfterViewInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

declare var $: any;

@Component({

  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  // Corrected from `styleUrl` to `styleUrls`
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements AfterViewInit {

  carouselItems: any[] = [];
  title = 'owl-carousel-angular';
  carouselClass: string = 'default-carousel-class';

  WelcomeText = 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. ';
  images = [
    { src: 'assets/images/img1.png', alt: 'Image 1', text: 'Proin gravida' },
    { src: 'assets/images/img2.png', alt: 'Image 2', text: 'Proin gravida' },
    { src: 'assets/images/img3.png', alt: 'Image 3', text: 'Proin gravida' }
  ];

  // Image for the banner
  bannerImage = 'assets/images/banner.png';

  // Method to handle button click event
  onGetStarted() {
    console.log('Get Started clicked');
    // You can add navigation or any other logic here
  }

  longText = `Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, `;
  SubscribeText = 'Proin gravida nibh vel velit auctor Proin gravida nibh vel velit auctor';



  // FloatLabel Control
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);

  // Using signal for floatLabel
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    { initialValue: 'auto' }
  );

  // Getter for floatLabel
  get floatLabelValue(): FloatLabelType {
    return this.floatLabel() as FloatLabelType; // Ensure it returns the correct type
  }

  // Other properties and methods remain the same


  slideheading1 = 'Proin gravida ';

  title1 = 'In-Law Unit';
  date = '21/08/2020';
  description = 'Proin gravida nibh vel velit auctor aliquet.';

  ngAfterViewInit() {
    // Initialize Owl Carousel with custom navigation and other options
    if (typeof window !== 'undefined')
      $('#owl-example').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        navText: [
          '<img src="assets/images/prev1.png" alt="Previous" />',
          '<img src="assets/images/n1.png" alt="Next" />'
        ],
        // autoplay: true,
        // autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 1
          },
        767: {
            items: 3
          },
          1499: {
            items: 3
          }
        }
      });

    if (typeof window !== 'undefined')
      $('#owl-example1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        navText: [
          '<img src="assets/images/prev1.png" alt="Previous" />',
          '<img src="assets/images/n1.png" alt="Next" />'
        ],
        // autoplay: true,
        // autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 1
          },
        767: {
            items: 3
          },
          1499: {
            items: 3
          }
        }
      });

      if (typeof window !== 'undefined')
        $('#owl-example3').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        599: {
          items: 2
        },
      899: {
          items: 2
        },
        912: {
          items: 2
        },
        1024: {
          items: 2
        },
        1599: {
          items: 2
        },
      }
    });


  }



      feedtitle= 'proin gravida';
      feedname= 'proin gravida';
      feedtext= 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit';
    

}




