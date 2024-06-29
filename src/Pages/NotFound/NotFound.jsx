import { useNavigate } from "react-router-dom";

export default function NotFound() {
  let history = useNavigate();
  return (
    <div>
      <p>Not Found page</p>
      <button onClick={() => history(-1)}>Back</button>
    </div>
  );
}
