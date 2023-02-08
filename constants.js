import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";

export const contactMapping = {
  PROPERTY_EMAIL: { predicate: SCHEMA_INRUPT.email, type: "String" },
  PROPERTY_LINKEDIN: { predicate: SCHEMA_INRUPT.url, type: "Url" },
};

export const defaultBioThingName = "bio";
export const defaultContactThingName = "contact";
