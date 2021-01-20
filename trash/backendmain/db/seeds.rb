User.destroy_all
Event.destroy_all
Collaborator.destroy_all
Itinerary.destroy_all
Activity.destroy_all
Accommodation.destroy_all
Flight.destroy_all
Expense.destroy_all
Charge.destroy_all

u1 = User.create(name: "Gabbi Nguyen", email: "gabbinguyen@gmail.com", password: "gumballs")
u2 = User.create(name: "Brittni Crowell", email: "brittnicrowel@gmail.com", password: "ilovedogs")

e1 = Event.create(user_id: u1.id, name: "Bachelorette Party", date: "05/10/2021", location: "Miami")
e2 = Event.create(user_id: u1.id, name: "Baby Shower", date: "07/07/2021", location: "Dallas")

c1 = Collaborator.create(user_id: u1.id, event_id: e1.id)
c2 = Collaborator.create(user_id: u2.id, event_id: e1.id)

i1 = Itinerary.create(event_id: e1.id)

a1 = Activity.create(itinerary_id: i1.id, description: "Beach", date: "05/10/2021", time: "7 PM")

acc1 = Accommodation.create(itinerary_id: i1.id, location: "Hotel Indigo", date: "05/10/2021")

f1 = Flight.create(collaborator_id: c1.id, itinerary_id: e1.id, flight_info: "UA127", date: "05/10/2021", time: "4 PM")

ex1 = Expense.create(collaborator_id: c1.id, event_id: e1.id, description: "Rental car", total: 250)

ch1 = Charge.create(collaborator_id: c2.id, expense_id: ex1.id, cost_per: 50)