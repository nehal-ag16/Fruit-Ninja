
const firebaseConfig = {
    apiKey: "AIzaSyDWDqUXR_t_iGXzD3hNliw8A5QyrZOvqQs",
    authDomain: "woc-project-fb4c1.firebaseapp.com",
    projectId: "woc-project-fb4c1",
    storageBucket: "woc-project-fb4c1.firebasestorage.app",
    messagingSenderId: "684870431165",
    appId: "1:684870431165:web:231109b0786fc12a24a2d4"
  };

firebase.initializeApp(firebaseConfig);


const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

       
        const user = userCredential.user;

        
        await firebase.database().ref('users/' + user.uid).set({
            username: username,
            email: email,
        });

        alert("User successfully signed up!");
        
        window.location.href = "game.html"; 
    } catch (error) {
        alert("Error signing up: " + error.message);
    }
});

// Login page redirect
const loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", () => {
    window.location.href = "login.html"; // Link to login page
});
