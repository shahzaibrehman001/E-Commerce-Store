import { Routes } from '@angular/router';
import { HomeComponent } from './Module/pages/components/home/home.component';
import { ProductsComponent } from './Module/pages/components/products/products.component';
import { CartComponent } from './Module/pages/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/pages/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/pages/components/checkout/checkout.component';
import { PaymentComponent } from './Module/pages/components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/pages/components/payment-success/payment-success.component';
import { OrderComponent } from './Module/pages/components/order/order.component';
import { OrderDetailsComponent } from './Module/pages/components/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';

export const routes: Routes = [
    { path: 'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>AdminRoutingModule) },
    { path: "", component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'checkout/payment/:id', component: PaymentComponent },
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'account/orders', component: OrderComponent },
    { path: 'order/:id', component: OrderDetailsComponent },
    { path: ':levelOne/:levelTwo/:levelThree', component: ProductsComponent },
];
