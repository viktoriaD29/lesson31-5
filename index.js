export const delay = (time) => {
  setTimeout(function timer() {
    const p = new Promise(function(resolve) {
      console.log('Done')
      resolve()
    }) 
  }, time)
}
