// @flow
import React from 'react';

const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;

  return (
    <div className="details">
      <header>
        <h1>Svideo</h1>
      </header>
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} alt={`Img of Poster ${title}`} />
        <h2>{description}</h2>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </section>
    </div>
  );
};
export default Details;
