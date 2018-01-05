import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name:  'Luke Skywalker', side: ''},
    {name:  'Dart Weider', side: ''}
  ];
  chosenList = 'all'
  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    let filtered;
    if (this.chosenList === 'all') {
      filtered = this.characters.slice();
      return filtered;
    }
    filtered = this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
    return filtered;
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
  }
}
