import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Products } from './features/products/products';


export const Routes = [
    {path: 'app-home', component: Home},
    {path: 'app-products', component: Products},
];
