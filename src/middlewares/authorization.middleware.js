export function authorization(permissions){
  return (req, res, next) => {
    const role = req.userCredentials.role;
    if(permissions.includes(role)){
      next();
    } else {
      res.status(401).json({message : "you don't have permissions to use this endpoint"});
    }
  }
}