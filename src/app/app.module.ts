import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/components/products.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found.component';
import { ProductDetailComponent } from './product-detail/components/product-detail.component';
import { LayoutComponent } from './layout/components/layout.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
