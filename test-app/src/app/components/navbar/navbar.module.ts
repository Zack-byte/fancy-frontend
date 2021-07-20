import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [NavbarComponent],

    exports: [NavbarComponent],

    imports: [CommonModule, MatIconModule, MatButtonModule]
})

export class NavbarModule {}