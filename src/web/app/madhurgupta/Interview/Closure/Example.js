"use strict";
this.table = "window table";

const cleanTable = function (soap) {
  /*1. To use this in inner function
 let _this = this;
 const innerFunction = function(soap){
    console.log(`cleaning ${_this.table} using ${soap}`);
 }*/

  /* 
const innerFunction = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
 }
 */
  //2. passing this though call
  //innerFunction.call(this,soap);

  //3. passing this though bind
  //innerFunction.bind(this)(soap);

  //4. using as Arrow function
  const innerFunction = (soap) => {
    console.log(`cleaning ${this.table} using ${soap}`);
  };
  innerFunction(soap);
};

this.garage = {
  table: "Garage Table",
};
//1. plain way
let johnRoom = {
  table: "Johns Room",
};
//2. can also use new and have constructor
let createRoom = function (name) {
  this.table = `${name}s table`;
};
createRoom.prototype.cleanTable = function (soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};

//3. can create class
class RoomClass {
  constructor(name) {
    this.table = `${name}s table`;
  }
  cleanTable(soap) {
    console.log("Fromm class");
    console.log(`cleaning ${this.table} using ${soap}`);
  }
}

const jillRoom = new createRoom("jill");
const WoodRoom = new RoomClass("Wood");

jillRoom.cleanTable("Washing Liquid");
WoodRoom.cleanTable("Washing Liquid");

cleanTable.call(this, "some soap");
cleanTable.call(this.garage, "some soap");
cleanTable.call(johnRoom, "some soap");
