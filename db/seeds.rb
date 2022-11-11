User.destroy_all
Message.destroy_all
Chatroom.destroy_all

general = Chatroom.create(name: "General")
scooter = User.create(email: "dragon.aka.scooter@gmail.com", password: "123456", nickname: "Scooter")
ming = User.create(email: "mail@mail.com", password: "123456", nickname: "Ming")

Message.create(user: scooter, chatroom: general, content: "Hello from scooter")
Message.create(user: ming, chatroom: general, content: "Hello from ming")

puts "created #{Chatroom.count} chatrooms"
puts "created #{User.count} users"
puts "created #{Message.count} messages"
