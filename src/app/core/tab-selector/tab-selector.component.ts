import { Component, OnInit } from '@angular/core';

interface Tab { 
  text: string;
  value: string;
}

@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css'],
})
export class TabSelectorComponent implements OnInit {
  currentTab: string = '';

  tabs: Tab[] = []

  constructor(tabs: Array<Tab>) {
    this.tabs = tabs;
    this.currentTab = this.tabs[0]?.value;
  }

  ngOnInit(): void {}

  selectTab(type: string) {
    this.currentTab = type;
  }
}
