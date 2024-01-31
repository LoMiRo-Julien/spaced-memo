import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Route404 = () => {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          width: "50%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div class="notfound-404">
          <h1 style={{ fontSize: "144px", color: "black" }}>
            4<span style={{ color: "red" }}>0</span>4
          </h1>
        </div>
        <Button
          style={{ width: "200px", justifyContent: "center" }}
          onClick={() => navigate("/spaced-memo/cours")}
        >
          Revenir au cour
        </Button>
        <h2>the page you requested could not found</h2>
      </div>
    </div>
  );
};

export default Route404;
