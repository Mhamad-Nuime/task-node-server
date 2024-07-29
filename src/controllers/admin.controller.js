export const adminController = (req, res) => {
  res.status(200).json({message: "this message can be showed only for administrators"});
}