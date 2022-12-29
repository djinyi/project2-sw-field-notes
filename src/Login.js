import React from "react";

function LogIn({ onLogIn }) {
    const [formData, setFormData] = 
    useState({
        username: "",
        password: ""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("...", {
            method: "POST",
            headers: {
                "Cntent-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r)=> r.json())
        .then((user)=> {
            onLogIn(user);
            history.pushState("/home");
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            <button type="submit"> Submit </button>

        </form>
    )
}

export default LogIn;