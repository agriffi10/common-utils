# Debounce

This function will return another function that debounces any function you first pass to it.

## Usage

```js
import { cu_debounce } from "@griffian/common-utils";

const myFunction = (params = true) => console.log(params);

const myDebouncedFunction = cu_debounce(myFunction, 300, false, 1);

myDebouncedFunction();
myDebouncedFunction();
myDebouncedFunction();
myDebouncedFunction();
// Logs 1 one time to the console
```

## Parameters

- callback
  - This is the function that you'd like to be debounced. After your timeout passes, this will be called with the arguments provided in the initial debounce call
- timeout
  - The length of time the debounced function should wait before executing your code

Once the debounced function is returned, you can pass the following parameters to it:

- immediate
  - When true this invokes the function immediately
- arguments
  - These are optional parameters that will be applied to your callback function once it executes
