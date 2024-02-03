import React from "react";

export default function ProfileImage(props){
    return(
        <div className="dropstart">
            <a className="me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-display="static">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" classNameName="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
            </a>

            <ul className="dropdown-menu dropdown-menu-right">
                <li><a className="dropdown-item" href="#">{props.props.dropdown1}</a></li>
                <li><a className="dropdown-item" href="#">{props.props.dropdown2}</a></li>
                <li><a className="dropdown-item" href="#">{props.props.dropdown3}</a></li>
            </ul>
        </div>
    );
}