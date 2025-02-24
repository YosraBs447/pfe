import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  return (
    <div className="container">
      <h2>S'inscrire</h2>
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Prénom" />
      <input type="number" placeholder="Matricule (4 chiffres)" maxLength="4" />
      
      <div>
        <label>
          <input type="radio" name="role" value="technicien" onChange={() => setRole("technicien")} /> Technicien
        </label>
        <label>
          <input type="radio" name="role" value="admin" onChange={() => setRole("admin")} /> Admin
        </label>
      </div>

      <input type="text" placeholder="Site" />
      <input type="email" placeholder="Adresse Email" />
      <input type="password" placeholder="Mot de passe" />
      <input type="password" placeholder="Vérifier Mot de Passe" />

      <button>S'inscrire</button>
      <button onClick={() => navigate("/")}>Se connecter</button>
    </div>
  );
};

export default Register;
