const Event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Deniz", "Mohammed", "Ali", "Matthijs", "Romeo"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

Event.printGuestList();
