# Github Compare Repositories


## Available Scripts

You're going to need to install all the dependencies with:
- npm install

In the project directory, you can run:

### `npm start`


## Data Management - Redux Toolkit
The data is managed with react redux toolkit and it's persisted at the localStorage with redux persistor. 

### The home page

The firts page shows the menu with the empty State wich means there is no one repository added. It is the inicial state.
![emptyState](./src/assets/images/emptyState.PNG)
To add a new repositorie you have to click on the plus button at right. And put the 'user/repository' that you want to add on the input. To close the modal, you can click again on the plus button
![newRepository](./src/assets/images/newRepository.png)


## The Dashboard page
Once you add a repository at the button "Add", you're going to be redirected to the dashboard page where we have all the repositories added, listed in a card with some information about it.

![repositories](./src/assets/images/dashboard.png)

## Filtering a repository by order
To filter a repository by order of stars, you can click on the stars option at the drop-down and it will be automatically odered.
![filterByOrder](./src/assets/images/filterByOrder.png)
![filtedByStarsAmount](./src/assets/images/filtedByStarsAmount.png)
You can see the cards changed to the decreasing number of stars


## Deleting a repository
Once you want to delete a repository, you can click on trash button and it will be automatically deleted:
![deleteRepo](./src/assets/images/deleteRepo.png)

![repoDeleted](./src/assets/images/repoDeleted.png)

When you delete all the repositories, you'll be redirected to the emptyState page again.
![emptyState](./src/assets/images/emptyState.png)
