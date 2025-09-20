import photo from "../../assets/photos.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={photo} alt="photo" />
      </div>
      <div className="text-container">
        <h1>Rizki Kurnia</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorem
          ratione voluptas cupiditate porro repellat sapiente, similique labore
          sed tempora? Ipsam corporis illum error magni, consectetur vel placeat
          animi harum!
        </p>
      </div>
    </div>
  );
};

export default About;
