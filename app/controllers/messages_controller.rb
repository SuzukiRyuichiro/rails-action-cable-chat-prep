class MessagesController < ApplicationController
  def create
    # Make the message instance
    @message = Message.new(message_params)
    # Get the chatroom instance from the chatroom_id
    @chatroom = Chatroom.find(params[:chatroom_id])
    @message.chatroom = @chatroom
    # Get the author of the message
    @message.user = current_user
    # Save it
    if @message.save
      redirect_to chatroom_path(@chatroom)
    else
      render "chatrooms/show", status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
