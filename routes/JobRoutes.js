const router = require("express").Router();

const JobController = require("../controllers/JobController");

router.post("/", JobController.createJob);

router.get("/:id", JobController.getJob);
router.get('/search/:key',JobController.searchJobs);
router.put("/:id", JobController.updateJob);

router.delete("/:id", JobController.deleteJob);

router.get("/", JobController.getAllJobs);

module.exports = router;
