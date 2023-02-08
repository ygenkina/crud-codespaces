import { deleteContainer } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const deleteCRUDContainer = async (containerURL) => {
  try {
    await deleteContainer(containerURL, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default deleteCRUDContainer;
