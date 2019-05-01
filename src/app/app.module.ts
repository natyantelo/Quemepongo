import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HttpClientModule } from '@angular/common/http';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MujerComponent } from './components/mujer/mujer.component';

import { TagComponent } from './components/tag/tag.component';
import { ConjuntoComponent } from './components/conjunto/conjunto.component';
import { LoginComponent } from './components/auth/containers/login/login.component';
import { RegisterComponent } from './components/auth/containers/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InsertarPrendaComponent } from './components/insertar-prenda/insertar-prenda.component';
import { MisPrendasComponent } from './components/mis-prendas/mis-prendas.component';
import { CamisasComponent } from './components/camisas/camisas.component';
import { environment } from 'src/environments/environment';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import { ComponentsComponent } from './components/components.component';
import { ChaquetasyabrigosComponent } from './components/chaquetasyabrigos/chaquetasyabrigos.component';
import { JerseisComponent } from './components/jerseis/jerseis.component';
import { VestidosComponent } from './components/vestidos/vestidos.component';
import { FaldasComponent } from './components/faldas/faldas.component';
import { JeansComponent } from './components/jeans/jeans.component';
import { ConjuntoNocheComponent } from './components/conjunto-noche/conjunto-noche.component';
import { ConjuntoDiaComponent } from './components/conjunto-dia/conjunto-dia.component';
import { ConjuntoDeporteComponent } from './components/conjunto-deporte/conjunto-deporte.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { ZapatosComponent } from './components/zapatos/zapatos.component';
import { AuthState } from './components/auth/store/auth.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './forms/form-control.component';

@NgModule({
    declarations: [
        FormControlComponent,
        AppComponent,
        NavbarComponent,
        HomeComponent,
        MujerComponent,
        CamisasComponent,
        CamisetasComponent,
        ChaquetasyabrigosComponent,
        JerseisComponent,
        LoginComponent,
        TagComponent,
        ConjuntoComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        ConjuntosComponent,
        FooterComponent,
        InsertarPrendaComponent,
        MisPrendasComponent,
        CamisetasComponent,
        ComponentsComponent,
        VestidosComponent,
        FaldasComponent,
        JeansComponent,
        ConjuntoNocheComponent,
        ConjuntoDiaComponent,
        ConjuntoDeporteComponent,
        ShortsComponent,
        ZapatosComponent,


    ],
    imports: [
        BrowserModule,
        /*  NgxsReduxDevtoolsPluginModule.forRoot({
           disabled: environment.production
         }), */
        NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false }),
        NgxsRouterPluginModule.forRoot(),
        NgxsModule.forRoot([AuthState], {
            developmentMode: !environment.production
        }),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
