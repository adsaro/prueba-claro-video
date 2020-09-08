import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { getUrl, getMovies, getMovieInformation } from '../../actions/movies'
import styles from './styles.module.css'

class MovieCard extends Component {
    render() {
        return (
            <Card className={styles.card} onClick={() => this.props.getMovieInformation(this.props.item.id)} style={{display: 'inline-block', borderRadius: 0}}>
                <Card.Img src={this.props.item.image_small} alt={this.props.item.title} />
                <Card.ImgOverlay>
                    <Card.Title className={styles.overlay}>
                        <FontAwesomeIcon icon={faPlayCircle} size='3x' />
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        url: state.movies.url,
        movies: state.movies.list,
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUrl: () => dispatch(getUrl()),
        getMovies: (url) => dispatch(getMovies(url)),
        getMovieInformation: (id) => dispatch(getMovieInformation(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)