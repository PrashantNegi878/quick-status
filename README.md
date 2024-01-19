# Quick Status
### React-TypeScript Library for Online/Offline Status Popup

Quick Status is a lightweight and easy-to-use React TypeScript library designed to enhance user experience by providing a visual indicator when the user goes offline or comes back online. With just a simple  <QuickStatus/>  tag, you can integrate this library into any React project effortlessly.

### Installation
Install Quick Status in your project using [npm]('https://www.npmjs.com/package/@prashantnegi878/quick-status') :

`npm install @prashantnegi878/quick-status`

### Usage
Quick Status is designed to be a hassle-free solution for providing real-time feedback to users regarding their online status.

**Without optional parameters:**
```Javascript
import React from 'react';
import QuickStatus from '@prashantnegi878/quick-status';

function App() {
  return (
    <div>
      {/* Your main application content */}
      <QuickStatus/>
    </div>
  );
}
export default App;
```
**With optional parameters:**
```Javascript
import React from 'react';
import QuickStatus from '@prashantnegi878/quick-status';

function App() {
  return (
    <div>
      {/* Your main application content */}
      <QuickStatus
        bottom="10px"
        right="10px"
        onlineBgColor="green"
        offlineBgColor="red"
        onlineContent="User is back online"
        offlineContent="User is currently offline"
      />
    </div>
  );
}
export default App;
```

### **Features:**
**Simple Integration:** Incorporate the library into your project with minimal effort using the <QuickStatus/> tag.

**Customizable Appearance:** Tailor the appearance of the popup to suit your application's design. Adjust the distance from the bottom and right of the screen using the optional bottom and right parameters.

**Dynamic Colors:** Define the colors that best match your application's aesthetic with the onlineBgColor and offlineBgColor parameters, allowing you to choose distinct colors for online and offline states.

**Informative Content:** Keep your users informed with customizable content for both online and offline states. Utilize the onlineContent and offlineContent parameters to display messages or JSX elements.
