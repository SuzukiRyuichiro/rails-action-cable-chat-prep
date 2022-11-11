import { Controller } from "@hotwired/stimulus";
import { createConsumer } from "@rails/actioncable";

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static values = { chatroomId: Number };
  static targets = ["messages"];

  connect() {
    // Create a consumer object
    const consumer = createConsumer();
    // That consumer will subscribe to the ChatroomChannel for any signals
    consumer.subscriptions.create("ChatroomChannel");
  }
}
