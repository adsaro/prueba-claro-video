import React from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import style from "./styles.module.css";

function MovieSynopsis(props) {
  const movie = useSelector((state) => state.movies.movieSelected);
  const closeButton = () => (<Button
    onClick={props.modalProps.onHide}
    className={style.close}
    variant="danger"
  >
    X
  </Button>)
  return (
    <Modal
      {...props.modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={style.modal}
    >
      {movie.data ? (
        <>
          <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
            {closeButton()}
            <picture>
              <source
                srcSet={`${movie.data.image_large} 1x`}
                media="(max-width: 768px)"
              />
              <source
                srcSet={`${movie.data.image_medium} 2x`}
                media="(max-width: 1200px)"
              />
              <img
                srcSet={`${movie.data.image_large} 3x`}
                alt={movie.data.title}
                className={style.image}
              />
            </picture>
            <h4 className={style.title}>{movie.data.title}</h4>
            <p>
              <strong>
                {`${movie.data.extendedcommon.media.originaltitle} (${movie.data.extendedcommon.media.publishyear})`}
                <span style={{ margin: "0 0.5em" }}></span>
                {`${movie.data.extendedcommon.media.rating.code}`}
              </strong>
            </p>
            <p>{movie.data.large_description}</p>
            <p className={style.generes}>
              <strong>
                Genero{movie.data.extendedcommon.genres.genre.length > 1 && "s"}
                :
              </strong>{" "}
              {movie.data.extendedcommon.genres.genre
                .map((item) => item.desc)
                .join(", ")}
            </p>
            <p className={style.generes}>
              <strong>Elenco:</strong>{" "}
              {movie.data.extendedcommon.roles.role
                .filter((item) => item.name === "Actor")[0]
                .talents.talent.map((item) => `${item.name} ${item.surname}`)
                .join(", ")}
            </p>
            <div>
              <StarRatings
                rating={movie.data.ranking.average_votes}
                starRatedColor="yellow"
              />
            </div>
          </Modal.Body>
        </>
      ) : (
        <Modal.Body>
          {closeButton()}
          <p>Cargando...</p>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default MovieSynopsis;
