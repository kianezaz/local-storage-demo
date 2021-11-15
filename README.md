# local-storage-demo

## Web Storage API

The Web Storage API allows the browser to store key/value pairs. Flexibility with this storage is fairly limited as the key and value must both be Strings. Thus, we use JSON.stringify and JSON.parse to process data in the web storage.

## localStorage vs sessionStorage

Data in localStorage is shared between all tabs of the same origin and survives across browser sessions. To clear the data, you must do it manually using localStorage.clear(). sessionStorage, on the other hand, exists only in the current tab and automatically clears its data when the page session ends. 
