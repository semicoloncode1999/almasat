import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/cores/services/products.service';
import { strapiEnvironment as env } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prod-detail-strapi',
  templateUrl: './prod-detail-strapi.component.html',
  styleUrls: ['./prod-detail-strapi.component.scss']
})
export class ProdDetailStrapiComponent implements OnInit {

  url: string = env.Api_URL;
  productId: number = 0;
  product: any = {};

  posts: any;
  updatePostId: number = 0;
  postForm: FormGroup;

  constructor(private http: HttpClient, private productServ: ProductsService,
    private _ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.productId = Number(_ActivatedRoute.snapshot.paramMap.get('id') ?? 0)
    this.postForm = formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  ngOnInit() {
    this.productServ.getProductById(this.productId).subscribe((res: any) => this.product = res.data)
    // this.getPosts()
    this._ActivatedRoute.data.subscribe({
      next: (res: any) => this.posts = res.posts.data,
      error: ((error: any) => console.error(error.message + '*********')),
      complete: () => { }
    })
  }

  getPosts() {
    this.productServ.getPosts().subscribe({
      next: (res: any) => this.posts = res.data,
      error: ((error: any) => console.error(error.message + '*********')),
      complete: () => { }
    })
  }

  edit(item: any) {
    this.postForm.patchValue({
      title: item.title,
      description: item.description
    })
    this.updatePostId =item.id

  }

  submit() {
    let value = {
      data: this.postForm.value
    }
    if (this.updatePostId ==0)
      this.productServ.createPost(value).subscribe({
        next: (res: any) => this.getPosts(),
        error: ((error: any) => console.error(error.message + '*********')),
        complete: () => { this.postForm.reset()}
      });
    else {
      
      this.productServ.editPost(this.updatePostId, this.postForm.value.title).subscribe({
        next: (res: any) => this.getPosts(),
        error: ((error: any) => console.error(error.message + '*********')),
        complete: () => { this.postForm.reset()}
      })
    }
  }
}
