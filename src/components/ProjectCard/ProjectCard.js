import './ProjectCard.scss';

import React, { Component } from 'react';


export default class ProjectCard extends Component {

    render() {
        const data = this.props.data;
        return <div className="tile is-vertical is-4">
            <div className="tile">
                <div className="cell">
                    <article className="box notification is-info">
                        <p className="title">
                            <a href={data.url} rel="noopener noreferrer" target="_blank">{data.title}</a>
                        </p>
                        <a href={data.url} rel="noopener noreferrer" target="_blank">
                            <figure className="image is-4by3">
                                <img src={data.image}
                                    alt={data.imgAlt}
                                    title={data.imgTitle} />
                            </figure>
                        </a>
                    </article>
                </div>
            </div>
        </div>;
    }
}