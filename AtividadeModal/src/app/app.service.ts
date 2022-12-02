import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AppService {

    constructor(
        private httpClient: HttpClient
    ){ }

    getOlaMundo(): Observable<any> {
        return this.httpClient.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date')
    }

 }