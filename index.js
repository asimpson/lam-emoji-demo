'use strict'

const fetch = require('isomorphic-fetch');

const emoji = (event, context, cb) => {
  fetch(`http://emoji.getdango.com/api/emoji?q=${event.emoji}`).then((x) => {
    return x.json();
  }).then((resp) => {
    const emojiResponse = resp.results[0].text;
    cb(null, JSON.stringify(emojiResponse));
  });
};


exports.handler = emoji;
