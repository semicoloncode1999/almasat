import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postsStrapiResolver } from './posts-strapi.resolver';

describe('postsStrapiResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => postsStrapiResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
