const Job = require("../models/Job");

module.exports = {
  createJob: async (req, res) => {
    const newJob = new Job(req.body);

    try {
      await newJob.save();
      res
        .status(201)
        .json({ status: "success", messaging: "Job created successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateJob: async (req, res) => {
    const jobId = req.params.id;
    const jobUpdate = req.body;

    try {
      const updateJob = await Job.findByIdandUpdate(jobId, jobUpdate, {
        new: true,
      });
      if (!updateJob) {
        res.status(404).json({ status: false, message: "Job not found" });
      }
      res
        .status(200)
        .json({ status: "success", messaging: "Job updated successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteJob: async (req, res) => {
    const jobId = req.params.id;

    try {
      const deleteJob = await Job.findByIdAndDelete(jobId);
      if (!deleteJob) {
        res.status(404).json({ status: false, message: "Job not found" });
      }
      res
        .status(200)
        .json({ status: "success", messaging: "Job deleted successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getJob: async (req, res) => {
    const jobId = req.params.id;

    try {
      const getJob = await Job.findById(jobId);
      if (!getJob) {
        res.status(404).json({ status: false, message: "Job not found" });
      }
      res.status(200).json({ status: "success", data: getJob });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
