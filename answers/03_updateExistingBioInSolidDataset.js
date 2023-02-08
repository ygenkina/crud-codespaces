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

export const updateExistingBioInSolidDataset = async (datasetURL) => {
  try {
    let userDataset = await getSolidDataset(datasetURL, { fetch });
    const thing = getThing(userDataset, `${datasetURL}#${defaultBioThingName}`);
    if (thing) {
      let updatedThing = setStringNoLocale(
        thing,
        SCHEMA_INRUPT.description,
        userData.bio
      );
      updatedThing = setStringNoLocale(
        updatedThing,
        SCHEMA_INRUPT.name,
        userData.name
      );

      userDataset = setThing(userDataset, updatedThing);
      await saveSolidDatasetAt(datasetURL, userDataset, {
        fetch,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export default updateExistingBioInSolidDataset;
