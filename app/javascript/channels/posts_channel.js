import consumer from "./consumer"

const someRoom = consumer.subscriptions.create("PostsChannel", {
  connected() {
    console.log('connectd : ', this);
  },

  disconnected() {
  },

  received(data) {
    console.log(data);
  },

  speak: function(message) {
    return this.perform('speak', {message: message});
  }
});

window.document.onkeydown = function(event) {
  if(event.key == 'Enter') {
    appRoom.speak(event.target.value);
    event.target.value = '';
    event.preventDefault();
  }
}
