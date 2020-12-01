import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { DxDataGridModule, DxSelectBoxModule } from "devextreme-angular";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TransactionGridComponent } from "./transaction-grid/transaction-grid.component";

@NgModule({
  imports: [BrowserModule, FormsModule, DxSelectBoxModule, DxDataGridModule],
  declarations: [AppComponent, HelloComponent, TransactionGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
