import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUrl, getMovies } from '../../actions/movies'
import MovieCard from '../MovieCard';
import MovieSynopsis from '../MovieSynopsis'
import style from "./styles.module.css";
import logo from './clarovideo-logo-sitio.svg'

class MoviesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            filter: '',
            showSynopsisModal: false,
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(event){
        function removeAcutes(input){
            return input.replace(/á/gi, 'a').replace(/é/gi, 'e').replace(/í/gi, 'i').replace(/ó/gi, 'o').replace(/ú/gi, 'u')
        }
        const filter = event.target.value;
        const list = this.props.movies.data.filter(item => {
            return removeAcutes(item.title).search(new RegExp(removeAcutes(filter), 'i')) !== -1
        })
        this.setState({filter, list})
    }

    render() {
        const list = this.state.list.map(item => (
            <MovieCard item={item} key={item.id} />
        ))
        return (
            <div className={style.container}>
                <div>
                    <img src={logo} alt='Logo Clarovideo' className={style.logo} />
                    <input type='text' value={this.state.filter} placeholder='Buscar' onChange={this.handleFilterChange}  className={style.search}/>
                </div>
                {list}
                <MovieSynopsis modalProps={{show: this.state.showSynopsisModal, onHide: () => this.setState({showSynopsisModal: false})}} />
            </div>
        )
    }

    componentDidMount(){
        this.props.getUrl();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.url.inProgress !== this.props.url.inProgress){
            if(this.props.url.inProgress === false && this.props.url.success === true){
                this.props.getMovies(this.props.url.data)
            }
        }
        if(prevProps.movies.inProgress !== this.props.movies.inProgress){
            if(this.props.movies.inProgress === false && this.props.movies.success === true){
                this.setState({
                    list: this.props.movies.data,
                    filter: '',
                })
            }
        }
        if(prevProps.movieSelected.inProgress !== this.props.movieSelected.inProgress){
            if(this.props.movieSelected.inProgress ===  true){
                this.setState({
                    showSynopsisModal: true,
                })
            }
        }
    }
}

function mapStateToProps(state){
    return {
        url: state.movies.url,
        movies: state.movies.list,
        movieSelected: state.movies.movieSelected,
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUrl: () => dispatch(getUrl()),
        getMovies: (url) => dispatch(getMovies(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)