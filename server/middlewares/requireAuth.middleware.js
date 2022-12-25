const privateKey = process.env.Private_Key;

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (privateKey !== authorization) {
      return res
        .status(401)
        .json({ status: 401, message: 'Please Re-login' });
    } else {
      return res.status(200).json({
        status: 200,
        message: 'admin Authentication successfully',
      });
    }
  } catch (error) {
    return res
      .status(404)
      .send({ status: 404, message: 'Admin not found' });
  }
};

module.exports = requireAuth;
