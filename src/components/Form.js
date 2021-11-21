import { useState } from "react";
import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ handleFetchGitHubData }) => {
  const [Username, setUsername] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    handleFetchGitHubData(Username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup
        Id="Username"
        Label="Username"
        Type="text"
        Value={Username}
        Placeholder="Enter your GitHub Username."
        onChange={e => {
          setUsername(e.target.value);
        }}
        Desc="Enter your GitHub Username."
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={Username.trim().length < 2}
      >
        Generate Badge
      </button>
    </form>
  );
};

export default Form;
