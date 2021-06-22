export const delay = (time) => {
  return new Promise(function(resolve) {
    console.log('Done')
    setTimeout(function timer() {
      resolve()
    }, time)
  }) 
}

