import { Component } from '@angular/core';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-toggle-appearance-example',
  templateUrl: 'button-toggle-appearance-example.html',
  styleUrls: ['button-toggle-appearance-example.css'],
})
export class ButtonToggleAppearanceExample {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
