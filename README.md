# Getting Started with React Router

## 1).
Go to react-reouter website and install react routers to your react app

## 2).
In the React app create a file by the name of roter and import {Browser Router as Router, Route} from 'react-router-dom'

## 3).
Inside the component we have to create routes. We are going to use the two things that we imported from rect-router
## 4). 
Router is the parent tag and inside of it we will create Route as child component, route could be self closing
## 5). 
A route takes two attributes first is path and second is component. Path is a keword like '/' or '/home', '/about' etc. In the component you place the name of the component you want to show on that path. Path is in inverted comma ans component is in curly brackets Example:
<!-- <Router>
	<Route path="/" component={Home} />

<Router/> -->

## 6). 
Now you have to import the component in your router file explicitly and then use its name inside the comopnent 

## 7). 
The Route component has another prop by the name of exact which makes sure that when the path is exactly same as mentioned then only render this route. 

## 8). 
You have to export default Router component. Now import the Router component inside App.js file

## 9).
Now you have created multiple components and want to link them. You can do this using Link tag provided by 'react-router-dom'. The Link tag takes to prop in which you specify the path of the component. The Link is imported in the page from where you want to route to.
<!-- <Link to="/about"/> -->

# Using Javascript for Routing
You can use JS to route between components. The component that is placed inside the Router has a prop by the name of history. The history prop has many other objects inside of it by the name of location and other. In the history object we have different methods like go, goBack, goForward, push etc. 
This method can be in case when you want a user authentication first and then you want the user to go on to another page. The authentication is done in a functio, so thats why use this method

## 1). 
Create a button inside the Home or About component and pass an onClick event. Inside the event pass a function.

## 2). 
Inside the function we are going to taret the push method inside the history function. Push method is used to move from one component to other. Inside the push method we are going to give the path of the component where we want to go.