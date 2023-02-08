import { deleteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const deletePDFInContainer = async (resumeFileURL) => {
  try {
    await deleteFile(resumeFileURL, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default deletePDFInContainer;
