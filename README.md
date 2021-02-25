# Anywhere Fitness Backend

https://api-anywhere-fitness.herokuapp.com

| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET   | /api/classes | Returns a list of classes|
| POST   | ______ |                                                                                                                             |
| PUT    | _______ |

#### Classes Schema

| field       | data type        | metadata                                            |
| :---------- | :--------------- | :-------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| name | string           | required                                    |
| type | string           | required                                    |
| start_time | string           | required (ex.: '8:00 a.m.')                                   |
| duration | string           | required (ex.: '1 hour')                                  |
| intensity_level | string           | required, 'Beginner', 'Intermediate' or 'Advanced'                                |
| location | string           | required                                    |
| registered | integer           | number of people registered                                    |
| max_class_size | integer           | number of people that can register                                   |
