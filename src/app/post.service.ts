import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://learning-angular-ec86b-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://learning-angular-ec86b-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://learning-angular-ec86b-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'json',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // console.log(event.body);
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }

  getPosts() {
    this.http
      .get<{ message: String; posts: any }>('http://localhost:3000/api/posts')
      .pipe(
        map((postData) => {
          return postData.posts.map((post) => {
            return { title: post.title, content: post.content, id: post._id };
          });
        })
      )
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
      });
  }

  addPosts(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
