# OpenSkill for Google Apps Script

This project is Google Apps Script library which export
[openskill.js](https://github.com/philihp/openskill.js) functionalities.

## Adding the library to your project

Add the OpenSkill library with the below script ID and `OpenSkill` as identifier.

Script ID: `14L7tf5NEPVY34laI7JughMK9hFovfuMxTSdJcWRmxM8oidzvvtS5LKsx`

## Usage

```js
function testOpenSkill() {
  const { rating, rate, ordinal } = OpenSkill.openskill;
  const r1 = rating();
  const r2 = rating({ mu: 32.444, sigma: 5.123 });
  const r3 = rating({ mu: 34});
  const r4 = rating();
  console.log(r1, r2, r3, r4);
  const [[n1, n2], [n3, n4]] = rate([[r1, r2], [r3, r4]])
  console.log(n1, n2, n3, n4);

  console.log(ordinal(n1));
  console.log(ordinal(n2));
  console.log(ordinal(n3));
  console.log(ordinal(n4));
}
```
