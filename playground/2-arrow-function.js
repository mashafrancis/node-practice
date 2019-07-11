// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x
// };

// const square = (x) => x * x;
//
// console.log(square(16));

const event = {
  name: 'Birthday Party',
  guestList: ['Francis', 'Masha', 'Stephen'],
  // printGuestList: function () {
  //   console.log('Guest list for ' + this.name)
  // }
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    })
  }
};

event.printGuestList();
