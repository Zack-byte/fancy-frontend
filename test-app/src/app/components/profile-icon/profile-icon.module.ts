import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileIconComponent } from "./profile-icon.component";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
    declarations: [ProfileIconComponent],

    exports: [ProfileIconComponent],

    imports: [CommonModule, MatIconModule],
})
export class ProfileIconModule{}