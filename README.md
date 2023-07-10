# taskmanager.io

<font size=4> **Introduction** </font>

A **simplified** clone of the project management tool ["_monday.com_"](https://monday.com/lang/de/work-management).

Once logged in - you can manage tasks by dividing them into boards, assigning properties like due to date, status and more, filtering them by selecting a view, managing them cross-board, updating values with a nice multi-selection tool, and automating deletion with special status configuration. Quick, Easy no strings attached - more details below!

<hr/>

<font size=4> **Gallery** </font>

![entry](assets/entry.png)

![login](assets/login.png)

![register](assets/register.png)

![total](assets/allTasks.png)

<hr/>

<font size=4> **Navigation** </font>

<u>**Fixed Routes:**</u>

Entry - https://taskmanager-io.web.app/public/entry\
Login - https://taskmanager-io.web.app/public/login\
Register - https://taskmanager-io.web.app/public/register\
See all Tasks - https://taskmanager-io.web.app/private/{UID}/total\

<u>**Dynamic Routes:**</u>

Individual Board - https://taskmanager-io.web.app/private/{UID}/board/{BOARDID}

<hr/>

<font size=4>**Features**</font>

<font size=3> <u>**Routing and Authentication**</u> </font>

Auth is provided by firebase and is persisted. Once logged in, if no explicit logout is performed you will be permanantly logged in!

<font size=3> <u>**Public Pages**</u> </font>

- Entry
  - when the animation ended, the viewport is clickable for a redirect to the login page
- Login
- Register

<font size=3> <u>**Private Pages**</u> </font>

- for dynamic and total
  - text
- only for total
  - text

<hr/>

<font size=4>**Future**</font>

<hr/>

<font size=4> **Tech Stack** </font>

**Frontend:** React (+React Router), Typescript, Sass\
**Backend:** Firebase (Auth, Firestore)
