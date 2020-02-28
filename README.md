# CRUD-practice

Start with private route and auth.
auth goes in utils folder - axios call with auth
create private route file
create axios with auth file
then add route link to private route file
work on login now so you can test the privateroute (first import on app.js)
import axioswithauth to login form 
then build a login component
build state with username and password
start building form up to onSubmit and handleSubmit
add handleSubmit
add input type on form
<!-- <input type="text" placeholder="" name="" value={} onChange={} className="" /> -->
add handleChange so you can add input (above handleSubmit)
 <!-- const handleChange = event => {
        setLogin({
            ...login,
            [event.targt.name]: event.target.value
        })
    }; -->
<!-- axiosWithAuth is a function -->

 add handleSubmit info so you can submit the form
        <!-- const handleSubmit = event => {
            event.preventDefault();
            axiosWithAuth()
                .post('login', login)
                .then(response => {
                    console.log('response', response)
                    localStorage.setItem('token', response.data.payload)
                    props.history.push('/creatures');  -->
                 <!-- //creatures now has be made a protected route -->
                 <!-- //props.history.push re-directs you to another page
                }) -->
                <!-- .catch(error => {
                    console.log(`login error: ${error}`)
                })
        };  -->
import private route to app.js
add private route exact path above other route
import component to app if doesnt show up
now we need to do the axios call to get the animal list to display
add useEffect to the animal dashboard to get the animals
add spinner by adding const isLoading