import React from 'react';

function ButtonLink(props){ //todo nome de função deve ser com Maiusculo
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}


export default ButtonLink;