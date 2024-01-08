# Random Data Generator

This package contains a random data generator module that can be used to generate various types of random data.

## Installation

To install the module, you can use npm:

```bash
    npm install random-data-gen
```

## Usage

To use the module, you can import it into your project:

```javascript
const { person, signals, time } = require("random-data-gen");

console.log(person.randomPerson());
/*
{
  gender: 'Male',
  name: 'Jeremiah',
  lastName: 'Torres',
  email: 'jeremiah.torres@xyz.info',
  phoneNumber: '(354) 769-4958',
  password: 'lJ_IahH+x^vZP6j6',
  streetAddress: 'Cedar Boulevard',
  city: 'Lower South Lewoodland',
  zipCode: '48546'
}
*/
console.log(signals.triangle(20, 10, 15, 0));
//[ 0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 13.5, 12, 10.5, 9, 7.5, 6, 4.5, 3, 1.5]
console.log(time.generateTimeSeries("2019-01-01", 100, 1));
//['2019-01-01T00:00:00.000Z', '2019-01-01T00:00:01.000Z', ... ,  '2019-01-01T00:01:39.000Z'];
```

## Documentation

Work in progress
