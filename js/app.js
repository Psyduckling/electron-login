$(document).ready = (function () {
  // for login..
  //defining variables.
  const txtEmail = document.getElementById('txtEmail')
  const txtPass = document.getElementById('txtPassword')
  const btnLogin = document.getElementById('btnLogin')
  const btnSignUp = document.getElementById('btnSignUp')
  const btnLogout = document.getElementById('btnLogout')
  const btnSignOut = document.getElementById('btnSignOut')
  //adding event listeners.
  btnSignOut.addEventListener('click', e => {
    signOut()
    console.log('hellooooo')
  })
  btnProceed.addEventListener('click', e => {
    const first_Name = txtFirstName.value
    const last_Name = lastName.value
    const user_Name = username.value
    const email = txtEmail.value
    const pass = txtPass.value
    const auth = firebase.auth()
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message))
    // add username
    var user = firebase.auth().currentUser
    user.updateProfile({
      displayName: user_Name,
      firstName: first_Name,
      lastName: last_Name
    }).then(function () {
      console.log('user data update successful.')
    }, function (error) {
      console.log('user data update failed. error: ' + error)
    })
  })
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value
    const pass = txtPass.value
    const auth = firebase.auth()
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch(e => console.log(e.message))
  })
  btnSignUp.addEventListener('click', e => {
  // Get email and pass
  // TODO: Check that the email is real
  $('#sign-up-required-fields').css('visibility', 'visible')
  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log('logged in')
      console.log(firebaseUser)
    } else {
      console.log('not logged in')
    }
  })
  })
  function signOut () {
    firebase.auth().signOut().then(function () {
      console.log('sign out successful')
    }, function (error) {
      console.log('an error occurred while logging out: ' + error)
    })
  }
})()
