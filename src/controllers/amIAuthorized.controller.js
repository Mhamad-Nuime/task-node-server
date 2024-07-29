export const amIAuthorized = (req, res) => {
  res.status(200).json({message: 'yes, you are authorized',id : req.userId});
}