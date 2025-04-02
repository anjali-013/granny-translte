import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import{FooterComponent} from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  {path:'login',component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carousal', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
