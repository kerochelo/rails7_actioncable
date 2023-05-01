class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "some_channel"
  end

  def unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast 'some_channel', message: data['message']
  end
end
