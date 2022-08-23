import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from 'src/app/shared/models/tab';

@Component({
  selector: 'app-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css'],
})
export class TabSelectorComponent implements OnInit {
  @Input()
  tabs: Tab[] = [];
  currentTab: string = '';

  @Output()
  currentTabEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.currentTab = this.tabs[0]?.value;
  }

  selectTab(type: string) {
    this.currentTab = type;
    this.currentTabEmitter.emit(this.currentTab);
  }
}
