# fitbod



REST API to handle multiple device end-point sync

Background
Fitbod is a top 25 ranked Health & Fitness iOS app. It tracks users’ workouts and saves to our own back-end infrastructure. Using Machine Learning, Fitbod will process the user’s history of workouts, individual preferences, and the best practices of exercise science to calculate the user’s next workout-of-the-day.

Task
Your task will be to build a back-end infrastructure to handle multiple end-points. A user may access his/her Fitbod account through iPhone, iPad, iPod, and/or web interface. When workouts are logged and modified at one end-point, the change should be reflected on other devices.

Details
Please spin up a test server on Google Cloud Platform or heroku. You may choose a SQL or NoSQL database.

You can then apply a database with two collections. The User collection will have the email address. The Workout collection will contain the user’s history of workouts, for columns it should keep track of the workout date and workout duration.

You can see the attached user.csv and workout.csv files.

Then please write RESTful API services that will process incoming requests from the devices/users to save and receive workout information. Provide documentation on how this api should be used via a README.md in the root directory.

Please write a simple front-end admin web interface that will allow us to view a list of workouts in a given user’s workout history. We should also be able to save new workouts and modify the existing workout duration.
