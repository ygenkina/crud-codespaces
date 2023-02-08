import {
  getThing,
  getSolidDataset,
  getStringNoLocale,
  getUrl,
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import {  defaultContactThingName } from "../constants";
// Using the imports above, fill in the function below:
// Get the UserData SolidDataset from the URL passed in from the component.
// From the SolidDataset, get the contact Thing from the previous exercise.
// Map through the "contactMapping" object to get the value from the Thing.
// Return the output.
// Remember to consider if these should be authenticated calls or not.

export const readUserContactInfo = async (datasetURL) => {
  alert("Complete exercise 07_readUserContactData"); // delete this line

  try {
  
  } catch (e) {
    alert(e);
  }
 
};

export default readUserContactInfo;
