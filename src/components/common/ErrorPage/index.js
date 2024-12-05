import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import { HOME_URL } from "constants/urls";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate(HOME_URL)}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
