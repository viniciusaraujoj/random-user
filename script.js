const btn = document.querySelector('.btn');
const ul = document.querySelector('.info');
const picture = document.querySelector('img');

const getUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    const person = data.results[0];
    showPicture(person);
    showInfo(person);
  } catch (error) {
    ul.textContent = error;
  }
};

const createElement = (info, data) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.classList.add('bold');
  span.appendChild(document.createTextNode(info));
  li.appendChild(span);
  li.appendChild(document.createTextNode(data));

  return li;
};

const showPicture = (person) => {
  picture.parentElement.style.display = 'flex';
  picture.setAttribute('src', person.picture.large);
};

const showInfo = (person) => {
  ul.textContent = '';

  const items = [
    { info: 'Name: ', data: `${person.name.first} ${person.name.last}` },
    { info: 'Email: ', data: person.email },
    { info: 'Phone: ', data: person.phone },
    {
      info: 'Location: ',
      data: `${person.location.city}, ${person.location.country}`,
    },
    { info: 'Age: ', data: person.dob.age },
  ];

  items.forEach((item) => ul.appendChild(createElement(item.info, item.data)));
};

document.addEventListener('DOMContentLoaded', getUser());
btn.addEventListener('click', getUser);
