const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

let toDos = [
  { id: 1, taskName: "Work", isComplate: false },
  { id: 2, taskName: "study", isComplate: false },
  { id: 3, taskName: "football", isComplate: true },
  { id: 4, taskName: "sleap", isComplate: false },
  { id: 5, taskName: "shopping", isComplate: true },
  { id: 6, taskName: "reading", isComplate: false },
  { id: 7, taskName: "waching movie", isComplate: false },
  { id: 8, taskName: "drowing", isComplate: true },
];
////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`server is running`);
});

////////////////////////////////////////////////////

app.get("/tasks", (req, res) => {
  //   res.send("GET request to the homepage") = req.query; تنحط اذا كانت بوست
  //   const query = req.query;
  res.json(toDos);
});

/////////////////////////////////////////////////////

app.get("/isComplate", (req, res) => {
  //   const { id, taskName, isComplate } = req.query;
  const found = toDos.filter((elem) => elem.isComplate == true);
  res.json(found);
});

/////////////////////////////////////////////////////

app.post("/create", (req, res) => {
  const { id, taskName, isComplate } = req.query;
  toDos.push({ id: 9, taskName: "running", isComplate: false });

  res.status(201);
  res.json({ id, taskName, isComplate });
});

///////////////////////////////////////////////////////

app.put("/change/:id/:taskName", (req, res) => {
  const { id, taskName, isComplate } = req.params;
  toDos = toDos.map((elem, i) => {
    if (id == i) {
      return { ...elem, taskName: taskName };
    } else return elem;
  });
  res.json({ id, taskName, isComplate });
});

// ///////////////////////////////////////////////////////

app.delete("/delete/:id", (req, res) => {
  const { id, taskName, isCompleted } = req.params;
  toDos.splice(id, 1);
  res.json(toDos);
});
