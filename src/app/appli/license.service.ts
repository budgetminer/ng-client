import { Injectable } from "@angular/core";
import { License } from './license.model';

@Injectable()
export class LicensesService {
    Licenses: License [] = [];

    addLicense(n: string, v: string) {
        this.Licenses.push(new License(n, v));
    }

    oneLicense() {
        return new License('Test', 'The Best');
    }
}