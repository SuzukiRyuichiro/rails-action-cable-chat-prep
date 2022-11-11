import { Controller } from "@hotwired/stimulus";
import { createConsumer } from "@rails/actioncable";

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static values = { chatroomId: Number };
  static targets = ["messages", "input"];

  connect() {
    // Create a consumer object
    const consumer = createConsumer();
    // That consumer will subscribe to the ChatroomChannel for any signals
    // @channel =
    this.channel = consumer.subscriptions.create(
      {
        channel: "ChatroomChannel",
        id: this.chatroomIdValue,
      },
      {
        received: (data) => {
          // Convert the data into and HTML element and insert
          this.messagesTarget.insertAdjacentHTML("beforeend", data);
          // Scroll down to that place
          this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight);
          // Clear the input field
          // this.inputTarget.value = ""; -> we don't want to do this
        },
      }
    );
  }

  resetForm(event) {
    event.target.reset();
  }

  disconnect() {
    this.channel.unsubscribe();
  }
}
