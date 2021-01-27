User.destroy_all
Event.destroy_all
Collaborator.destroy_all
# Itinerary.destroy_all
Activity.destroy_all
Accommodation.destroy_all
Flight.destroy_all
Expense.destroy_all
Charge.destroy_all

u1 = User.create(name: "Gabbi Nguyen", email: "gabbinguyen@gmail.com", password: "password")
u2 = User.create(name: "Brittni Crowell", email: "brittnicrowell@gmail.com", password: "password")
u3 = User.create(name: "Olivia Bochus", email: "oliviabochus@gmail.com", password: "password")
u4 = User.create(name: "Lili Garcia", email: "liligarcia@gmail.com", password: "password")
u5 = User.create(name: "Bryana Dorfman", email: "bryanadorfman@gmail.com", password: "password")
u6 = User.create(name: "Heather Ward", email: "heatherward@gmail.com", password: "password")
u7 = User.create(name: "Katie Aamoth", email: "katieaamoth@gmail.com", password: "password")
u8 = User.create(name: "Dylin Anderson", email: "dylinandseron@gmail.com", password: "password")
u9 = User.create(name: "Staten Harmon", email: "statenharmon@gmail.com", password: "password")
u10 = User.create(name: "Thao Nguyen", email: "statenharmon@gmail.com", password: "password")
u11 = User.create(name: "Kyle Cartwright", email: "kylecartwright@gmail.com", password: "password")


e1 = Event.create(user_id: u1.id, name: "Bachelorette Party", date: "05/10/2021", location: "Miami")
e2 = Event.create(user_id: u1.id, name: "Baby Shower", date: "07/07/2021", location: "Dallas")
e3 = Event.create(user_id: u2.id, name: "Birthday Bash", date: "05/05/2021", location: "Denver")


e1c1 = Collaborator.create(user_id: u1.id, event_id: e1.id)
e1c2 = Collaborator.create(user_id: u2.id, event_id: e1.id)
e1c3 = Collaborator.create(user_id: u3.id, event_id: e1.id)
e1c4 = Collaborator.create(user_id: u4.id, event_id: e1.id)
e1c5 = Collaborator.create(user_id: u5.id, event_id: e1.id)
e1c6 = Collaborator.create(user_id: u6.id, event_id: e1.id)
e1c7 = Collaborator.create(user_id: u7.id, event_id: e1.id)

e2c1 = Collaborator.create(user_id: u1.id, event_id: e2.id)
e2c2 = Collaborator.create(user_id: u3.id, event_id: e2.id)
e2c3 = Collaborator.create(user_id: u5.id, event_id: e2.id)
e2c4 = Collaborator.create(user_id: u7.id, event_id: e2.id)


e3c1 = Collaborator.create(user_id: u2.id, event_id: e3.id)
e3c2 = Collaborator.create(user_id: u4.id, event_id: e3.id)
e3c3 = Collaborator.create(user_id: u6.id, event_id: e3.id)
e3c4 = Collaborator.create(user_id: u7.id, event_id: e3.id)



a1 = Activity.create(event_id: e1.id, description: "Beach", date: "05/10/2021", time: "7 PM")

acc1 = Accommodation.create(event_id: e1.id, location: "Hotel Indigo", date: "05/10/2021")
acc2 = Accommodation.create(event_id: e2.id, location: "Katie's House", date: "07/07/2021")


f1 = Flight.create(collaborator_id: e1c1.id, event_id: e1.id, flight_info: "UA127", date: "05/10/2021", time: "4 PM")
f2 = Flight.create(collaborator_id: e1c2.id, event_id: e1.id, flight_info: "UA111", date: "05/10/2021", time: "3 PM")


ex1 = Expense.create(collaborator_id: e1c1.id, event_id: e1.id, description: "Rental car", total: 250)

ch1 = Charge.create(collaborator_id: e1c1.id, expense_id: ex1.id, cost_per: 50)