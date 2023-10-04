import { Injectable } from "@angular/core";

@Injectable()
export class Base {
    static getBase() {
        let pagina: string = window.location.toString();

        if (pagina.match(".*localhost.*")) {
            return "local";
        }
        if (pagina.match(".*/dev/.*")) {
            return "dev";
        }
        if (pagina.match(".*/hml/.*")) {
            return "hml";
        }
        if (pagina.match(".*/rc/.*")) {
            return "rc";
        }
        return "prd";
    }

    static getUrl() {
        let url;
        switch (Base.getBase()) {
            case 'prd':
                url = ``;
                break;
            case 'rc':
                url = ``;
                break;
            case 'hml':
                url = ``;
                break;
            case 'dev':
                url = ``;
                break;
            case 'local':
                url = `http://localhost:8094/`;
                break;
        }
        return url;
    }
}