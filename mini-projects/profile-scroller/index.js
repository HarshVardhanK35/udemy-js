const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'Male',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/men/75.jpg',
    lookingFor: 'Male looking for female'
  },
  {
    name: 'Gundel Kerkhoff',
    age: 23,
    gender: 'Female',
    location: 'Brandenburg, Germany',
    imageURL: 'https://randomuser.me/api/portraits/women/96.jpg',
    lookingFor: 'Female looking for male'
  },
  {
    name: 'Miriam Roybal',
    age: 25,
    gender: 'Female',
    location: 'Durango, Mexico',
    imageURL: 'https://randomuser.me/api/portraits/women/91.jpg',
    lookingFor: 'Female looking for male'
  },
  {
    name: 'Timeo Jean',
    age: 24,
    gender: 'Male',
    location: 'Rue Dugas-Montbel, France',
    imageURL: 'https://randomuser.me/api/portraits/men/16.jpg',
    lookingFor: 'Male looking for female'
  },
  {
    name: 'Iina Palo',
    age: 22,
    gender: 'Female',
    location: 'Hankasalmi, Finland',
    imageURL: 'https://randomuser.me/api/portraits/women/46.jpg',
    lookingFor: 'Female looking for male'
  }
];

const container = document.querySelector('.container');
const image = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPplIterator(){
  let index = 0;
  while(true){
    yield people[index]
    index = (index + 1) % people.length
  }
}

const iterator = createPplIterator();

nextBtn.addEventListener('click', () => {

  const details = iterator.next().value;

  image.src = details.imageURL;
  profileInfo.querySelector('h1').textContent = details.name;
  profileInfo.querySelector('.age').textContent = details.age;
  profileInfo.querySelector('.city').textContent = details.location.split(',')[0];
  profileInfo.querySelector('.country').textContent = details.location.split(',')[1];
  profileInfo.querySelector('.looking-for').textContent = details.lookingFor
});