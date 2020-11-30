import { Col } from "react-bootstrap";

import "./StatusMessage.scss"

type StatusProps = {
  msg: string | null,
  success: boolean
}

function StatusMessage({msg, success}: StatusProps) {
  return (
    <Col
      className={`msg msg__${success ? "success" : "error"}`}
    >
      {msg}
    </Col>
  );
}

export default StatusMessage;