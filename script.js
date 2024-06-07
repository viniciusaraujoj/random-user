const btn = document.querySelector('.btn');
const ul = document.querySelector('.info');
const picture = document.querySelector('img');
console.log(ul);

const person = (data) => {
  const person = data.results[0];
  const personData = {
    name: `${person.name.first} ${person.name.last}`,
    email: `${person.email}`,
    phone: `${person.cell}`,
    location: `${person.location.city}, ${person.location.country}`,
    age: `${person.dob.age}`,
    pictureURL: `${person.picture.large}`,
  };

  return personData;
};

const generateUser = () => {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const obj = person(data);

      picture.setAttribute('src', obj.pictureURL);
      picture.parentElement.style.display = 'flex';

      ul.innerHTML = `
      <li class="name">
              <spam class="bold">Name:</spam> ${obj.name}
            </li>
            <li>
              <spam class="bold">Email:</spam> ${obj.email}
            </li>
            <li><spam class="bold">Phone:</spam> ${obj.phone}</li>
            <li><spam class="bold">Location:</spam> ${obj.location}</li>
            <li><spam class="bold">Age:</spam> ${obj.age}</li>
      `;
    });
};

document.addEventListener('DOMContentLoaded', generateUser);
btn.addEventListener('click', generateUser);
