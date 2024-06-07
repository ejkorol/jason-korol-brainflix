/* LOGIC */
import { useNavigate } from "react-router-dom";

/* STYLES */
import "./NotFoundPage.scss";

/* COMPONENTS */
import Button from "@/components/Button/Button";

function NotFoundPage() {

  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/");
  };
  
  const notFoundImage = "https://i.kym-cdn.com/entries/icons/facebook/000/018/682/obi-wan.jpg";

  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__image-wrapper">
          <img className="not-found__image" src={notFoundImage} alt="404 image" />
        </div>
        <h1 className="not-found__header">This is not the page you are looking for.</h1>
        <Button role="link" text="take me home" onClick={handleNavigation} />
      </div>
    </section>
  );

};

export default NotFoundPage;
