# Debounce and Throttle Notes

## Debounce

- **Purpose**: Delay function execution until a certain time has passed since the last call.
- **Use Case**: Great for scenarios like API calls when the user stops typing.
- **Implementation**:
  ```javascript
  function debounce(callback, delay) {
      let timeout;
      return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
              callback(...args);
          }, delay);
      };
  }
  ```

## Throttle

- **Purpose**: Limit function execution to once every specified time interval.
- **Use Case**: Useful for actions like scrolling or resizing, where you want to control the frequency of execution.
- **Implementation**:
  ```javascript
  function throttle(callback, delay) {
      let shouldWait = false;
      let waitingArgs;
      const timeoutFunc = () => {
          if (waitingArgs == null) {
              shouldWait = false;
          } else {
              callback(...waitingArgs);
              waitingArgs = null;
              setTimeout(timeoutFunc, delay);
          }
      };
      return (...args) => {
          if (shouldWait) {
              waitingArgs = args;
              return;
          }
          callback(...args);
          shouldWait = true;
          setTimeout(timeoutFunc, delay);
      };
  }
  ```
