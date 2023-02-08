import React, { useEffect, useState } from "react";
import { LogoutButton, useSession } from "@inrupt/solid-ui-react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { login, logout } from "@inrupt/solid-client-authn-browser";

function TopNavigation(props) {
  const { containerIri } = props;
  const { session } = useSession();

  return (
    <div>
      <Navbar color="light" expand="md" className="mb-4" container light>
        <NavbarBrand>Solid Code Along</NavbarBrand>

        {!session.info.isLoggedIn && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() =>
              session.login({
                oidcIssuer: "https://login.inrupt.com/",
                clientName: "CRUD Code Along",
              })
            }
          >
            Log In
          </button>
        )}

        {session.info.isLoggedIn && (
          <NavbarText className="me-2 text-end" tag="div">
            Logged in as {session.info.webId}
          </NavbarText>
        )}
        {containerIri && (
          <div
            className=" position-relative"
            data-bs-toggle="popover"
            id="notification-popover-button"
          >
            <svg
              className="position-relative"
              id="notification-popover-button"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="#7C4DFF"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
        )}
        {session.info.isLoggedIn && (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => session.logout()}
          >
            Log Out
          </button>
        )}
      </Navbar>
    </div>
  );
}

export default TopNavigation;
