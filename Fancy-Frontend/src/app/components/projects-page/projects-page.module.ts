import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";

import { ProjectsPageComponent } from "./projects-page.component";

export const routes: Routes = [
    {
        path: '',
        component: ProjectsPageComponent
    },
];

@NgModule({
    declarations: [ProjectsPageComponent],

    exports: [ProjectsPageComponent],

    imports: [CommonModule, RouterModule.forChild(routes), MatDividerModule],
})
export class ProjectsPageModule {}
