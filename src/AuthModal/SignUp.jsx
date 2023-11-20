import { useState } from "react";

const SignUp = () => {

    const [form, setForm] = useState({
        name: "",
        surname: "",
        mail: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError("Les mots de passe de sont pas identiques");
            return
        }
        setError('');
        console.log(form);
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{boxSizing: 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.45)',backdropFilter: 'blur(10px)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-evenly' , height: '100%', padding: '0.5rem', }}>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Nom:</label>
                <input name="name" value={form.name} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Prénom:</label>
                <input name="surname" value={form.surname} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Mail:</label>
                <input name="mail" value={form.mail} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Mot de passe:</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Confirmation de mot de passe:</label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            {error && <p style={{color: 'red'}}>⚠️{error}</p>}
            
            <button type="submit">S'inscrire</button>
        </form>
    )
}


export default SignUp;