import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  KENDO_BUTTON,
  KENDO_CHIP,
  ChipComponent,
} from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-root',
  template: `
      <p><span style="font-weight: bold;">button font-family:</span> {{fontFamilyButton}}</p>
       <button
        kendoButton
        [themeColor]="'primary'"
        #buttonRef
      >
        User Settings
      </button>
      <hr style="margin: 20px 0">
      <p><span style="font-weight: bold;">h3 font-family:</span> {{fontFamilyH3Heading}}</p>
      <h3 #h3HeadingRef>H3 Heading</h3>
      <hr style="margin: 20px 0">
      <p><span style="font-weight: bold;">kendo-chip font-family:</span> {{fontFamilyKendoChip}}</p>
      <kendo-chip
        themeColor="info"
        label="Kendo Chip"
        #kendoChipRef>
        
      </kendo-chip>
  `,
  standalone: true,
  imports: [KENDO_BUTTON, KENDO_CHIP],
})
export class App implements AfterViewInit {
  @ViewChild('buttonRef', { static: true }) buttonRef!: ElementRef;
  @ViewChild('h3HeadingRef', { static: true }) h3HeadingRef!: ElementRef;
  @ViewChild('kendoChipRef', { static: true }) kendoChipRef!: ChipComponent;

  fontFamilyButton: string = '';
  fontFamilyH3Heading: string = '';
  fontFamilyKendoChip: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      const computedButtonStyle = window.getComputedStyle(
        this.buttonRef?.nativeElement ?? null
      );
      const computedH3HeadingStyle = window.getComputedStyle(
        this.h3HeadingRef?.nativeElement ?? null
      );

      const kendoChipLabelElement = this.kendoChipRef?.element.nativeElement;
      const computedKendoChipStyle = window.getComputedStyle(
        kendoChipLabelElement
      );

      this.fontFamilyButton = computedButtonStyle.fontFamily;
      this.fontFamilyH3Heading = computedH3HeadingStyle.fontFamily;
      this.fontFamilyKendoChip = computedKendoChipStyle.fontFamily;
    }, 300);
  }
}

bootstrapApplication(App);
