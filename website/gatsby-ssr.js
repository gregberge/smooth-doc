/* eslint-disable react/no-danger, import/no-extraneous-dependencies */
const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="gumroad" async src="https://gumroad.com/js/gumroad.js" />,
  ])
}
