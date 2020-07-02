# fitbod



REST API to handle multiple device end-point sync
Task
Your task will be to build a back-end infrastructure to handle multiple end-points. A user may access his/her Fitbod account through iPhone, iPad, iPod, and/or web interface. When workouts are logged and modified at one end-point, the change should be reflected on other devices.

Then please write RESTful API services that will process incoming requests from the devices/users to save and receive workout information. Provide documentation on how this api should be used via a README.md in the root directory.

Please write a simple front-end admin web interface that will allow us to view a list of workouts in a given user’s workout history. We should also be able to save new workouts and modify the existing workout duration.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Usage of API and Front End:-

Access this application via User Interface: -
https://fitbod.herokuapp.com/

1) To fetch all the User: -
    > Select first user from drop down and then click on the button Fetch.

2) To update an existing record :-
    > Select the checkbox of any of the record fetched by above operation. Select that row and click on the Update link.
    > This should populate the input field with the selected row.
    > Only duration is editable, two other fields are readonly.
    > Once done editing, click on the update button.
    > On clicking the fetch we should see the change.

3) To add new record for the user:-
    > Click on the Add new record link.
    > Enter date (in the given format) and duration.
    > Click Submit to save this detail.
    > click on fetch with the selected user, will show the newly added row.

4) Clear:
    > Clicking on the clear link, clears our the Edit or Add section from the UI.

Note: Users list fetched when page gets loaded.



APIs: -

Get Version:
https://fitbod.herokuapp.com/api/version
Method Type - GET

Get Users:
https://fitbod.herokuapp.com/api/fitboduser
Method Type - GET


To see all the workouts available in the Workout collection (Mostly usable by admin user):
https://fitbod.herokuapp.com/api/workouts
Method Type - GET


Get List of workouts for one selected user:
https://fitbod.herokuapp.com/api/workouts/<User email add>
For e.g.
https://fitbod.herokuapp.com/api/workouts/user1@fitbod.me
Method Type - GET


Update a selected workout:
https://fitbod.herokuapp.com/api/updateworkout

HTTP Method: POST (Ideally it should be PUT but to cater from UI, kept it POST)
Request body:
{
  "email_add": "user1@fitbod.me",
  "workout_duration": "45"
}


Add a new workout for selected user:
https://fitbod.herokuapp.com/api/addworkout

HTTP Method: post
{
  "email_add": "user1@fitbod.me",
  workout_date: "MM/DD/YYYY",
  "workout_duration": "45"  
}

Delete Workout Data by ID (Primary key of mongo) this can be used for admin purpose:-
https://fitbod.herokuapp.com/api/workouts/<email_id>

For e.g.

https://fitbod.herokuapp.com/api/workouts/user3@fitbod.me

HTTP Method: Delete
