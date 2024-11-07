# Travel Planner Web App

This project is a static website for planning trips, which includes features for itinerary creation, budget planning, and location tracking. The website is built using HTML, CSS, and JavaScript, with a focus on responsiveness, usability, and integrating charts to visualize the data.

## Data Model

The travel planner app's data model includes at least two one-to-many relationships:

- **Trips Table**: Represents each trip with the following fields:
  - `trip_id`: Unique identifier for the trip.
  - `trip_name`: Name of the trip.
  - `start_date`: Trip start date.
  - `end_date`: Trip end date.

- **Locations Table**: Stores details about locations, related to a trip:
  - `location_id`: Unique identifier for the location.
  - `location_name`: Name of the location.
  - `trip_id`: Foreign key referencing the `Trips` table.
  - `latitude`: Latitude of the location.
  - `longitude`: Longitude of the location.

- **Expenses Table**: Tracks the budget distribution for each trip:
  - `expense_id`: Unique identifier for the expense.
  - `trip_id`: Foreign key referencing the `Trips` table.
  - `food_budget`: Budget allocated for food.
  - `travel_budget`: Budget allocated for travel.
  - `accommodation_budget`: Budget allocated for accommodation.

### Relationships:
- A **Trip** can have multiple **Locations**.
- A **Trip** can have multiple **Expenses**.

A diagram of the data model will be included on the **About Us** page.

## Build the User Interface

The user interface is built with the following components:

- **HTML**: Static pages representing trip planning, including forms for itinerary creation, budget planning, and trip details.
- **CSS**: Clean, professional design with modern styles for navigation menus, forms, and content sections. The design is responsive and works across mobile, tablet, and desktop screens.
- **JavaScript**: Dummy CRUD functions to simulate creating, reading, updating, and deleting trips, locations, and expenses. This is done with hardcoded data for now, and can later be connected to a backend in future assignments.

## Integrate Charts

We use JavaScript charting libraries (like Chart.js or Google Charts) to visualize the following data:

1. **Budget Allocation Chart**: A pie or bar chart showing the distribution of the trip budget (food, travel, and accommodation).
2. **Itinerary Duration Chart**: A Gantt chart or bar chart showing the number of days planned for each trip.
3. **Cost Distribution Chart**: A line chart or stacked bar chart showing how the expenses are distributed across different locations or time periods.

These charts enhance the user experience by visually displaying key data.

## Responsive Design

The website is designed to be fully responsive, ensuring compatibility with different screen sizes, including mobile, tablet, and desktop. CSS media queries are used to adjust the layout and styling based on the screen size.

## Additional Requirements

- **About Us Page**: Includes group member details, the data model image, and a GitHub link for project coordination.
- **Self-Reflection**: Each team member adds a self-reflection comment on their learnings, time spent, and recommendations for future projects.

## GitHub Coordination

This project is managed using GitHub for version control. Each team member collaborates on the project by forking the repository, committing changes, and pushing to the main branch. The final repository URL will be submitted as part of the assignment.


