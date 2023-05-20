// import required essentials
const express = require("express");
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  {
    id: 1,
    title: "Create a project",
    order: 1,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 2,
    title: "Take a cofféé",
    order: 2,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 3,
    title: "Write new article",
    order: 3,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 4,
    title: "Walk toward home",
    order: 4,
    completed: false,
    createdOn: new Date(),
  },
  {
    id: 5,
    title: "Have some dinner",
    order: 5,
    completed: false,
    createdOn: new Date(),
  },
];

// to get all the data
router.get("/", function (req, res) {
  res.status(200).json(data);
});
// to get data from specific id
router.get("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.send("Data no found");
  }
});
// to delete the data with the id
router.delete("/:id", function (req, res) {
  let index = data.findIndex(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (index !== -1) {
    data.splice(index, 1);
    res.send("successfully deleted");
  } else {
    res.send("Index you have send is not found");
  }
});
// to add the data
router.post("/", function (req, res) {
  const valueToAdd = req.body;
  const exists = data.find(item => item.id === valueToAdd.id);
  if (!exists) {
      data.push(valueToAdd);
      res.send("Successfully Added")
  }else res.send("Data exists already with the same id");
})


module.exports = router;