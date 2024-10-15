# LinkedIn Connection Automation Script

This script automates sending connection requests on LinkedIn. It simulates user interactions by clicking the "Connect" button on people's profiles and handles LinkedIn's pop-ups during the process.

## Features
- Automatically detects "Connect" buttons and sends connection requests.
- Handles LinkedIn's confirmation pop-up.
- Skips profiles where the "Follow" button is present instead of "Connect".
  
## How It Works
1. **sleep(ms)**: Pauses the script for a specified number of milliseconds.
2. **ConnectClick(button)**: Clicks the "Connect" button, waits for the pop-up, and sends the connection request if available.
3. **automateSent()**: Loops through the list of suggested people on LinkedIn, detects the "Connect" or "Follow" button, and triggers actions accordingly.

## Script Structure
- **XPath Selectors**: 
  - `xpathPeopleListAsString`: Identifies the list of people in the current view.
  - `xpathButtonInsideListAsString`: Locates the "Connect" or "Follow" button within each person's profile.
- **Connection Request Logic**:
  - If a "Connect" button is found, it triggers `ConnectClick()`.
  - If a "Follow" button is detected, it logs that information and can be customized to automate following.
  
## How to Use
1. Open LinkedIn and navigate to a list of people (e.g., People You May Know).
2. Open the browser console (usually by pressing `F12` and selecting the "Console" tab).
3. Paste the script in the console and press `Enter`.
4. The script will automatically loop through the list and send connection requests.

### Customization
- Modify the `sleep(2000)` to increase or decrease the delay between actions.
- Adjust the XPath expressions if LinkedIn changes its layout.

## Warning
Use this script responsibly and follow LinkedIn's terms of service to avoid restrictions or account suspension.

## License
This project is open-source and available under the MIT License.
