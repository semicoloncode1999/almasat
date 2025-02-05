import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsService } from 'src/app/cores/services/products.service';
import { strapiEnvironment } from 'src/environments/environment';

export const postsStrapiResolver: ResolveFn<any> = (route, state) => {

  // const http :HttpClient= inject(HttpClient);
  // return http.get(strapiEnvironment.Api_URL + 'posts');


  const productsServ :any= inject(ProductsService);
  return productsServ.getPosts();

};
