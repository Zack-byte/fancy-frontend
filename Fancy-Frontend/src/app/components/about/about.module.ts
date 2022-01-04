import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [AboutComponent],

    exports: [AboutComponent],

    imports: [CommonModule, MatDividerModule],
})
export class AboutModule {}
