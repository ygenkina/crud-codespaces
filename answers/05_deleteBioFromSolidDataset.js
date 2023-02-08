import {
  getSolidDataset,
  removeThing,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultBioThingName } from "../constants";

export const deleteBioFromSolidDataset = async (datasetURL) => {
  try {
    let userDataset = await getSolidDataset(datasetURL, { fetch });

    userDataset = removeThing(
      userDataset,
      `${datasetURL}#${defaultBioThingName}`
    );
    await saveSolidDatasetAt(datasetURL, userDataset, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default deleteBioFromSolidDataset;
