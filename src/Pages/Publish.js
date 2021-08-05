import { useState } from "react";
import axios from "axios";
import "./Publish.css";

export default function Publish({token}) {
    //  token ? <div>vous etes sur Publish</div> :
    //  <Redirect to="/login"/>
    const [file, setFile] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    return (
        <div className="publish-main">
      <div className="publish-container">
        <h2>Vends ton article</h2>
        <form
          onSubmit={async e => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("files", file);
            formData.append("title", title);

            try {
              const response = await axios.post(
                "http://localhost:3100/api/offer/publish",
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                  }
                }
              );

              alert(JSON.stringify(response.data));
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
        <div className="file-select">
           <div className="preview-without">
            <input
            type="file"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
            />
            </div>
        </div>

        <div className="text-input-section">
              <div className="text-input">
                <h4>Titre</h4>
              <input
              placeholder="ex: Chemise Sézane verte"
                type="text"
                onChange={event => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
              </div>
              <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
              placeholder="Ex : porté quelque fois, taille correctement"
              onChange={event => {
                setDescription(event.target.value);}}
              value={description}
              cols="30"
              rows="10"
              />
              </div>
        </div>  

        <div className="text-input-section">
              <div className="text-input">
                <h4>Marque</h4>
              <input
              placeholder="ex: Zara"
                type="text"
                onChange={event => {
                  setBrand(event.target.value);
                }}
                value={brand}
              />
              </div>
              <div className="text-input">
                <h4>Taille</h4>
              <input
              placeholder="ex: L / 40 / 12"
                type="text"
                onChange={event => {
                  setSize(event.target.value);
                }}
                value={size}
              />
              </div>
              <div className="text-input">
                <h4>Couleur</h4>
              <input
              placeholder="ex: Fushia"
                type="text"
                onChange={event => {
                  setColor(event.target.value);
                }}
                value={color}
              />
              </div>
              <div className="text-input">
                <h4>Etat</h4>
              <input
              placeholder="Neuf avec étiquette"
                type="text"
                onChange={event => {
                  setCondition(event.target.value);
                }}
                value={condition}
              />
              </div>
              <div className="text-input">
                <h4>Lieu</h4>
              <input
              placeholder="ex: Paris"
                type="text"
                onChange={event => {
                  setCity(event.target.value);
                }}
                value={city}
              />
              </div>
        </div> 

        <div className="text-input-section">
              <div className="text-input">
                <h4>Prix</h4>
              <input
                placeholder="0,00 €"
                type="text"
                onChange={event => {
                  setPrice(event.target.value);
                }}
                value={price}
              />
              </div>
              <div className="checkbox-section">
              <label for="exchange" className="checkbox-design"/>
              <input
                type="checkbox"
                name="exchange"
                id="exchange"
                value="exchange"
              />
              <span>Je suis intéressé(e) par les échanges</span>
              </div>
        </div>   
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

