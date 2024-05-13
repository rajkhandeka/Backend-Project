//using the promises

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

//Using try-catch block
// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler();
//   } catch (error) {
//     res.status(req.code || 500).json({
//       success: false,
//       message: "error.message",
//     });
//   }
// };
export { asyncHandler };
