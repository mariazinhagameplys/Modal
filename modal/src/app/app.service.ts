import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getTags(): Observable<any> {
        return this.httpClient.get<string[]>('https://anapioficeandfire.com/api/books');
    }

}
                   