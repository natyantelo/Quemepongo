import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutComponent } from './components/about/about.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { InsertarPrendaComponent } from './components/insertar-prenda/insertar-prenda.component';
import { MisPrendasComponent } from './components/mis-prendas/mis-prendas.component';
import { CamisasComponent } from './components/camisas/camisas.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { ChaquetasyabrigosComponent } from './components/chaquetasyabrigos/chaquetasyabrigos.component';
import { JerseisComponent } from './components/jerseis/jerseis.component';
import { VestidosComponent } from './components/vestidos/vestidos.component';
import { FaldasComponent } from './components/faldas/faldas.component';
import { JeansComponent } from './components/jeans/jeans.component';
import { ZapatosComponent } from './components/zapatos/zapatos.component';
import { ConjuntoNocheComponent } from './components/conjunto-noche/conjunto-noche.component';
import { ConjuntoDiaComponent } from './components/conjunto-dia/conjunto-dia.component';
import { ConjuntoDeporteComponent } from './components/conjunto-deporte/conjunto-deporte.component';
import { ShortsComponent } from './components/shorts/shorts.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'camisas', component: CamisasComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'chaquetasyabrigos', component: ChaquetasyabrigosComponent },
  { path: 'jerseis', component: JerseisComponent },
  { path: 'vestidos', component: VestidosComponent },
  { path: 'faldas', component: FaldasComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'zapatos', component: ZapatosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'conjuntos', component: ConjuntosComponent },
  { path: 'noche', component: ConjuntoNocheComponent },
  { path: 'dia', component: ConjuntoDiaComponent },
  { path: 'deporte', component: ConjuntoDeporteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'insertarPrenda', component: InsertarPrendaComponent },
  { path: 'misPrendas', component: MisPrendasComponent },
  { path: '**', component: HomeComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
