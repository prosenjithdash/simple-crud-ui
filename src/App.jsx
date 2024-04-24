
import './App.css'

function App() {

  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name,email}

    console.log(name, email)
    console.log(user);

    //// step - 03 client side with fetch, method , headers, body

    fetch('http://localhost:2000/users', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
  }

  return (
    <>
   
      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Enter your name' id="" /> <br />
        <input type="email" name="email" placeholder='Enter your email' id="" /><br />
        <input type="submit" value="Submit" />
      </form>
     
    </>
  )
}

export default App
