# Anywhere Fitness Backend

Project Description -

The purpose of "Anywhere Fitness" is to make fitness possible anywhere! We wanted to connect clients with personal trainers and personal trainers with clients.

The app will be able to allow instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app. We hope to make our services more dynamic and evolved as we grow!


#### Users Endpoints

| Method | Endpoint            | Description                                                                                       |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------- |
| GET    | /api/users          | Returns a list of users                                                                           |
| POST   | /api/users/register | Register a new user. Required fields: username and password. Optional: auth_code (for instructor) |
| POST   | /api/users/login    | Login with username and password                                                                  |

#### Users Schema

| field           | data type         | metadata                                            |
| :-------------- | :---------------- | :-------------------------------------------------- |
| id              | unsigned integer  | primary key, auto-increments, generated by database |
| username        | string            | required, unique                                    |
| password        | string            | required                                            |
| auth_code       | string            | Register as an instructor. (Code = 'abc123')        |


#### Classes Endpoints
| Method | Endpoint            | Description                                     |
| ------ | ------------------- | ----------------------------------------------- |
| GET    | /api/classes        | Returns a list of classes                       |
| GET    | /api/classes/:id    | Get class by id                                 |
| POST   | /api/classes        | Add a class (Instructor only)                   |
| PUT    | /api/classes/:id    | Update a class based on id (Instructor only)    |
| DELETE | /api/classes/:id    | Delete a class based on id (Instructor only)    |

#### Classes Schema

| field           | data type         | metadata                                            |
| :-------------- | :---------------- | :-------------------------------------------------- |
| id              | unsigned integer  | primary key, auto-increments, generated by database |
| name            | string            | required                                            |
| type            | string            | required                                            |
| start_time      | string            | required (ex.: '8:00 a.m.')                         |
| duration        | string            | required (ex.: '1 hour')                            |
| intensity_level | string            | required, 'Beginner', 'Intermediate' or 'Advanced'  |
| location        | string            | required                                            |
| registered      | integer           | number of people registered                         |
| max_class_size  | integer           | number of people that can register                  |



