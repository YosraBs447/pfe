import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Se Connecter</h2>
      <input type="email" placeholder="Adresse Email" />
      <input type="password" placeholder="Mot de passe" />
      <p className="forgot-password">
        Mot de passe oublié? <a href="#">Clique ici</a>
      </p>
      <button onClick={() => navigate("/register")}>S'inscrire</button>
      <button>Se connecter</button>
    </div>
  );
};

export default Login;
