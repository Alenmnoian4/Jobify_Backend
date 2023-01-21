# Jobify
### Members: 
Alen, Brianne, Mary, Ramon
## Purpose
This API will store the job information that users input into the website. 

## Technologies To Be Used
- Javascript/JSX
- Express
- MongoDB/Mongoose
- JSON
- Cors
- Morgan
- NodeJS
- To Be Deployed on Render.com

## Model(s)
Job Role: String
Job Details: String
Location: String
On-site/Remote (Examples: In-Person, Hybrid, Remote): String
Application URL: String
Job Type (Example: Full-time, Part-Time, Internship, Contract, etc.): String
Salary Range (Example: $50k - $70k, $70k - $90k, $90k - $110k, $110k - $130k, $130k - $150k, $150k - $170k, etc.): String
Maybe: Date Applied

## Routes
- /posts .get - All Posts
    - /posts .post - Create Post
    - /posts/:id .put - Update Post
    - /posts/:id .delete - Delete Post
    - /posts/:id .get - Show One Post

## Live Site
[Live Site](https://jobify-api-1ge6.onrender.com/)