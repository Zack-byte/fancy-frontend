import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page.component";

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
];

@NgModule({
    declarations: [HomePageComponent], 

    exports: [HomePageComponent],

    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}