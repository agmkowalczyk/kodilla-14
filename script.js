var elemen1 = React.createElement('div', {}, 'Hello world!');

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://prodimage.images-bn.com/pimages/0665541050015_p0_v1_s550x406.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://www.efilmy.tv/images/thumbs/big/300x400x2a092cfd090cd40dbc10b95935fef8be.jpg.pagespeed.ic.M5tZS2BRtl.jpg'
  },
  {
    id: 3,
    title: 'Mechaniczna pomarańcza',
    desc: 'Film o owocach',
    img: 'http://ecsmedia.pl/c/mechaniczna-pomarancza-dwuplytowa-edycja-specjalna-b-iext36367929.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

var element2 = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul',{},
			React.createElement('li', {},
				React.createElement('h2', {}, 'HarryPotter'),
				React.createElement('p', {}, 'Film o czarodzieju')
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Król lew'),
				React.createElement('p', {}, 'Bajka')
			)
		)
	);

ReactDOM.render(element, document.getElementById('app'));