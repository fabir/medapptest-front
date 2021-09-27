import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { ExamenEdicionComponent } from './pages/examen/examen-edicion/examen-edicion.component';
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { EspecialComponent } from './pages/consulta/especial/especial.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardService } from './_service/guard.service';
import { Not403Component } from './pages/not403/not403.component';
import { Not404Component } from './pages/not404/not404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'paciente', component: PacienteComponent,
    children:[
      {path:'nuevo', component: PacienteEdicionComponent},
      {path:'edicion/:id', component: PacienteEdicionComponent}
    ],canActivate: [GuardService]
  },
  {path:'especialidad', component: EspecialidadComponent,
    children:[
      {path:'nuevo', component: EspecialidadEdicionComponent},
      {path:'edicion/:id', component: EspecialidadEdicionComponent}
    ],canActivate: [GuardService]
    },
  {path:'examen', component: ExamenComponent,
    children:[
      {path:'nuevo', component: ExamenEdicionComponent},
      {path:'edicion/:id', component: ExamenEdicionComponent}
    ],canActivate: [GuardService]
  },
  {path:'medico', component: MedicoComponent,canActivate: [GuardService]},
  {path:'consulta', component: ConsultaComponent,
    children:[
      {path:'nuevo', component: EspecialComponent},
      {path:'consulta-especial/:id', component: EspecialComponent}
    ],canActivate: [GuardService]
  },
  {path:'not-403', component: Not403Component},
  {path:'not-404', component: Not404Component},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', redirectTo:'not-404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
