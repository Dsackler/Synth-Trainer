import React, { useState } from "react";
import {
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./SignIn.css";
import { useEffect } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const emailRegExp = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    setEmail(value);
  };

  const renderInvalidEmailMessage = (props) => {
    if (isValidEmail) {
      return (<div></div>)
    } else {
      return(
        <Tooltip id="invalid-email-message" show={!isValidEmail} {...props}>
          Please Enter a Valid Email
        </Tooltip>
      );
    }
  };

  useEffect(() => {
    setIsValidEmail(emailRegExp.test(email));
  });

  return (
    <div>
      <InputGroup controlId="formBasicEmail">
        <InputGroup.Prepend>
          <InputGroup.Text>Email address</InputGroup.Text>
        </InputGroup.Prepend>
        <OverlayTrigger
          placement="bottom-start"
          delay={{ show: 250, hide: 400 }}
          trigger={"hover"}
          overlay={renderInvalidEmailMessage}
        >
          <FormControl
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            isInvalid={!isValidEmail}
            isValid={isValidEmail}
            onChange={(event) => onChangeHandler(event)}
          />
        </OverlayTrigger>
      </InputGroup>
    </div>
  );
};
export default EmailForm;
