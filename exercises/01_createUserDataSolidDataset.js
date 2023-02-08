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

// Using the imports above, fill in the function below:

// Create a SolidDataset in memory. (We will save this to the Pod later)
// Create a biography Thing in memory.
// For the Thing,
// - Use the provided defaultBioThingName as its name.
// - Add the following properties and values:
//   - RDF.type property. For its value, use SCHEMA_INRUPT.Person (value type is URL).
//   - SCHEMA_INRUPT.name property. For its value, type a name (value type is string).
//   - SCHEMA_INRUPT.description property. For its value, type a brief bio (value type is string).
// Set the Thing to the SolidDataset.
// Save the SolidDataset at the datasetURL.
// Remember to consider if these should be authenticated calls or not.

export const createUserDataSolidDataset = async (datasetURL) => {
 // alert("Complete exercise 01_createUserDataSolidDataset"); // delete this line
 let myDataset = createSolidDataset();
 
//  const biography = buildThing(createThing({ name: defaultBioThingName }))
// .addUrl(RDF.type, SCHEMA_INRUPT.Person)
//    .addStringNoLocale(SCHEMA_INRUPT.name, "Yulia")
//    .addStringNoLocale(SCHEMA_INRUPT.description, "hello world")
//    .build();

let myBioThing = createThing({name: defaultBioThingName});
myBioThing = addUrl(myBioThing,RDF.type, SCHEMA_INRUPT.Person );
myBioThing = addStringNoLocale(myBioThing, SCHEMA_INRUPT.name, "Yulia");
myBioThing = addStringNoLocale(myBioThing,SCHEMA_INRUPT.description, "hello world")

myDataset = setThing(myDataset, myBioThing);

  try {

    await saveSolidDatasetAt(datasetURL, myDataset, {fetch});

  } catch (e) {
    alert(e);
  }
};

export default createUserDataSolidDataset;
