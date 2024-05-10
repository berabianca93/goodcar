import { Routes } from '@angular/router';
import { ListCarComponent } from './layout/routes/list-car/list-car.component';
import { CardmenuComponent } from './layout/grid/cardmenu/cardmenu.component';
import { ClientComponent } from './layout/routes/client/client.component';
import { FinancialComponent } from './layout/routes/financial/financial.component';

export const routes: Routes = [
    {path: '', component: CardmenuComponent},
    {path: 'listcar', component: ListCarComponent},
    {path: 'clientes', component: ClientComponent},
    {path: 'financial', component: FinancialComponent}
];
