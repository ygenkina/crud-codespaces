import { deleteSolidDataset } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

export const deleteUserDataSolidDataset = async (datasetURL) => {
  try {
    await deleteSolidDataset(datasetURL, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default deleteUserDataSolidDataset;
