"use server";
const learnMoreFormAction =
  async (previousState: unknown, formData: FormData) => () => {
    console.log("previousState", previousState);
    console.log("formData", formData);
    return { message: "Done!" };
  };

export default learnMoreFormAction;
