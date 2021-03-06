import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { MenuComponent } from './misc/menu/menu.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';

import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';

import { BoolDisplayPipe } from './misc/bool-display.pipe';
import { UserSearchPipe } from './misc/user-search.pipe';
import { SortPipe } from './misc/sort.pipe';
import { VendorSearchPipe } from './misc/vendor-search.pipe';
import { ProductSearchPipe } from './misc/product-search.pipe';
import { RequestSearchPipe } from './misc/request-search.pipe';
import { ReviewComponent } from './review/review/review.component';
import { ReviewOneComponent } from './review-one/review-one/review-one.component';
import { ContactComponent } from './contact/contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserLoginComponent,
    UserEditComponent,
    UserDetailComponent,
    UserCreateComponent,
    BoolDisplayPipe,
    UserSearchPipe,
    SortPipe,
    MenuComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorSearchPipe,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductSearchPipe,
    RequestListComponent,
    RequestLinesComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestSearchPipe,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    ReviewComponent,
    ReviewOneComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
