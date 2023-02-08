import React, { useState } from "react";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { Row, Col, Container, Input } from "reactstrap";

export default function Discovery() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState("");

  const performGet = async (url) => {
    fetch(url, {
      method: "GET",
      headers: { Accept: "text/turtle, application/json" },
    })
      .then((response) => response.text())
      .then((d) => {
        setData(d);
      })
      .catch((error) => {
        setData(error);
      });
  };

  return (
    <Container>
      <div className="d-grid gap-1">
        <Row
          xs="2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Input
            type="url"
            placeholder="Type your URL here"
            value={inputText}
            id="discovery-input"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={() => performGet(inputText)}
            id="discovery-button"
            type="button"
            className="btn btn-primary"
          >
            Fetch data
          </button>
        </Row>
        <Row style={{ width: "100%" }}>
          <textarea
            id="discovery-response-body"
            className="code-font"
            value={data}
            readOnly
          />
        </Row>
      </div>
    </Container>
  );
}
