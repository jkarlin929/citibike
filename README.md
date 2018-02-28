# Js-Citibike  

# Citibike Tracker
This site will allow the user to view Citibike locations throught New York City. They will be able to save their favorite locations, too.

# MVP
-Use Google Maps API to show citibike locations and data for the location.  
-Incorporate Citibike live data.  
-Use CRUD functionality to display favorite locations.  

# POST-MVP
-Calculate routes between stations and the length of time.  
-Show bicycle routes that google maps has embedded.  
-Incorporate NYC crash data at intersections (probably would require creating an API).   

# Technologies Used
-This project utilizes Node and Express, EJS, and CSS.   
-It also utilizes the Google Maps API and retrives data from the NYC Open Data regarding live data from Citibike.   

# Functional Components
|Component|Priority|EST Time|Invested Time|Actual Time|
|--------:|:------:|--------|-------------|----------:|
|Google Map| H     |  20hrs | 24hrs       |  24hrs    |
| CitiBike JSON| H |  10hrs | 3hrs        |  3hrs     |
| CRUD     |  H     |  8hrs  | 9hrs       |    9hrs    |
| Nav Bar  |   L    |  5hrs  |  0hrs      |      N/A    |

# WireFrames
[WireFrames](http://res.cloudinary.com/jkarlin929/image/upload/v1519175908/WireFrameCiti.jpg)

[Time Priority Matrix](http://res.cloudinary.com/jkarlin929/image/upload/v1519175941/Time%20Matrix.jpg)

# Issues and Resolutions
-GET /bike/new 304 305.686 ms - -
SELECT * FROM favorite_locations WHERE id = 'style.css'
(node:73269) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): error: invalid input syntax for integer: "style.css".  
I received this error when going to the new page for this project. It didn't mae sense then and doesn't make sense now.