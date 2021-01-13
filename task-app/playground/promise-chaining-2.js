require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ffcb90be437ca13b0482953").then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false }).then((result) => {
//     console.log(result)
//   }).catch((e) => {
//     console.log(e)
//   })
// });

const deleteTaskAndUpdate = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count
}

deleteTaskAndUpdate("5ffcb90be437ca13b0482953").then(count => {
  console.log(count);
}).catch((error) => {
  console.log(error)
});