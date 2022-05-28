// @desc  Get Goals
// @route  api/goals
// @access  private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
};
// @desc  Set Goals
// @route  api/goals
// @access  private
const setGoal = (req, res) => {

  if (!req.body.text) {
    res.status(400)
    throw new Error("Please fill up the text field");
  };
  
  res.status(200).json({
    message: "set goals",
  });
};
// @desc  Update Goals
// @route  api/goals/:id
// @access  private
const updateGoal = (req, res) => {
  res.status(200).json({
    message: `update goals ${req.params.id}`,
  });
};
// @desc  Delete Goals
// @route  api/goals/:id
// @access  private
const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `delete goals ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
