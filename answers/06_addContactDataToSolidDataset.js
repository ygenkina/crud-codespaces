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

export const addContactDataToSolidDataset = async (datasetURL) => {
  try {
    let userDataset = await getSolidDataset(datasetURL, { fetch });

    const myContactThing = buildThing(
      createThing({ name: defaultContactThingName })
    )
      .addStringNoLocale(SCHEMA_INRUPT.email, userData.email)
      .addUrl(SCHEMA_INRUPT.url, userData.linkedin)
      .build();

    userDataset = setThing(userDataset, myContactThing);
    await saveSolidDatasetAt(datasetURL, userDataset, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default addContactDataToSolidDataset;
