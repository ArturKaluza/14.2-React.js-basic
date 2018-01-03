const movies = [
  {
    id: 1,
    title: "Harry Poterr",
    desc: "Film o czarodzieju",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeLbgQGtnP93zipYJMezYfeB3gITegTAMkbCewZVdgWUodvM1"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: "Film opowiadający historie Króla Sawanny",
    src: "https://vignette.wikia.nocookie.net/dzieje/images/2/20/Kr%C3%B3l_Lew.jpg/revision/latest?cb=20151223174455&path-prefix=pl"
  },
  {
    id: 3,
    title: "Ojciec chrzestny",
    desc: "Film opowiadający o losach wloskiej mafii",
    src: "http://joemonster.org/i/f/okiem_szesciolatki02.jpg"
  },
  {
    id: 4,
    title: "Forrest Gump",
    desc: "Film w którym pojawia się każdy wątek lietracki",
    src: "http://www.efilmy.tv/images/thumbs/big/4bc5d64b73afbddee58d2dc7fe222b1b.jpg"
  }
];

const moviesElement = movies.map((movie) => {
  return React.createElement('li', {key: movie.id}, 
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.src})
  );
});

const element = React.createElement('div', {}, 
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElement)
)

ReactDOM.render(element, document.getElementById('app'));