const ctrlWrapper = async (ctrl, modelInstance) => {
  try {
    modelInstance;
    return await ctrl;
  } catch (error) {
    return {
      code: error.code,
      message: error.message,
    };
  }
};

export default ctrlWrapper;
