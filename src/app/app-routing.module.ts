import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { scalesComponent } from './pages/scales/scales.component';
import { PeriodStopoversComponent } from './pages/period-stopovers/period-stopovers.component';
import { NegotiationsComponent } from './pages/negotiations/negotiations.component';
import { OnDutyComponent } from './pages/on-duty/on-duty.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { CastComponent } from './pages/cast/cast.component';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '', // Rota raiz
    //canActivate: [AuthGuard], // Protege todas as rotas abaixo
    children: [
      {
        path: 'escalas',
        component: scalesComponent,
      },
      {
        path: 'periodoDeEscalas',
        component: PeriodStopoversComponent,
      },
      {
        path: 'negociacoes',
        component: NegotiationsComponent,
      },
      {
        path: 'plantonistas',
        component: OnDutyComponent,
      },
      {
        path: 'historico',
        component: HistoricComponent,
      },
      {
        path: 'escalados',
        component: CastComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
