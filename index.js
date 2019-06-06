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
    if (beginningLocation.horizontal === endingLocation.horizontal) {
      return Math.abs(beginningLocation.vertical - endingLocation.vertical);
    }
    else {
      for (let i = 0; i < eastWest.size; i++) {
        if (beginningLocation.horizontal === eastWest[i]) {
          const temp = i;
        }
        if (endingLocation.horizontal === eastWest[i]) {
          const temp2 = i;
        }
      }
      return Math.abs(temp - temp2);
    }
  }

  estimatedTime() {
    blocksTravelled()
  }
}