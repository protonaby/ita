import React from 'react'
import { render } from 'react-dom'
import Menu from './menu'
import data from './recipes'

window.React = React;

render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
);