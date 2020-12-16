const { Router } = require("express");

const response = require("../../../network/response");
const controller = require("./index");

const router = Router();

//Routes

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

//Internal functions
async function list(req, res) {
  try {
    const lista = await controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function get(req, res) {
  try {
    const user = await controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function upsert(req, res) {
  try {
    const user = await controller.upsert(req.body);
    response.success(req, res, user, 201);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

module.exports = router;
