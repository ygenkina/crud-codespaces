import { saveFileInContainer } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const createPDFInContainer = async (containerURL, file, fileName) => {
  try {
    await saveFileInContainer(containerURL, file, {
      slug: fileName,
      contentType: "application/pdf",
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default createPDFInContainer;
