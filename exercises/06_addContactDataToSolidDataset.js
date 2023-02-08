import {
  buildThing,
  createThing,
  getSolidDataset,
  saveSolidDatasetAt,
  setThing,
  addUrl,
} from "@inrupt/solid-client";
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultContactThingName } from "../constants";
import userData from "../data/userData.json";

// Using the methods above fill in the function below:
// Get the Solid Dataset that you want to update.
// Using the fluent API, create a contact thing.
// For the Thing:
// - Use the provided defaultContactThingName as its name.
// - Add the following properties and values:
//   - SCHEMA_INRUPT.email property. For its value, use userData.email (value type is string).
//   - SCHEMA_INRUPT.url property. For its value, use userData.linkedin (value type is url).
// Add the Thing to the SolidDataset.
// Save the SolidDataset.
// Remember to consider if these should be authenticated calls or not.

export const addContactDataToSolidDataset = async (datasetURL) => {
  alert("Complete exercise 06_addContactDataToSolidDataset"); // delete this line

  try {
    
  } catch (e) {
    alert(e);
  }
};

export default addContactDataToSolidDataset;
