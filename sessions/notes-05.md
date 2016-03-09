# 05: Session Notes #
##### Date: 09-03-2016 09:00-10:00 #####
-------------------------------------------------


## Questions: ###

1. Go over Angular in more detail.


## Notes: ##

### Topics here... ###

Specific notes underneath each topic...


# Backend

Database <-> python <-> http endpoints(server side routes)

http://localhost/api/

create a server side route(endpoints) to get the list of users fromdatabase
or from a json file or a select query on a sql database:

// RESTFUL services
HTTP headers
GET http://localhost/api/users?pageNumber=2
GET http://localhost/api/users/:userId
POST http://localhost/api/users body/{}/''
PUT http://localhost/api/users/:userId body/{}/''
DELETE http://localhost/api/users/:userId


Old style:
GET http://localhost/api/users?userId=23&action=delete


Server side route: is able to recieve a http request, process the request,
at the end a response are genereated

# Frontend
Up to 10 years ago browsers couldn't send http request without reloading
we couldn't send http request in JavaScript

old fashioned way of sending post requests was like this:
```html
<form action="/api/users" method="post">
  <input name="firstName" type="text" >
  <input name="lastName" type="text" >
  <input name="username" type="text" >
  <input type="submit" value="Create User" />
</form>
```

# Ajax

```javascript

var request = new XMLHTTPRequest();

request.open('POST', '/api/users');
request.setRequestHeader('Authentication Token', '1111111111111111111');
request.onreadystatechange = function(){
   if(request.readyState===4){
     console.log(request.responseText);
   }
};
request.send({
  firstName: '',
  lastName: '',
  username: ''
});

```

Using Angular:
```javascript
var data = {
  firstName: '',
  lastName: '',
  username: ''
};
$http.post('/api/users', data).then(function(response){
   console.log(response.data);
});

$http.get('/api/users').then(function(response){
   console.log(response.data);
   /*
   var data = [{
      firstName: '',
      lastName: '',
      username: ''
    },{
       firstName: '',
      lastName: '',
      username: ''
   }];
   
   
   var modelObject = new Model({
      firstName: '',
      lastName: '',
      username: ''
    });
    
    modelObject.save()
   */
   
   var UserService = {
     create: function(userObject){
         $http.post('/api/users', userObject).then(function(response){
           console.log(response.data);
        });
     },
     getAll: function(){
       $http.get('/api/users').then(function(response){
           console.log(response.data);
        });
     }
   };
   
   var PostService = {
     create: function(userObject){
         $http.post('/api/posts', userObject).then(function(response){
           console.log(response.data);
        });
     },
     getAll: function(){
       $http.get('/api/posts').then(function(response){
           console.log(response.data);
        });
     }
   };
   
   obj.create({});
   
});

// /api/users/23
// $resource: standard RESTFULL APIs
```



## Things to do for next session: ##

1. Things here...



