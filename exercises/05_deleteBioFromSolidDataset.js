import {
  getSolidDataset,
  removeThing,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultBioThingName } from "../constants";

// Using the imports above, fill in the function below:
// Get the UserData SolidDataset located at the datasetURL.
// From the SolidDataset, remove the Bio Thing.
// - The Thing's URL is SolidDataset's URL appended with the Thing's name as hash fragment.
// Save the updated SolidDataset
// Remember to consider if these should be authenticated calls or not.

export const deleteBioFromSolidDataset = async (datasetURL) => {
  alert("Complete exercise 05_deleteBioFromSolidDataset"); // delete this line

  try {
    
  } catch (e) {
    alert(e);
  }
};

export default deleteBioFromSolidDataset;
