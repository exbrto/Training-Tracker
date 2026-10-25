const complete = document.querySelectorAll('.completedBtn');

const trashy = document.querySelectorAll('.trash')

Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.dataset.doneId
        fetch(`/workouts/${id}`, { // the name in fetch has to match with the server, but with Express we dont need
          method: 'put',            // to add the slash
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trashy).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.dataset.trashId
        fetch(`/workouts/${id}`, { // the name in fetch has to match with the server, but with Express we dont need
          method: 'delete',            // to add the slash
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});