import {
  getSolidDataset,
  getThing,
  saveSolidDatasetAt,
  setStringNoLocale,
  setThing,
} from "@inrupt/solid-client";
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultBioThingName } from "../constants";
import userData from "../data/userData.json";

// First, update your name and bio in data/userData.json
// Then, using the imports above, fill in the function below:
// Get the UserData SolidDataset located at the datasetURL.
// From the SolidDataset, get the Bio Thing from the previous exercise.
// - The Thing's URL is SolidDataset's URL appended with the Thing's name as hash fragment.
// Update the bio and name in the Thing, using the updated userData.name and userData.bio.
// Update the SolidDataset with the Thing.
// Save the updated SolidDataset.
// Remember to consider if these should be authenticated calls or not.

export const updateExistingBioInSolidDataset = async (datasetURL) => {
  
  try {
    let myDataSet = await getSolidDataset(datasetURL, {fetch});
    // console.log(myDataSet)
    let myBioThing = getThing(myDataSet, `${datasetURL}#bio`)
    console.log(myBioThing)
    myBioThing = setStringNoLocale(myBioThing, SCHEMA_INRUPT.description, userData.bio)
    console.log(myBioThing)
    myBioThing = setStringNoLocale(myBioThing, SCHEMA_INRUPT.name, userData.name)
    console.log(myBioThing)
    myDataSet = setThing(myDataSet, myBioThing)
    await saveSolidDatasetAt( datasetURL, myDataSet, {fetch});

  } catch (e) {

    alert(e);
  }
};

export default updateExistingBioInSolidDataset;
