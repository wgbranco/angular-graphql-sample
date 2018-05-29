import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Injectable()
export class ProfileService {

  constructor(
    private _apollo: Apollo
  ) { }

  loadProfileById(id: string): Observable<ApolloQueryResult<any>>
  {
    return this._apollo
    .query({
      query: gql`
        query {
          refugee(id: " ${id} ") {
            id
            first_name,
            last_name,
            image,
            bio,
            origin_country,
            goals,
            profile_color,
            email,
            id,
            username,
            phone,
            amount_raised
          }
        }
      `
    });
  }

}
