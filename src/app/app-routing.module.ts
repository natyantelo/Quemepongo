import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { TagComponent } from './components/tag/tag.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutComponent } from './components/about/about.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { ConjuntoComponent } from './components/conjunto/conjunto.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { InsertarPrendaComponent } from './components/insertar-prenda/insertar-prenda.component';
import { MisPrendasComponent } from './components/mis-prendas/mis-prendas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'tag/:idtag', component: TagComponent },
  { path: 'about', component: AboutComponent },
  { path: 'conjunto', component: ConjuntoComponent, canActivate: [AuthGuardGuard] },
  { path: 'conjuntos', component: ConjuntosComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'insertarPrenda', component: InsertarPrendaComponent, canActivate: [AuthGuardGuard] },
  { path: 'misPrendas', component: MisPrendasComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: HomeComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
