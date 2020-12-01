import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transaction-grid",
  templateUrl: "./transaction-grid.component.html",
  styleUrls: ["./transaction-grid.component.css"]
})
export class TransactionGridComponent implements OnInit {
  dataSource: any[] = [];
  dataGridColumns: string[] = ["Product", "Time"];
  constructor() {}

  ngOnInit() {
    this.AdddefaultRowValues();
  }

  EditorPreparing(e) {
    if (e) {
      if (e.dataField === "Product") {
        e.editorName = "dxTextBox";
        e.editorOptions.onValueChanged = args => {
          e.setValue(args.value);
          console.log("editor options", e.row.rowIndex);
          this.GetDefaultValues(e.row.rowIndex);
        };
      } else if (e.dataField === "Time") {
        e.editorName = "dxDateBox";
        e.editorOptions.type = "time";
        e.editorOptions.displayFormat = "HH:mm";
      } else if (e.dataField === "Dates") {
        e.editorName = "dxDateBox";
        e.editorOptions.dataType = "Date";
        e.editorOptions.displayFormat = "yyyy/MM/dd";
      }
    }
  }

  AddRow(grid) {
    if (grid) {
      grid.instance.addRow();
      grid.instance.saveEditData();
    }
  }

  AdddefaultRowValues() {
    // this.dataSource.push({ Product: "", Time: "" });
  }

  GetDefaultValues(rowNo: number) {
    debugger;
    if (rowNo > -1 && this.dataSource && this.dataSource.length > -1) {
      this.dataSource[rowNo]["Time"] = "10:11";
      this.dataSource[rowNo]["Dates"] = new Date();
    }
  }
}
