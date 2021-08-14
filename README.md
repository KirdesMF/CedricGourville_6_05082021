# P6 OpenclassRoom

Build a secure API for a food review application

Début du projet : 5 Aout 2021

**To install the project and run it locally, you need first to add an `.env` at the root of the backend directory, with off course all necessary information in it**

> Tests are not yet implemented, because it is not the principal subject of the project. but I will add them later.

### Install:

1. `npm install` to install `concurrently`
2. `npm run install-all` to install front and back

To start the project, you can try in prod or dev. The prod one is using "use-strict" because is what ts compile.

To start the project you can use the linux script or the win script depending on your OS.

The frontend repo comes with `run-script-os` but its not working on my machine (WSL2),so to be sure everyone can start the projet, there are some scripts to help:

-  `npm run start:dev:linux` Start the project in a dev env for linux OS
-  `npm run start:dev:win` Same but for win OS
-  `npm run start:prod:linux` prod env for linux OS
-  `npm run start:prod:win` for win OS

You can also start just the frontend or just the backend. You can check `package.json` inside the `frontend` and `backend` folders.
