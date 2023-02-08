import { overwriteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const updatePDFInContainer = async (file, resumeFileURL) => {
  try {
    await overwriteFile(resumeFileURL, file, {
      contentType: "application/pdf",
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default updatePDFInContainer;
