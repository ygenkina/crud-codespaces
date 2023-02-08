/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from "react";
import { useSession } from "@inrupt/solid-ui-react";
import { Row, Col, Container, Input } from "reactstrap";
import { getPodUrlAll } from "@inrupt/solid-client";
import {
  handleClick,
  normalizeSafeFileName,
  validateContainerName,
} from "../utils";
import { createCRUDModuleContainer } from "../exercises/00_createCRUDModuleContainer";
import { createUserDataSolidDataset } from "../exercises/01_createUserDataSolidDataset";
import { deleteUserDataSolidDataset } from "../exercises/04_deleteUserDataSolidDataset";
import { readUserDataSolidDataset } from "../exercises/02_readUserDataSolidDataset";
import { updateExistingBioInSolidDataset } from "../exercises/03_updateExistingBioInSolidDataset";
import { addContactDataToSolidDataset } from "../exercises/06_addContactDataToSolidDataset";
import { readUserContactInfo } from "../exercises/07_readUserContactData";
import { deleteBioFromSolidDataset } from "../exercises/05_deleteBioFromSolidDataset";
import { deleteCRUDContainer } from "../exercises/08_deleteContainer";
import { createPDFInContainer } from "../exercises/09_createPDFInContainer";
import { updatePDFInContainer } from "../exercises/11_updatePDFInContainer";
import { readPDFInContainer } from "../exercises/10_readPDFInContainer";
import { deletePDFInContainer } from "../exercises/12_deletePDFInContainer";
import InfoPanel from "../components/infoPanel";
import Discovery from "../components/discovery";

export default function Home(props) {
  const { containerUrl, setContainerUrl } = props;
  const { session } = useSession();
  const fileUpload = useRef(null);
  const fileUpdate = useRef(null);
  const [resumeFileUrl, setResumeFileUrl] = useState("");
  const [containerName, setContainerName] = useState("CRUD_Module/");
  const [podRootUrl, setPodRootUrl] = useState("");
  const [datasetUrl, setDatasetUrl] = useState("");
  const [bio, setBio] = useState("");
  const [userData, setUserData] = useState({});
  const [resumeFileName, setResumeFileName] = useState("");
  const [disabled, setDisabled] = useState(true);

  console.log({
    podRootUrl,
    containerUrl,
    datasetUrl,
    resumeFileUrl,
  });

  useEffect(() => {
    async function getPodAddress() {
      const podURLs = await getPodUrlAll(session.info.webId);
      const iri = podURLs[0];
      setPodRootUrl(iri);
    }
    if (session.info.isLoggedIn) {
      setDisabled(false);
      getPodAddress();
    } else {
      setDisabled(true);
    }
  }, [disabled, session, session.info.isLoggedIn]);

  useEffect(() => {
    if (podRootUrl && containerUrl && containerName) {
      setDatasetUrl(`${podRootUrl + containerName}data`);
    }
  }, [podRootUrl, containerUrl, containerName]);

  const handleCreateContainerClick = async () => {
    const { validated, validationError, value } =
      validateContainerName(containerName);
    if (validated) {
      const containerAddress = podRootUrl + value;
      await createCRUDModuleContainer(containerAddress);
      setContainerUrl(containerAddress);
    }
    if (validationError) console.log(validationError);
  };

  const getFile = (event) => {
    if (event && event.target && event.target.files.length) {
      const file = event.target.files[0];
      return file;
    }
  };
  return (
    <Container>
      <Row>
        <InfoPanel bio={bio} userData={userData} />
        <Col>
          <Row xs="2">
            <Col style={{ alignSelf: "center" }}>
              <Input
                type="text"
                placeholder="Type your container name (include a trailing slash / at the end)"
                defaultValue={containerName}
                onChange={(e) => setContainerName(e.target.value)}
              />
            </Col>
            <Col>
              <button
                className="btn btn-primary"
                onClick={() => handleCreateContainerClick()}
                disabled={disabled}
                type="button"
              >
                Create container
              </button>
            </Col>
          </Row>
          <div className="my-4" />

          <Row>
            <Col>
              <div className="d-grid gap-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={async () => {
                    await createUserDataSolidDataset(datasetUrl);
                  }}
                >
                  Create Bio
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={() => updateExistingBioInSolidDataset(datasetUrl)}
                >
                  Update Bio
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={disabled}
                  onClick={() => {
                    deleteBioFromSolidDataset(datasetUrl);
                  }}
                >
                  Delete Bio
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={async () => {
                    const user = await readUserContactInfo(
                      datasetUrl,
                      session.fetch
                    );
                    if (user) {
                      setUserData({
                        email: user.email,
                        linkedin: user.linkedIn,
                      });
                    }
                  }}
                >
                  Read Contact data
                </button>
              </div>
            </Col>
            <Col>
              <div className="d-grid gap-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={async () => {
                    const userBio = await readUserDataSolidDataset(
                      datasetUrl,
                      session.fetch
                    );
                    setBio(userBio);
                  }}
                >
                  Read Bio
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={disabled}
                  onClick={() => {
                    deleteUserDataSolidDataset(datasetUrl);
                  }}
                >
                  Delete Dataset
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={() => addContactDataToSolidDataset(datasetUrl)}
                >
                  Add Contact data
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={disabled}
                  onClick={() => {
                    deleteCRUDContainer(containerUrl);
                  }}
                >
                  Delete Container
                </button>
              </div>
            </Col>
          </Row>

          <div className="my-4" />
          <Row>
            <Col>
              <div className="d-grid gap-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={() => handleClick(fileUpload)}
                >
                  <label
                    className="custom-file-upload"
                    style={{ display: "none" }}
                  />
                  Upload Resume
                  <input
                    type="file"
                    ref={fileUpload}
                    id="custom-file-upload"
                    accept=".pdf"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = getFile(e);
                      const newFileName = normalizeSafeFileName(file.name);
                      createPDFInContainer(
                        containerUrl,
                        file,
                        newFileName,
                        session.fetch
                      );
                      setResumeFileName(newFileName);
                      setResumeFileUrl(containerUrl + newFileName);
                    }}
                  />
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={() => handleClick(fileUpdate)}
                >
                  <label
                    className="custom-file-update"
                    style={{ display: "none" }}
                  />
                  Update Resume
                  <input
                    type="file"
                    ref={fileUpdate}
                    id="custom-file-update"
                    accept=".pdf"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = getFile(e);
                      updatePDFInContainer(file, resumeFileUrl);
                    }}
                  />
                </button>
              </div>
            </Col>
            <Col>
              <div className="d-grid gap-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={disabled}
                  onClick={() =>
                    readPDFInContainer(
                      resumeFileUrl,
                      resumeFileName,
                      session.fetch
                    )
                  }
                >
                  Download Resume
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={disabled}
                  onClick={() => {
                    deletePDFInContainer(resumeFileUrl);
                  }}
                >
                  Remove Resume
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="my-5" />
      <Discovery />
    </Container>
  );
}
