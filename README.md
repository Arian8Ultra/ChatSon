# TODOs

1- user 
- id
- token
- username
- lastLogin
  
2- anonymoseUser
- id
  
3- normalUser
- id
- name
- surname
- email
- password
- phone --> optional
- address --> optional
- accessLevel - enum(1,2,3,4,5)

4- chat
- id
- user --> relation
- message
- date
- media
- likes --> relation

5- follow
- user --> relation
- follower --> relation

6- like
- user --> relation
- chat --> relation
- date