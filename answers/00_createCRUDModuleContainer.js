import { createContainerAt } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const createCRUDModuleContainer = async (containerURL) => {
  try {
    await createContainerAt(containerURL, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default createCRUDModuleContainer;
