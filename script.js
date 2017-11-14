var arrMovies = [
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

var Movies = React.createClass({  
  render: function() { 
  return (
      React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement(MoviesList, {movies: arrMovies})
      )
    )
  }
});

var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },  
  render: function() { 
  var moviesElements = this.props.movies.map(function(allMovies) { 
  return (
      React.createElement(MovieItem, {key:allMovies.id, movie:allMovies})
    )
  });
  return (
      React.createElement('ul', {}, moviesElements)
    );  
  } 

});

var MovieItem = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },  
  render: function() {
  return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.movie.title),      
        React.createElement(MovieDescription, {movieDesc: this.props.movie.desc}),
        React.createElement(MovieImage, {movieImg: this.props.movie.img})
      )
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired,
  },
  render: function() {
  return (
      React.createElement('p', {}, 'opis: ' + this.props.movieDesc)
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    movieImg: React.PropTypes.string.isRequired,
  },
  render: function() {
  return (
      React.createElement('img', {src: this.props.movieImg})
    )
  }
});

var movies = React.createElement(Movies);
ReactDOM.render(movies, document.getElementById('app'));









/*
// KOTEK
var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

    render: function() {
    return (
        React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('p', {}, this.props.image.desc),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image111 = {  
  name: 'Kotek',
  desc: 'mały kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image111});
ReactDOM.render(element, document.getElementById('app'));
*/