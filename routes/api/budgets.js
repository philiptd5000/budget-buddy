const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");
const scrapeController = require("../../controllers/scrapeControler")

// Matches with "/api/budgets"
router.route("/")
  .get(budgetController.findAll)
  .post(budgetController.create)
  .put(scrapeController.findArticles)

// Matches with "/api/budgets/:id"
router.route("/:id")
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;