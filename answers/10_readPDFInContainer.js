import { getFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { downloadFile } from "../utils";

export const readPDFInContainer = async (resumeFileURL, fileName) => {
  try {
    const file = await getFile(resumeFileURL, {
      fetch,
    });
    downloadFile(file, fileName);
  } catch (e) {
    console.log(e);
  }
};

export default readPDFInContainer;
