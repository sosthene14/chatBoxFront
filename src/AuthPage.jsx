import axios from 'axios'

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value: username } = e.target.username;
    const { value: secret } = e.target.secret;

    axios.post(
      'https://chat-bot-back.vercel.app/authenticate',
      { username, secret }
    ).then(r => props.onAuth({ ...r.data, secret: secret })
    )
    .catch(e => console.log('Soumission érronée'));
  };
  
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username and password to get started</div>

        <div className="auth">
          <div className="auth-label">Pseudo</div>
          <input className="auth-input" name="username" />
          <div className="auth-label2">Mot de passe</div>
          <input className="auth-input" name="secret" type='password'  />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
