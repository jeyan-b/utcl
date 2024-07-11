import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './singleDropdown.component.html',
  styleUrl: './singleDropdown.component.scss',
})
export class MatDialogComponent {
  @Input() isDisabled: boolean = false;
  @Input() configuration = {
    selectPlaceHolder: ["A","B"],
    dropdownLabel: "Test"
  };
  @Input() isLabelHidden: boolean = false;
  private _items: Array<any> = [];
  @Input() items: any = [{"key": "Item1", "value":"Item1"}, {"key": "Item2", "value":"Item2"}];
  onSelectionChange(event: Event): void {}
}
