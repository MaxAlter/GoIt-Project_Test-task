"use strict";

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
builder.prepend("^");
builder.pad("=");
console.log(builder.value); // '=^.^='
