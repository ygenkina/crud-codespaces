import {
  getSolidDataset,
  getStringNoLocale,
  getThing,
} from "@inrupt/solid-client";
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultBioThingName } from "../constants";

export const readUserDataSolidDataset = async (datasetURL) => {
  let output = "";
  try {
    const userDataset = await getSolidDataset(datasetURL, {
      fetch,
    });
    const thing = getThing(userDataset, `${datasetURL}#${defaultBioThingName}`);
    const name = getStringNoLocale(thing, SCHEMA_INRUPT.name);
    const desc = getStringNoLocale(thing, SCHEMA_INRUPT.description);
    output += `${name}: ${desc}`;

    return output;
  } catch (e) {
    console.log(e);
  }
};

export default readUserDataSolidDataset;
