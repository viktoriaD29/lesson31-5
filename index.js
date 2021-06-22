export const delay = (time) => {
  setTimeout(function timer() {
    return new Promise(function(resolve) {
      console.log('Done')
      resolve()
    }) 
  }, time)
  
}
