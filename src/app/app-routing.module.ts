import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/components/products.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found.component';
import { ProductDetailComponent } from './product-detail/components/product-detail.component';
import { LayoutComponent } from './layout/components/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(
          module => module.HomeModule
        ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(
          module => module.ContactModule
        ),
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
