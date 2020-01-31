import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ImaskComponent } from "./imask/imask.component";
import { InputMaskComponent } from "./input-mask/input-mask.component";
import { TextMaskComponent } from "./text-mask/text-mask.component";
import { HosterComponent } from "./hoster/hoster.component";
import { CleaveJsComponent } from './cleave-js/cleave-js.component';

const routes: Routes = [
  {
    path: "",
    component: HosterComponent,
    children: [
      { path: "mask/imask", component: ImaskComponent },
      { path: "mask/input-mask", component: InputMaskComponent },
      { path: "mask/text-mask", component: TextMaskComponent },
      { path: "mask/cleaver-js", component: CleaveJsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
