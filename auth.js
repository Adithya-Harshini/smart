function registerUser() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let study = document.getElementById('studyType').value;
  let cls = document.getElementById('class').value;
  let gender = document.getElementById('gender').value;
  let lang = document.getElementById('lang').value;

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.email === email)) {
    alert('User already exists');
    return;
  }
  users.push({ name, email, password, study, class: cls, gender, lang });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registered Successfully');
}

function loginUser() {
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location = 'dashboard.html';
  } else {
    alert('Invalid credentials');
  }
}
