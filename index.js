class Driver {
  constructor(name, string) {
    this.name = name;
    this.string = string;
  }

  startDate() {
    return Date.prototype.getFullYear();
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

  blocksTravelled() {
    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
      return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
    else {
      for (let i = 0; i < eastWest.size; i++) {
        if (this.beginningLocation.horizontal === eastWest[i]) {
          const temp = i;
        }
        if (this.endingLocation.horizontal === eastWest[i]) {
          const temp2 = i;
        }
      }
      return Math.abs(temp - temp2);
    }
  }

  estimatedTime(boolean) {
    if (boolean === true) {
      return Math.round(blocksTravelled() / 2);
    }
    else {
      return Math.round(blocksTravelled() / 3);
    }
  }
}
