import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

// Arreglo de rutas, el path es la url
const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent } // cualquier ruta no definida mostrara componente nopagefound
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true}); // forRoot() porque son rutas principales
