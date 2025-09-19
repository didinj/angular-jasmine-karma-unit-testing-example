import { TestBed } from '@angular/core/testing';

import { Post, Posts } from './posts';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Posts', () => {
  let service: Posts;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        Posts,
      ]
    });

    service = TestBed.inject(Posts);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures no outstanding requests
  });

  it('should fetch all posts', () => {
    const dummyPosts: Post[] = [
      { id: 1, title: 'Post 1', body: 'Content 1' },
      { id: 2, title: 'Post 2', body: 'Content 2' }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts); // simulate server response
  });

  it('should fetch a post by ID', () => {
    const dummyPost: Post = { id: 99, title: 'Test Post', body: 'Test Content' };

    service.getPostById(99).subscribe(post => {
      expect(post).toEqual(dummyPost);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/99');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPost);
  });
});
