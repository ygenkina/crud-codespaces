import {
  addStringNoLocale,
  addUrl,
  buildThing,
  createSolidDataset,
  createThing,
  saveSolidDatasetAt,
  setThing,
} from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { SCHEMA_INRUPT, RDF } from "@inrupt/vocab-common-rdf";
import { defaultBioThingName } from "../constants";
import userData from "../data/userData.json";

export const createUserDataSolidDataset = async (datasetURL) => {
  let userSolidDataset = createSolidDataset();
  let myBioThing = createThing({ name: defaultBioThingName });
  myBioThing = addUrl(myBioThing, RDF.type, SCHEMA_INRUPT.Person);
  myBioThing = addStringNoLocale(
    myBioThing,
    SCHEMA_INRUPT.description,
    "Here is my brief bio!"
  );
  myBioThing = addStringNoLocale(
    myBioThing,
    SCHEMA_INRUPT.name,
    "Solid Developer"
  );
  userSolidDataset = setThing(userSolidDataset, myBioThing);
  try {
    await saveSolidDatasetAt(datasetURL, userSolidDataset, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createUserDataSolidDatasetFluent = async (datasetURL) => {
  let userSolidDataset = createSolidDataset();
  const myBioThing = buildThing(createThing({ name: defaultBioThingName }))
    .addUrl(RDF.type, SCHEMA_INRUPT.Person)
    .addStringNoLocale(SCHEMA_INRUPT.description, "Here is my brief bio!")
    .addStringNoLocale(SCHEMA_INRUPT.name, "Solid Developer")
    .build();

  userSolidDataset = setThing(userSolidDataset, myBioThing);
  try {
    await saveSolidDatasetAt(datasetURL, userSolidDataset, {
      fetch,
    });
  } catch (e) {
    console.log(e);
  }
};

export default createUserDataSolidDataset;
