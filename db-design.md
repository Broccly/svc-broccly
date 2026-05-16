# Blog posting app backend. Like Medium

### Features:
- Users can create/delete account.
- Users can create/delete/edit post.
- Users can like/dislike others posts.
- Users can comment/delete comment/edit comment others posts
- Users can follow/unfollow other authors.


### Backend Techstack
- Use node.js for backend system
- Use mongoDB for datatabase

### DB Collectiions
- Users
- Posts
- Likes
- Comments
- Follows

### Document Schema
**Users**

```
{
  _id: userId
  name: string
  bio: string
  email: string
  password: string
  follower: int
  following: int
  created_at: Date
}
```

**Posts**

```
{
  _id: postId
  title: string
  body: string
  author: userId
  likes: int
  comments: int
  created_at: date
  updated_at: date
}
```

**Likes**

```
{
  _id: postId
  post: postId
  author: userId
  updated_at: date
}
```

**Comments**

```
{
  _id: postId
  post: postId
  author: userId
  text: string
  updated_at: date
}
```

**Follows**

```
{
  _id: postId
  follower: userId
  following_to: userId
  updated_at: date
}
```