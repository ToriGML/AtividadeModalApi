import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AppService {

    constructor(
        private httpClient: HttpClient
    ){ }

    getOlaMundo(): Observable<any> {
        return this.httpClient.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4&sort=name')
    }

 }