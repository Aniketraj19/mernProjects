const Express = require("express");
const cors = require("cors");
const { Cards } = require("../db/index");
const zod = require("zod");

const route = Express();
route.use(Express.json());
route.use(cors());

const cardValidity = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.string(),
});

route.post("/cards", async (req, res) => {
  const valid = cardValidity.safeParse(req.body);
  if (!valid.success) {
    res.status(404).json({
      msg: "no valid format",
    });
  } else {
    const interests = req.body.interests.split(" ");
    await Cards.create({
      name: req.body.name,
      description: req.body.description,
      interests: interests,
    });
    res.status(200).json({
      msg: "card created",
    });
  }
});

route.get("/cards", async (req, res) => {
  const response = await Cards.find({});
  res.status(200).json({ response });
});
route.listen(3000);
