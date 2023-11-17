const SignIn = () => {
    return (
        <form style={{boxSizing: 'border-box', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.45)',backdropFilter: 'blur(10px)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'space-evenly', height: '100%',padding: '0.5rem'}}>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <label style={{width: '30%'}}>Email:</label>
            <input style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Mot de passe:</label>
                <input style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            
            <button type="submit">Se connecter</button>
        </form>
    )
}
export default SignIn