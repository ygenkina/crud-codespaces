import { createContainerAt } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

// Using the imports above, fill in the function below:
// Create a container in your Pod at the containerURL.
// Remember to consider if this should be an authenticated call or not.

export const createCRUDModuleContainer = async (containerURL) => {
  // alert("Complete exercise 00_createCRUDModuleContainer"); // delete this line
  
  try {
    await createContainerAt( containerURL, { fetch } );

  } catch (e) {
    alert(e);
  }
};

export default createCRUDModuleContainer;
