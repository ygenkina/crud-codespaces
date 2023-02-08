import {
  getThing,
  getSolidDataset,
  getStringNoLocale,
  getUrl,
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { defaultBioThingName } from "../constants";

export const readUserContactInfo = async (datasetURL) => {
  const output = {};
  try {
    const userDataset = await getSolidDataset(datasetURL, {
      fetch,
    });
    const thing = getThing(userDataset, `${datasetURL}#${defaultBioThingName}`);
    const email = getStringNoLocale(thing, SCHEMA_INRUPT.email);
    const linkedIn = getUrl(thing, SCHEMA_INRUPT.url);
    return { email, linkedIn };
  } catch (e) {
    console.log(e);
  }
};

export default readUserContactInfo;
