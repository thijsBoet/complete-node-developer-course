require("../src/db/mongoose");
const User = require("../src/models/user");


// User.findOneAndUpdate("5ffb28183295c539c084aad9", {
//   email: "creative.steve@gmail.com",
// })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ email: "m.boet@chello.nl" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });


const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })

  return {
    user,
    count,
  }
}

updateAgeAndCount("5ffb28183295c539c084aad9", 40)
  .then((user, count) => {
    console.log(user);
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });