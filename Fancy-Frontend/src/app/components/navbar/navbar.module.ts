import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";


import { NavbarComponent } from "./navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [NavbarComponent],

    exports: [NavbarComponent],

    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatTooltipModule,
    ]
})

export class NavbarModule {}
