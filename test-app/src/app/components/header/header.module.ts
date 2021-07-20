import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarModule } from "../navbar";
import { ProfileIconModule } from "../profile-icon";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [HeaderComponent],

    exports: [HeaderComponent],

    imports: [CommonModule, NavbarModule, ProfileIconModule],
})
export class HeaderModule {}