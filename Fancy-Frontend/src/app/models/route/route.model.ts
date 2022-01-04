import { NavigationExtras, Params } from '@angular/router';
export declare class Route {
    extras: NavigationExtras;
    params: Params;
    path: any;
    queryParams: Params;
    url: string;
    constructor(o?: Partial<Route>);
}
